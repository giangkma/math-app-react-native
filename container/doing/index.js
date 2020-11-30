import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRanksThunk } from "../../redux/thunk";
import DoingComponent from "../../screens/doing";
import { arrayDummy } from "../../untils/dummy";
import { showAlert, shuffleArray } from "../../untils/functions";

// connect redux
const useConnect = () => {
    const mapState = {
        user: useSelector((state) => state.user),
        questions: useSelector((state) => state.questions),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onUpdateRanksThunk: (fullName, password, classUser, scoreUser) =>
                dispatch(
                    updateRanksThunk(fullName, password, classUser, scoreUser)
                ),
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
    const { onUpdateRanksThunk, questions } = useConnect();

    const dataQuestionsClass = questions.filter((question) => {
        return question.class === className;
    });
    const [isShowModalResult, setIsShowModalResult] = React.useState(false);

    const [numberOfCorrect, setNumberOfCorrect] = React.useState(0);
    const [numberOfWrong, setNumberOfWrong] = React.useState(0);

    const [isStart, setIsStart] = React.useState(false);
    const [isAnsweredQuestion, setIsAnsweredQuestion] = React.useState(false);
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const [answer, setAnswer] = React.useState(null);
    const [question, setQuestion] = React.useState(null);
    const [arrayAnwers, setArrayAnwers] = React.useState(null);
    const randomQuestion = () => {
        const number = Math.floor(Math.random() * dataQuestionsClass.length);
        const item = dataQuestionsClass[number];
        const { correctAnswer } = item;
        const arrayNumber = shuffleArray(arrayDummy).map((item) => {
            return (item += correctAnswer); //trộn mảng, và cộng các phần tử cho correctAnwer để đáp án chênh lệnh nhau nhỏ
        });
        const arrayAnswer = shuffleArray([
            //cắt 3 phần tử của mảng vừa trộn, trộn tiếp với đáp án đúng để ra mảng answer;
            ...arrayNumber.slice(0, 3),
            correctAnswer,
        ]);
        setArrayAnwers(arrayAnswer);
        setQuestion(item);
    };
    const onToggleModalResult = () => {
        //toggle modal
        setIsShowModalResult(!isShowModalResult);
    };
    const onSendResult = async (fullName, password, classUser, scoreUser) => {
        // gửi kết quả để xếp hạng điểm
        const res = await onUpdateRanksThunk(
            fullName,
            password,
            classUser,
            scoreUser
        );
        if (res) navigation.navigate("Home");
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
        // gửi đáp án
        if (!answer) showAlert("Bạn chưa chọn đáp án !");
        else {
            setIsAnsweredQuestion(true);
            if (answer === question.correctAnswer) {
                setIsAnsweredCorrectly(true);
                const newNumberOfCorrect = numberOfCorrect + 1;
                setNumberOfCorrect(newNumberOfCorrect);
            } else {
                const newNumberOfWrong = numberOfWrong + 1;
                setNumberOfWrong(newNumberOfWrong);
            }
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

    return (
        <DoingComponent
            numQuestions={dataQuestionsClass.length}
            navigation={navigation}
            className={className}
            onStart={onStart}
            isStart={isStart}
            onSelectAnswer={onSelectAnswer}
            answer={answer}
            onSubmitAnswer={onSubmitAnswer}
            count={count}
            question={question}
            arrayAnwers={arrayAnwers}
            isAnsweredQuestion={isAnsweredQuestion}
            onNextQuestion={onNextQuestion}
            isAnsweredCorrectly={isAnsweredCorrectly}
            onToggleModalResult={onToggleModalResult}
            onSendResult={onSendResult}
            isShowModalResult={isShowModalResult}
            onEnd={onEnd}
            numberOfCorrect={numberOfCorrect}
            numberOfWrong={numberOfWrong}
        />
    );
};
export default DoingContainer;
