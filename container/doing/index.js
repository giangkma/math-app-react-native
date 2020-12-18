import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchQuestionsThunk,
    updateRanksThunk,
    userReportQuestionThunk,
} from "../../redux/thunk";
import DoingComponent from "../../screens/doing";
import { showToastAndroid, shuffleArray } from "../../untils/functions";

// connect redux
const useConnect = () => {
    const mapState = {
        user: useSelector((state) => state.user),
        questions: useSelector((state) => state.questions),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onFetchQuestionsThunk: (className) =>
                dispatch(fetchQuestionsThunk(className)),
            onUserReportQuestionThunk: (idQuestion, className, user) =>
                dispatch(userReportQuestionThunk(idQuestion, className, user)),
            onUpdateRanksThunk: (score, className) =>
                dispatch(updateRanksThunk(score, className)),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const DoingContainer = ({ navigation, route }) => {
    const className = route.params.className;
    const {
        onUpdateRanksThunk,
        questions,
        onFetchQuestionsThunk,
        onUserReportQuestionThunk,
        user,
    } = useConnect();
    const [isShowModalResult, setIsShowModalResult] = React.useState(false);

    const [numberOfCorrect, setNumberOfCorrect] = React.useState(0);
    const [numberOfWrong, setNumberOfWrong] = React.useState(0);

    const [isStart, setIsStart] = React.useState(false);
    const [isAnsweredQuestion, setIsAnsweredQuestion] = React.useState(false);
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const [answer, setAnswer] = React.useState(null);
    const [question, setQuestion] = React.useState(null);

    const randomQuestion = () => {
        const number = Math.floor(Math.random() * questions.length);
        const item = questions[number];
        const newArr =
            typeof item.arrayAnswer === "string"
                ? JSON.parse(item.arrayAnswer)
                : item.arrayAnswer;
        item.arrayAnswer = shuffleArray(newArr);
        setQuestion(item);
    };
    const onToggleModalResult = () => {
        //toggle modal
        setIsShowModalResult(!isShowModalResult);
    };
    const onSendResult = async (score) => {
        // gửi kết quả để xếp hạng điểm
        const res = await onUpdateRanksThunk(score, className);
        if (res) navigation.navigate("HomePage");
    };
    const onNextQuestion = () => {
        // random câu hỏi tiếp và xóa dữ liệu câu hỏi cũ
        const newCount = count + 1;
        setCount(newCount);
        setAnswer(null);
        setIsAnsweredQuestion(false);
        setIsAnsweredCorrectly(false);
        randomQuestion();
    };
    const onSelectAnswer = (answer) => {
        // lựa chọn đáp án
        setAnswer(answer);
    };
    const onSubmitAnswer = () => {
        setIsAnsweredQuestion(true);
        if (answer === question.correctAnswer) {
            setIsAnsweredCorrectly(true);
            const newNumberOfCorrect = numberOfCorrect + 1;
            setNumberOfCorrect(newNumberOfCorrect);
        } else {
            const newNumberOfWrong = numberOfWrong + 1;
            setNumberOfWrong(newNumberOfWrong);
        }
    };
    const onEnd = () => {
        // kết thúc làm bài && hiển thị modal confirm
        onToggleModalResult();
    };
    const onStart = () => {
        // bắt đầu làm bài
        randomQuestion();
        setIsStart(true);
    };

    const onUserReportQuestion = async (idQuestion) => {
        await onUserReportQuestionThunk(idQuestion);
        onNextQuestion();
    };

    React.useEffect(() => {
        (async () => {
            try {
                await onFetchQuestionsThunk(className);
            } catch (e) {
                //error
            }
        })();
    }, [className]);

    return (
        <DoingComponent
            numQuestions={questions.length}
            navigation={navigation}
            className={className}
            onStart={onStart}
            isStart={isStart}
            onSelectAnswer={onSelectAnswer}
            answer={answer}
            onSubmitAnswer={onSubmitAnswer}
            count={count}
            question={question}
            isAnsweredQuestion={isAnsweredQuestion}
            onNextQuestion={onNextQuestion}
            isAnsweredCorrectly={isAnsweredCorrectly}
            onToggleModalResult={onToggleModalResult}
            onSendResult={onSendResult}
            isShowModalResult={isShowModalResult}
            onEnd={onEnd}
            numberOfCorrect={numberOfCorrect}
            numberOfWrong={numberOfWrong}
            onUserReportQuestion={onUserReportQuestion}
        />
    );
};
export default DoingContainer;
