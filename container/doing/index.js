import * as React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchQuestionsThunk,
    updateRanksThunk,
    userReportQuestionThunk,
} from "../../redux/thunk";
import DoingComponent from "../../screens/doing";
import { showToastAndroid, shuffleArray } from "../../untils/functions";
import * as Animatable from "react-native-animatable";
import { Image } from "react-native";
import BackgroundButtonOptions from "../../assets/doing.png";
import ButtonComponent from "../../commons/button";
import { DEFAULT_COLOR } from "../../untils/constants";
import { useTheme } from "@react-navigation/native";
import { commonStyles } from "../../untils/styles/global";

// connect redux
const useConnect = () => {
    const mapState = {
        user: useSelector((state) => state.user),
        role: useSelector((state) => state.role),
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
        role,
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
    const { colors } = useTheme();

    if (role === "admin") {
        return (
            <Animatable.View animation="slideInUp" easing="ease-out">
                <View>
                    <View
                        style={{
                            marginBottom: 100,
                            paddingLeft: 10,
                            paddingRight: 10,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={BackgroundButtonOptions}
                            style={{
                                width: 300,
                                height: 300,
                            }}
                        />
                        <View style={{ marginTop: -40 }}>
                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: 30,
                                    textAlign: "center",
                                }}
                            >
                                {`Toán học lớp ${className}`}
                            </Text>
                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: 18,
                                    textAlign: "center",
                                    marginTop: 10,
                                }}
                            >
                                {`Số lượng câu hỏi lớp ${className} đang có : ${questions.length}`}
                            </Text>
                        </View>
                        <View>
                            {questions.length === 0 && (
                                <ButtonComponent
                                    title="Thêm câu hỏi"
                                    onPress={() => navigation.navigate("Question")}
                                    buttonStyle={{
                                        ...commonStyles.buttonSubmit,
                                        marginTop: 15,
                                    }}
                                    titleStyle={{ fontSize: 16 }}
                                />
                            )}
                        </View>
                    </View>
                </View>
            </Animatable.View>
        );
    }
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
