import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { RadioButton } from "react-native-paper";
import BackgroundButtonOptions from "../../assets/doing.png";
import ButtonComponent from "../../commons/button";
import Error from "../../commons/error";
import ModalResult from "../../commons/modalResult";
import Success from "../../commons/success";
import { DEFAULT_COLOR } from "../../untils/constants";
import { buttonsAnswer } from "../../untils/dummy";
import { commonStyles } from "../../untils/styles/global";

const PrepareExample = ({ className, onStart, numQuestions, backHome }) => {
    const { colors } = useTheme();

    return (
        <>
            <View style={styles.Container}>
                <View
                    style={{
                        marginBottom: 100,
                        paddingLeft: 10,
                        paddingRight: 10,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Animatable.Image
                        animation="slideInDown"
                        easing="ease-out"
                        source={BackgroundButtonOptions}
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    />
                    <Animatable.View
                        animation="slideInRight"
                        easing="ease-out"
                        style={{ marginTop: -40 }}
                    >
                        {numQuestions !== 0 ? (
                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: 30,
                                    textAlign: "center",
                                }}
                            >
                                {`Toán học lớp ${className}`}
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: 18,
                                    textAlign: "center",
                                }}
                            >
                                {`Hiện tại không có dữ liệu câu hỏi lớp ${className} ! Chúng tôi sẽ cập nhật trong thời gian sắp tới`}
                            </Text>
                        )}
                    </Animatable.View>
                    <Animatable.View animation="slideInUp" easing="ease-out">
                        <ButtonComponent
                            title={
                                numQuestions !== 0
                                    ? "Bắt đầu học"
                                    : "Quay lại trang chủ"
                            }
                            onPress={numQuestions !== 0 ? onStart : backHome}
                            buttonStyle={{
                                ...commonStyles.buttonSubmit,
                                marginTop: 15,
                            }}
                            titleStyle={{ fontSize: 16 }}
                        />
                    </Animatable.View>
                </View>
            </View>
        </>
    );
};
const StartExample = ({
    answer,
    onSelectAnswer,
    onSubmitAnswer,
    count,
    question,
    arrayAnwers,
    isAnsweredQuestion,
    onNextQuestion,
    isAnsweredCorrectly,
    numberOfWrong,
    onEnd,
    numberOfCorrect,
}) => {
    const { colors } = useTheme();

    const onCheckAnswer = (answerItem) => {
        if (!isAnsweredQuestion) {
            //Nguời dùng chưa click submit câu trả lời
            if (answer === answerItem) {
                return DEFAULT_COLOR;
            }
            return "#DAE2ED";
        } else {
            // người dùng đã click submit rồi
            if (!isAnsweredCorrectly) {
                // nếu là câu trả lời sai
                if (answer === answerItem) {
                    return "#EA2027"; // đổi màu đáp án sai
                } else if (question.correctAnswer === answerItem) {
                    return DEFAULT_COLOR; // đổi màu đáp án đúng
                }
                return "#DAE2ED";
            } else {
                //nếu câu trả lời là đúng
                if (answer === answerItem) {
                    return DEFAULT_COLOR;
                }
                return "#DAE2ED";
            }
        }
    };
    return (
        <>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 5,
                    backgroundColor: colors.headerContentHome,
                    zIndex: 100
                }}
            >
                <ButtonComponent
                    buttonStyle={{
                        ...commonStyles.buttonSubmit,
                        backgroundColor: "#EA2027",
                    }}
                    titleStyle={{ fontSize: 12 }}
                    title="Kết thúc"
                    onPress={onEnd}
                />
                <View>
                    <Text style={{ color: colors.text, fontSize: 16 }}>
                        {`${numberOfCorrect} đúng | ${numberOfWrong} sai`}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    marginTop: -50,
                    justifyContent: "center",
                }}
            >
                <View style={styles.countAnswer}>
                    <Text style={{ color: "#fff", fontSize: 24 }}>
                        {`Câu ${count}`}
                    </Text>
                </View>
                <View style={styles.titleAnswer}>
                    <Text style={{ color: "#fff", fontSize: 20 }}>
                        {`( ID: ${question.id} )`} {" : "} {question.question}
                    </Text>
                </View>
                {isAnsweredQuestion ? ( // nếu đã submit sẽ hiển thị thông báo
                    !isAnsweredCorrectly ? ( //thông báo nếu câu trả lời là sai
                        <Error
                            message={`Sai rồi ! Đáp án chính xác : ${question.correctAnswer}`}
                        />
                    ) : (
                        // thông báo nếu câu trả lời là đúng
                        <Success message="Rất tốt" />
                    )
                ) : null}
                <View style={styles.rowAnswer}>
                    {buttonsAnswer.map((button, index) => {
                        const answerItem = arrayAnwers[index];
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    if (!isAnsweredQuestion)
                                        onSelectAnswer(answerItem);
                                }}
                            >
                                <View
                                    style={{
                                        borderWidth: 3,
                                        borderColor: onCheckAnswer(answerItem),
                                        height: 50,
                                        marginTop: 8,
                                        marginLeft: 20,
                                        marginRight: 20,
                                        borderRadius: 10,
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingLeft: 5,
                                    }}
                                >
                                    <RadioButton
                                        status={
                                            answer === answerItem
                                                ? "checked"
                                                : "unchecked"
                                        }
                                        color={onCheckAnswer(answerItem)}
                                        onPress={() => {
                                            if (!isAnsweredQuestion)
                                                onSelectAnswer(answerItem);
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            marginLeft: 5,
                                            color: colors.text,
                                        }}
                                    >
                                        {`${button.key}: ${answerItem}`}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={{ marginTop: 20 }}>
                    {isAnsweredQuestion ? (
                        <ButtonComponent
                            buttonStyle={commonStyles.buttonSubmit}
                            titleStyle={{ fontSize: 14 }}
                            title="Câu tiếp"
                            onPress={onNextQuestion}
                        />
                    ) : (
                        <ButtonComponent
                            buttonStyle={commonStyles.buttonSubmit}
                            titleStyle={{ fontSize: 14 }}
                            title="Gửi kết quả"
                            onPress={onSubmitAnswer}
                        />
                    )}
                </View>
            </View>
        </>
    );
};
const DoingComponent = ({
    navigation,
    className,
    backHome,
    numQuestions,
    isStart,
    onStart,
    onSelectAnswer,
    answer,
    onSubmitAnswer,
    count,
    question,
    arrayAnwers,
    isAnsweredQuestion,
    onNextQuestion,
    isAnsweredCorrectly,
    isShowModalResult,
    onSendResult,
    onToggleModalResult,
    onEnd,
    numberOfWrong,
    numberOfCorrect,
}) => {
    return (
        <>
            <View style={commonStyles.backgroundImage}>
                {isStart ? (
                    <StartExample
                        onSelectAnswer={onSelectAnswer}
                        answer={answer}
                        onSubmitAnswer={onSubmitAnswer}
                        question={question}
                        count={count}
                        arrayAnwers={arrayAnwers}
                        isAnsweredQuestion={isAnsweredQuestion}
                        onNextQuestion={onNextQuestion}
                        isAnsweredCorrectly={isAnsweredCorrectly}
                        numberOfWrong={numberOfWrong}
                        numberOfCorrect={numberOfCorrect}
                        onEnd={onEnd}
                    />
                ) : (
                    <PrepareExample
                        numQuestions={numQuestions}
                        className={className}
                        onStart={onStart}
                        backHome={backHome}
                    />
                )}
                <ModalResult
                    isShowModalResult={isShowModalResult}
                    onSendResult={onSendResult}
                    onToggleModalResult={onToggleModalResult}
                    numberOfWrong={numberOfWrong}
                    numberOfCorrect={numberOfCorrect}
                    className={className}
                />
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    countAnswer: {
        backgroundColor: "rgb(201, 152, 46)",
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "#ffdf86",
    },
    titleAnswer: {
        backgroundColor: "#6D214F",
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "#B33771",
        marginTop: 15,
        marginBottom: 10,
    },
    rowAnswer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        marginTop: 5,
    },
    Container: {
        width: "100%",
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },
    backgroundImageCard: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    backgroundColorCard: {
        position: "absolute",
        backgroundColor: "#1e272e90",
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
});
export default DoingComponent;
