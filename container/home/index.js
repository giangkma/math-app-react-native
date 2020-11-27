import * as React from "react";
import { useEffect } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HomeComponent from "../../screens/home";
import { fetchQuestionsThunk } from "../../redux/thunk";
import DoingContainer from "../doing";
import QuestionContainer from "../question";
// connect redux
const useConnect = () => {
    const mapState = {
        questions: useSelector((state) => state.questions),
        accessToken: useSelector((state) => state.accessToken),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onFetchQuestionsThunk: () => dispatch(fetchQuestionsThunk()),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const HomeContainer = ({ navigation }) => {
    const { onFetchQuestionsThunk, questions, accessToken } = useConnect();
    useEffect(() => {
        (async () => {
            try {
                await onFetchQuestionsThunk();
            } catch (e) {
                //error
            }
        })();
    }, []);
    return (
        <HomeComponent
            numQuestions={questions.length}
            accessToken={accessToken}
            navigation={navigation}
        />
    );
};
export default HomeContainer;
