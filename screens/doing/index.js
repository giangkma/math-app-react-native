import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Background from "../../assets/bg.jpg";
import ButtonComponent from "../../commons/button";
import HeaderComponent from "../../commons/header";
import { buttonsAnswer } from "../../untils/dummy";
import { commonStyles } from "../../untils/styles/global";
import ModalResult from "../../commons/modalResult";
import Error from "../../commons/error";
import Success from "../../commons/success";

const PrepareExample = ({ className, onStart, numQuestions, backHome }) => {
    return (
        <>
            <View
                style={{
                    margin: 20,
                }}
            >
                <View
                    style={{
                        backgroundColor: "#3d3d3d",
                        padding: 18,
                        borderWidth: 3,
                        borderColor: "rgb(145, 122, 122)",
                        borderRadius: 10,
                        marginBottom: 20,
                    }}
                >
                    {numQuestions !== 0 ? (
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 27,
                                textAlign: "center",
                            }}
                        >
                            {`Toán học lớp ${className}`}
                        </Text>
                    ) : (
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 24,
                                textAlign: "center",
                            }}
                        >
                            {`Hiện tại không có dữ liệu câu hỏi lớp ${className} ! Chúng tôi sẽ cập nhật trong thời gian sắp tới`}
                        </Text>
                    )}
                </View>
                <ButtonComponent
                    title={
                        numQuestions !== 0
                            ? "Bắt đầu học"
                            : "Quay lại trang chủ"
                    }
                    onPress={numQuestions !== 0 ? onStart : backHome}
                    buttonStyle={commonStyles.buttonSubmit}
                    titleStyle={{ fontSize: 20 }}
                />
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
}) => {
    const onCheckAnswer = (answerItem) => {
        if (!isAnsweredQuestion) {
            //Nguời dùng chưa click submit câu trả lời
            if (answer === answerItem) {
                return "#26de81";
            }
            return "#1B9CFC";
        } else {
            // người dùng đã click submit rồi
            if (!isAnsweredCorrectly) {
                // nếu là câu trả lời sai
                if (answer === answerItem) {
                    return "#EA2027"; // đổi màu đáp án sai
                } else if (question.correctAnswer === answerItem) {
                    return "#26de81"; // đổi màu đáp án đúng
                }
                return "#1B9CFC";
            } else {
                //nếu câu trả lời là đúng
                if (answer === answerItem) {
                    return "#26de81";
                }
                return "#1B9CFC";
            }
        }
    };
    return (
        <>
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
                        message={`Sai ! Đáp án chính xác : ${question.correctAnswer}`}
                    />
                ) : (
                    // thông báo nếu câu trả lời là đúng
                    <Success message="Chính xác" />
                )
            ) : null}
            <View style={styles.rowAnswer}>
                {buttonsAnswer.map((button, index) => {
                    const answerItem = arrayAnwers[index];
                    return (
                        <View key={index}>
                            <ButtonComponent
                                buttonStyle={{
                                    width: 150,
                                    margin: 10,
                                    borderRadius: 10,
                                    backgroundColor: onCheckAnswer(answerItem),
                                }}
                                title={`${button.key}: ${answerItem}`}
                                titleStyle={{ fontSize: 22 }}
                                onPress={() => {
                                    if (!isAnsweredQuestion)
                                        onSelectAnswer(answerItem);
                                }}
                            />
                        </View>
                    );
                })}
            </View>
            <View style={{ marginTop: 10 }}>
                {isAnsweredQuestion ? (
                    <ButtonComponent
                        buttonStyle={commonStyles.buttonSubmit}
                        titleStyle={{ fontSize: 18 }}
                        title="Câu tiếp"
                        onPress={onNextQuestion}
                    />
                ) : (
                    <ButtonComponent
                        buttonStyle={commonStyles.buttonSubmit}
                        titleStyle={{ fontSize: 18 }}
                        title="Gửi kết quả"
                        onPress={onSubmitAnswer}
                    />
                )}
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
                <View style={commonStyles.contentPage}>
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
                        />
                    ) : (
                        <PrepareExample
                            numQuestions={numQuestions}
                            className={className}
                            onStart={onStart}
                            backHome={backHome}
                        />
                    )}
                </View>
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
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
});
export default DoingComponent;
