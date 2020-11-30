import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Textarea from "react-native-textarea";
import ButtonComponent from "../../commons/button";
import { commonStyles } from "../../untils/styles/global";
import { Picker } from "native-base";
import { DEFAULT_COLOR } from "../../untils/constants";
import { useTheme } from "react-native-paper";
import * as Animatable from "react-native-animatable";

const QuestionComponent = ({
    setTitle,
    setCorrectAnswer,
    onSubmitFormQuestion,
    errors,
    title,
    correctAnswer,
    onSelectClassToAdd,
    classQuestion,
    toggleFormAddQuestion,
    isAddQuestion,
    setIdQuestionEdit,
    onSearchQuestion,
}) => {
    const { colors } = useTheme();
    return (
        <Animatable.View animation="slideInUp" easing="ease-out">
            <View style={{ padding: 20, position: "relative" }}>
                <View style={commonStyles.titlePage}>
                    <Text
                        style={{
                            color: colors.text,
                            fontSize: 24,
                            fontWeight: "bold",
                        }}
                    >
                        {"Quản lý câu hỏi 👋"}
                    </Text>
                </View>
                <View
                    style={{
                        position: "absolute",
                        display: "flex",
                        bottom: 0,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 20,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            paddingBottom: 10,
                            borderBottomWidth: isAddQuestion ? 3 : 0,
                            borderBottomColor: DEFAULT_COLOR,
                        }}
                        onPress={toggleFormAddQuestion}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: colors.text,
                            }}
                        >
                            {"Thêm câu hỏi"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={toggleFormAddQuestion}
                        style={{
                            height: "100%",
                            paddingBottom: 10,
                            borderBottomWidth: !isAddQuestion ? 3 : 0,
                            borderBottomColor: DEFAULT_COLOR,
                            marginLeft: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: colors.text,
                            }}
                        >
                            {"Chỉnh sửa câu hỏi"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <View style={{ marginBottom: 15 }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: colors.text,
                        }}
                    >
                        {"Thông tin câu hỏi"}
                    </Text>
                </View>
                {!isAddQuestion && (
                    <>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                            }}
                        >
                            <Textarea
                                containerStyle={{
                                    width: "70%",
                                    height: 40,
                                    padding: 5,
                                    borderWidth: 2,
                                    borderColor: colors.borderInputColor,
                                }}
                                style={{
                                    ...styles.textaream,
                                    color: colors.text,
                                }}
                                onChangeText={(text) => setIdQuestionEdit(text)}
                                maxLength={10}
                                placeholder={"ID câu hỏi : "}
                                placeholderTextColor={
                                    colors.placeholderTextColor
                                }
                                underlineColorAndroid={"transparent"}
                            />
                            <ButtonComponent
                                buttonStyle={{
                                    backgroundColor: DEFAULT_COLOR,
                                    width: 100,
                                }}
                                titleStyle={{ fontSize: 13 }}
                                title="Tìm kiếm"
                                onPress={onSearchQuestion}
                            />
                        </View>
                        {errors && errors.idQuestion && (
                            <Text
                                style={{
                                    ...styles.error_message,
                                    marginTop: -10,
                                    marginBottom: 15,
                                }}
                            >
                                {errors.idQuestion}
                            </Text>
                        )}
                    </>
                )}
                {(title || isAddQuestion) && (
                        <>
                            <View
                                style={{
                                    borderColor: colors.borderInputColor,
                                    borderWidth: 2,
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}
                            >
                                <Picker
                                    style={{
                                        height: 40,
                                        color: colors.text,
                                    }}
                                    selectedValue={classQuestion}
                                    onValueChange={(itemValue) =>
                                        onSelectClassToAdd(itemValue)
                                    }
                                >
                                    <Picker.Item label="Chọn lớp" value={0} />
                                    <Picker.Item label="Lớp 1" value={1} />
                                    <Picker.Item label="Lớp 2" value={2} />
                                    <Picker.Item label="Lớp 3" value={3} />
                                    <Picker.Item label="Lớp 4" value={4} />
                                    <Picker.Item label="Lớp 5" value={5} />
                                </Picker>
                            </View>
                            {errors && errors.classQuestion && (
                                <Text
                                    style={{
                                        ...styles.error_message,
                                        marginTop: -10,
                                        marginBottom: 10,
                                    }}
                                >
                                    {errors.classQuestion}
                                </Text>
                            )}
                            <Textarea
                                containerStyle={{
                                    borderColor: colors.borderInputColor,
                                    borderWidth: 2,
                                    ...styles.titleQuestion,
                                }}
                                style={{
                                    ...styles.textarea,
                                    color: colors.text,
                                }}
                                onChangeText={(text) => setTitle(text)}
                                defaultValue={title}
                                maxLength={100}
                                placeholder={"Đề bài : "}
                                placeholderTextColor={
                                    colors.placeholderTextColor
                                }
                                underlineColorAndroid={"transparent"}
                            />
                            {errors && errors.title && (
                                <Text style={styles.error_message}>
                                    {errors.title}
                                </Text>
                            )}

                            <Textarea
                                containerStyle={{
                                    ...styles.correctAnswer,
                                    borderColor: colors.borderInputColor,
                                    borderWidth: 2,
                                }}
                                style={{
                                    ...styles.textarea,
                                    color: colors.text,
                                }}
                                onChangeText={(text) => setCorrectAnswer(text)}
                                defaultValue={correctAnswer}
                                maxLength={10}
                                placeholder={"Đáp án : "}
                                placeholderTextColor={
                                    colors.placeholderTextColor
                                }
                                underlineColorAndroid={"transparent"}
                            />
                            {errors && errors.correctAnswer && (
                                <Text style={styles.error_message}>
                                    {errors.correctAnswer}
                                </Text>
                            )}
                        </>
                    )}
                <View>
                    {isAddQuestion && (
                        <View style={commonStyles.wrapButtonSubmit}>
                            <ButtonComponent
                                buttonStyle={{
                                    ...commonStyles.buttonSubmit,
                                }}
                                titleStyle={{ fontSize: 14 }}
                                title="Thêm câu hỏi"
                                onPress={onSubmitFormQuestion}
                            />
                        </View>
                    )}
                    {!isAddQuestion && title && (
                        <ButtonComponent
                            buttonStyle={commonStyles.buttonSubmit}
                            titleStyle={{ fontSize: 14 }}
                            title="Lưu thay đổi"
                            onPress={onSubmitFormQuestion}
                        />
                    )}
                </View>
            </View>
        </Animatable.View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingBottom: 30,
        padding: 20,
        width: "100%",
        height: "100%",
    },
    titleQuestion: {
        height: 130,
        width: "100%",
        padding: 10,
    },
    correctAnswer: {
        marginTop: 10,
        height: 40,
        padding: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    textarea: {
        textAlignVertical: "top", // hack android
        height: 170,
        fontSize: 18,
        color: "#333",
    },
    error_message: {
        color: "red",
        marginLeft: 5,
        fontSize: 18,
        marginTop: 5,
    },
    borderInput: {
        borderWidth: 2,
        borderColor: "#DAE2ED",
    },
});

export default QuestionComponent;
