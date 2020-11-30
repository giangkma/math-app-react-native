import { persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import * as CONSTANTS from "../constants";
import { filterForDuplicateValues } from "../../untils/functions";

const initialState = {
    accessToken: null,
    questions: [],
    ranks: [],
    ranksInClass: [],
    user: null,
    loading: false,
    isDarkTheme: false
};
const persistCartConfig = {
    key: "state",
    storage: AsyncStorage,
    whitelist: ["accessToken", "questions", "ranks", "user", "isDarkTheme"],
};

const rootReducers = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.SHOW_LOADING: {
            return {
                ...state,
                loading: true,
            };
        }
        case CONSTANTS.TOGLE_THEME: {
            const { isDarkTheme } = state;
            return {
                ...state,
                isDarkTheme: !isDarkTheme,
            };
        }
        case CONSTANTS.HIDE_LOADING: {
            return {
                ...state,
                loading: false,
            };
        }
        case CONSTANTS.SET_TOKEN: {
            const { accessToken } = action.payload;
            return {
                ...state,
                accessToken: accessToken,
            };
        }
        case CONSTANTS.SET_QUESTIONS: {
            const { data } = action.payload;
            return {
                ...state,
                questions: data,
            };
        }
        case CONSTANTS.UPLOAD_SUCCESS: {
            const { question } = action.payload;
            const newData = state.questions.concat(question);
            return {
                ...state,
                questions: newData,
            };
        }
        case CONSTANTS.UPDATE_SUCCESS: {
            const { question } = action.payload;
            const { questions } = state;
            const index = questions.findIndex(
                (item) => item.id === question.id
            );
            const newData = [
                ...questions.slice(0, index),
                { ...question },
                ...questions.slice(index + 1),
            ];
            return {
                ...state,
                questions: newData,
            };
        }
        case CONSTANTS.SET_RANKS: {
            const { ranks } = action.payload;
            const sortRanks = ranks.sort((a, b) => b.score - a.score);
            return {
                ...state,
                ranks: sortRanks,
                ranksInClass: sortRanks,
            };
        }
        case CONSTANTS.FILTER_RANKS_CLASS: {
            const { className } = action.payload;
            const { ranks } = state;
            const newData =
                className === 0
                    ? ranks
                    : ranks.filter((rank) => rank.class === className);
            return {
                ...state,
                ranksInClass: newData,
            };
        }
        case CONSTANTS.SET_USER: {
            const { user } = action.payload;
            return {
                ...state,
                user: user,
            };
        }

        case CONSTANTS.UPLOAD_RANKS_SUCCESS: {
            const { user } = action.payload;
            const { ranks } = state;
            const newRanks = ranks.concat(user);
            const sortRanks = newRanks.sort((a, b) => b.score - a.score);
            return {
                ...state,
                ranks: sortRanks,
                ranksInClass: sortRanks,
            };
        }
        case CONSTANTS.UPDATE_RANKS_SUCCESS: {
            const { user } = action.payload;
            const { ranks } = state;
            const index = ranks.findIndex((item) => item.id === user.id);
            const newRanks = [
                ...ranks.slice(0, index),
                { ...user },
                ...ranks.slice(index + 1),
            ];
            const sortRanks = newRanks.sort((a, b) => b.score - a.score);
            return {
                ...state,
                ranks: sortRanks,
                ranksInClass: sortRanks,
            };
        }

        default:
            return state;
    }
};

export default persistReducer(persistCartConfig, rootReducers);
