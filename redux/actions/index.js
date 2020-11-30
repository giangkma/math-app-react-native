import * as CONSTANTS from "../constants";

export const actionSetToken = (accessToken) => {
    return {
        type: CONSTANTS.SET_TOKEN,
        payload: {
            accessToken,
        },
    };
};

export const actionSetQuestions = (data) => {
    return {
        type: CONSTANTS.SET_QUESTIONS,
        payload: {
            data,
        },
    };
};

export const actionUploadQuestionSuccess = (question) => {
    return {
        type: CONSTANTS.UPLOAD_SUCCESS,
        payload: {
            question,
        },
    };
};

export const actionUpdateQuestionSuccess = (question) => {
    return {
        type: CONSTANTS.UPDATE_SUCCESS,
        payload: {
            question,
        },
    };
};

export const actionLogout = () => {
    return {
        type: CONSTANTS.SET_TOKEN,
        payload: {
            accessToken: null,
        },
    };
};

export const actionSetRanks = (ranks) => {
    return {
        type: CONSTANTS.SET_RANKS,
        payload: {
            ranks,
        },
    };
};

export const actionUpdateRanksSuccess = (user) => {
    return {
        type: CONSTANTS.UPDATE_RANKS_SUCCESS,
        payload: {
            user,
        },
    };
};

export const actionUploadRanksSuccess = (user) => {
    return {
        type: CONSTANTS.UPLOAD_RANKS_SUCCESS,
        payload: {
            user,
        },
    };
};

export const actionSetUser = (user) => {
    return {
        type: CONSTANTS.SET_USER,
        payload: {
            user,
        },
    };
};

export const actionFilterRanksInClass = (className) => {
    return {
        type: CONSTANTS.FILTER_RANKS_CLASS,
        payload: {
            className,
        },
    };
};

export const actionShowLoading = () => {
    return {
        type: CONSTANTS.SHOW_LOADING,
    };
};

export const actionHideLoading = () => {
    return {
        type: CONSTANTS.HIDE_LOADING,
    };
};


export const actionTogleTheme = () => {
    return {
        type: CONSTANTS.TOGLE_THEME,
    };
};
