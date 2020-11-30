/* eslint-disable react/jsx-no-literals */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";
import { ProgressBar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../commons/button";
import { checkInformationThunk } from "../../redux/thunk";
import { DEFAULT_COLOR } from "../../untils/constants";
// connect redux
const useConnect = () => {
    const mapState = {
        user: useSelector((state) => state.user),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onCheckInformationThunk: (fullName, password) =>
                dispatch(checkInformationThunk(fullName, password)),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const ModalResult = ({
    isShowModalResult,
    onSendResult,
    onToggleModalResult,
    numberOfCorrect,
    numberOfWrong,
    className,
}) => {
    const answerNumber = numberOfCorrect + numberOfWrong;
    const exactRate = answerNumber === 0 ? 0 : numberOfCorrect / answerNumber;
    const wrongRate = answerNumber === 0 ? 0 : numberOfWrong / answerNumber;

    const { user } = useConnect();
    const score = (numberOfCorrect - numberOfWrong) * 10;
    const sendResult = () => {
        //trường hợp đã lưu thông tin user
        const { fullName, password } = user; //lấy thông tin và thực hiện update score
        onToggleModalResult();
        onSendResult(fullName, password, className, score);
    };
    return (
        <Overlay
            isVisible={isShowModalResult}
            overlayStyle={{ margin: 30, padding: 15 }}
        >
            <>
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 28 }}>Kết quả</Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            borderWidth: 3,
                            borderColor: "#55efc450",
                            margin: 10,
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontSize: 18,
                                    textAlign: "center",
                                    color: "#2d343650",
                                }}
                            >
                                Điểm
                            </Text>
                            <Text style={{ fontSize: 33, textAlign: "center" }}>
                                {score}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 24 }}>
                            {score <= 0 ? "Cố gắng lên nhé" : "Thật tuyệt vời"}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        marginBottom: 5,
                    }}
                >
                    <Text>Trả lời đúng : </Text>
                    <Text style={{ color: DEFAULT_COLOR }}>
                        {numberOfCorrect}
                    </Text>
                </View>
                <ProgressBar
                    progress={exactRate}
                    color={DEFAULT_COLOR}
                    style={{ height: 8, borderRadius: 8 }}
                />
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        marginBottom: 5,
                    }}
                >
                    <Text>Trả lời sai : </Text>
                    <Text style={{ color: "red" }}>{numberOfWrong}</Text>
                </View>
                <ProgressBar
                    progress={wrongRate}
                    color="red"
                    style={{ height: 8, borderRadius: 8 }}
                />
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        flexDirection: "row",
                        marginTop: 30,
                    }}
                >
                    <ButtonComponent
                        buttonStyle={{
                            marginRight: 10,
                            backgroundColor: "#576574",
                        }}
                        titleStyle={{ fontSize: 12 }}
                        title="Gửi kết quả"
                        onPress={sendResult}
                    />
                    <ButtonComponent
                        buttonStyle={{
                            backgroundColor: DEFAULT_COLOR,
                        }}
                        titleStyle={{ fontSize: 12 }}
                        title="Tiếp tục làm"
                        onPress={onToggleModalResult}
                    />
                </View>
            </>
        </Overlay>
    );
};
const styles = StyleSheet.create({
    correctAnswer: {
        marginTop: 10,
        height: 40,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#c8d6e5",
        padding: 10,
        width: "100%",
    },
    textarea: {
        textAlignVertical: "top", // hack android
        fontSize: 15,
        color: "#333",
    },
    error_message: {
        color: "red",
        marginLeft: 5,
        fontSize: 18,
        marginTop: 5,
    },
});
export default ModalResult;
