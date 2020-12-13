import { Picker } from "native-base";
import React from "react";
import { useForm } from "react-hook-form";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {
    RadioButton,
    Switch,
    TouchableRipple,
    useTheme,
} from "react-native-paper";
import Textarea from "react-native-textarea";
import ButtonComponent from "../../commons/button";
import InputReactHook from "../../commons/input";
import { DEFAULT_COLOR } from "../../untils/constants";
import { buttonsAnswer } from "../../untils/dummy";
import { commonStyles } from "../../untils/styles/global";

const QuestionComponent = ({
    setTitle,
    setCorrectAnswer,
    onSubmitFormQuestion,
    errors,
    arrayAnswer,
    title,
    correctAnswer,
    onSelectClassToAdd,
    classQuestion,
    toggleFormAddQuestion,
    isAddQuestion,
    setIdQuestionEdit,
    onSearchQuestion,
    isRandomArrayAsnwer,
    handleRandomArrayAnswer,
}) => {
    const { colors } = useTheme();
    const { register, handleSubmit, control } = useForm({});
    return (
        <Animatable.View animation="slideInUp" easing="ease-out">
            <ScrollView>
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
                                    onChangeText={(text) =>
                                        setIdQuestionEdit(text)
                                    }
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
                                placeholder={"Đề bài : "}
                                placeholderTextColor={
                                    colors.placeholderTextColor
                                }
                                underlineColorAndroid={"transparent"}
                            />
                            {isAddQuestion && (
                                <TouchableRipple
                                    style={{
                                        marginTop: 10,
                                    }}
                                    onPress={handleRandomArrayAnswer}
                                >
                                    <View
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Text style={{ color: colors.text }}>
                                            {"Hệ thống tự động random đáp án"}
                                        </Text>
                                        <View pointerEvents="none">
                                            <Switch
                                                value={isRandomArrayAsnwer}
                                            />
                                        </View>
                                    </View>
                                </TouchableRipple>
                            )}
                            {!isRandomArrayAsnwer ? (
                                <View style={styles.rowAnswer}>
                                    {buttonsAnswer.map((button, index) => {
                                        return (
                                            <View
                                                key={index}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        marginTop: 15,
                                                    }}
                                                >
                                                    <RadioButton
                                                        status={
                                                            correctAnswer ===
                                                            `answer${index + 1}`
                                                                ? "checked"
                                                                : "unchecked"
                                                        }
                                                        onPress={() => {
                                                            setCorrectAnswer(
                                                                `answer${
                                                                    index + 1
                                                                }`
                                                            );
                                                        }}
                                                    />
                                                </View>
                                                <InputReactHook
                                                    aref={register}
                                                    placeholder={`${button.key} :`}
                                                    name={`answer${index + 1}`}
                                                    control={control}
                                                    defaultValue={`${
                                                        !isAddQuestion
                                                            ? arrayAnswer[index]
                                                            : ""
                                                    }`}
                                                    style={{
                                                        ...styles.inputQuestion,
                                                        color: colors.text,
                                                        borderColor:
                                                            colors.borderInputColor,
                                                        flex: 1,
                                                    }}
                                                />
                                            </View>
                                        );
                                    })}
                                </View>
                            ) : (
                                <>
                                    <InputReactHook
                                        aref={register}
                                        placeholder="Đáp án : "
                                        name="correctAnswer"
                                        control={control}
                                        defaultValue={""}
                                        style={{
                                            ...styles.inputQuestion,
                                            color: colors.text,
                                            borderColor:
                                                colors.borderInputColor,
                                        }}
                                    />
                                    {!errors && (
                                        <Text
                                            style={{
                                                ...styles.error_message,
                                                fontSize: 14,
                                                marginTop: 15,
                                            }}
                                        >
                                            {
                                                "❗ Lưu ý : với lựa chọn này, bạn cần nhập đáp án chính xác để random ra khác đáp án khác gần với đáp án chính xác nhất !"
                                            }
                                        </Text>
                                    )}
                                </>
                            )}
                        </>
                    )}
                    {errors && (
                        <View style={styles.errorQuestion}>
                            <Text style={styles.errorQuestionTitle}>
                                {`❌ Lỗi : ${errors}`}
                            </Text>
                        </View>
                    )}
                    <View>
                        {isAddQuestion && (
                            <View style={commonStyles.wrapButtonSubmit}>
                                <ButtonComponent
                                    buttonStyle={{
                                        ...commonStyles.buttonSubmit,
                                        marginTop: 20,
                                    }}
                                    titleStyle={{ fontSize: 13 }}
                                    title="Thêm câu hỏi"
                                    onPress={handleSubmit(onSubmitFormQuestion)}
                                />
                            </View>
                        )}
                        {!isAddQuestion && title && (
                            <ButtonComponent
                                buttonStyle={{
                                    ...commonStyles.buttonSubmit,
                                    marginTop: 20,
                                }}
                                titleStyle={{ fontSize: 13 }}
                                title="Lưu thay đổi"
                                onPress={handleSubmit(onSubmitFormQuestion)}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>
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
    errorQuestion: {
        borderWidth: 2,
        borderColor: "red",
        display: "flex",
        justifyContent: "center",
        paddingLeft: 10,
        padding: 6,
        marginTop: 20,
        backgroundColor: "#ff383830",
    },
    errorQuestionTitle: {
        color: "#fff",
        fontSize: 15,
    },
    rowAnswer: {
        marginTop: 5,
    },
    textarea: {
        textAlignVertical: "top", // hack android
        height: 170,
        fontSize: 18,
        color: "#333",
    },
    inputQuestion: {
        paddingLeft: 10,
        padding: 4,
        marginTop: 15,
        borderWidth: 2,
        fontSize: 18,
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
