import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Textarea from "react-native-textarea";
import ButtonComponent from "../../commons/button";
import { commonStyles } from "../../untils/styles/global";
import { Picker } from "native-base";
import { DEFAULT_COLOR } from "../../untils/constants";
const QuestionComponent = ({
    navigation,
    backHome,
    numQuestions,
    setTitle,
    setCorrectAnswer,
    onSubmitFormQuestion,
    errors,
    title,
    correctAnswer,
    onSelectClassToAdd,
    classQuestion,
    onChangeOptionPageQuestion,
    optionPageQuestion,
    setIdQuestionEdit,
    onSearchQuestion,
}) => {
    return (
        <>
            <View style={{ padding: 20, position: "relative" }}>
                <View style={commonStyles.titlePage}>
                    <Text
                        style={{
                            color: "#090B17",
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
                            borderBottomWidth:
                                optionPageQuestion === "add" ? 3 : 0,
                            borderBottomColor: DEFAULT_COLOR,
                        }}
                        onPress={() => {
                            onChangeOptionPageQuestion("add");
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color:
                                    optionPageQuestion === "add"
                                        ? "#090B17"
                                        : "#090B1750",
                            }}
                        >
                            {"Thêm câu hỏi"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            onChangeOptionPageQuestion("edit");
                        }}
                        style={{
                            height: "100%",
                            paddingBottom: 10,
                            borderBottomWidth:
                                optionPageQuestion === "edit" ? 3 : 0,
                            borderBottomColor: DEFAULT_COLOR,
                            marginLeft: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color:
                                    optionPageQuestion === "edit"
                                        ? "#090B17"
                                        : "#090B1750",
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
                            color: "#090B17",
                        }}
                    >
                        {"Thông tin câu hỏi"}
                    </Text>
                </View>
                {optionPageQuestion === "edit" && (
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
                                    ...styles.borderInput,
                                    width: "70%",
                                    height: 40,
                                    padding: 5,
                                }}
                                style={styles.textarea}
                                onChangeText={(text) => setIdQuestionEdit(text)}
                                maxLength={10}
                                placeholder={"ID câu hỏi : "}
                                placeholderTextColor={"#00000050"}
                                underlineColorAndroid={"transparent"}
                            />
                            <ButtonComponent
                                buttonStyle={{
                                    backgroundColor: DEFAULT_COLOR,
                                    width: 100,
                                }}
                                titleStyle={{ fontSize: 18 }}
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
                {optionPageQuestion === "add" || title ? (
                    <>
                        <View
                            style={{
                                ...styles.borderInput,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        >
                            <Picker
                                style={{ height: 40, color: "#00000050" }}
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
                                ...styles.borderInput,
                                ...styles.titleQuestion,
                            }}
                            style={styles.textarea}
                            onChangeText={(text) => setTitle(text)}
                            defaultValue={title}
                            maxLength={100}
                            placeholder={"Đề bài : "}
                            placeholderTextColor={"#00000050"}
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
                                ...styles.borderInput,
                            }}
                            style={styles.textarea}
                            onChangeText={(text) => setCorrectAnswer(text)}
                            defaultValue={correctAnswer}
                            maxLength={10}
                            placeholder={"Đáp án : "}
                            placeholderTextColor={"#00000050"}
                            underlineColorAndroid={"transparent"}
                        />
                        {errors && errors.correctAnswer && (
                            <Text style={styles.error_message}>
                                {errors.correctAnswer}
                            </Text>
                        )}
                    </>
                ) : null}
                <View>
                    {optionPageQuestion === "add" && (
                        <View style={commonStyles.wrapButtonSubmit}>
                            <ButtonComponent
                                buttonStyle={{
                                    ...commonStyles.buttonSubmit,
                                }}
                                titleStyle={{ fontSize: 18 }}
                                title="Thêm câu hỏi"
                                onPress={onSubmitFormQuestion}
                            />
                        </View>
                    )}
                    {optionPageQuestion === "edit" && title && (
                        <ButtonComponent
                            buttonStyle={commonStyles.buttonSubmit}
                            titleStyle={{ fontSize: 18 }}
                            title="Lưu thay đổi"
                            onPress={onSubmitFormQuestion}
                        />
                    )}
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingBottom: 30,
        padding: 20,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    titleQuestion: {
        height: 130,
        width: "100%",
        backgroundColor: "#fff",
        padding: 10,
    },
    correctAnswer: {
        marginTop: 10,
        height: 40,
        backgroundColor: "#fff",
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
