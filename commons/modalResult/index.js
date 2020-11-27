import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";
import Textarea from "react-native-textarea";
import { useDispatch, useSelector } from "react-redux";
import { actionSetUser } from "../../redux/actions";
import { checkInformationThunk } from "../../redux/thunk";
import ButtonComponent from "../../commons/button";
import { showAlert } from "../../untils/functions";
import { commonStyles } from "../../untils/styles/global";
import Error from "../error";
// connect redux
const useConnect = () => {
    const mapState = {
        user: useSelector((state) => state.user),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onCheckInformationThunk: (nameUser, passwordUser) =>
                dispatch(checkInformationThunk(nameUser, passwordUser)),
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
    const { user, onCheckInformationThunk } = useConnect();
    const score = (numberOfCorrect - numberOfWrong) * 10;
    const [
        isShowModalEnterInformation,
        setIsShowModalEnterInformation,
    ] = React.useState(false);
    const [nameUser, setNameUser] = useState(null);
    const [passwordUser, setPasswordUser] = useState(null);
    const [error, setError] = useState(null);
    const sendResult = () => {
        if (!user) {
            //trường hợp chua có thông tin ng dùng
            setIsShowModalEnterInformation(true); //hiện form cho ng dùng nhập
        } else {
            //trường hợp đã lưu thông tin user
            const { nameUser, passwordUser } = user; //lấy thông tin và thực hiện update score
            onToggleModalResult();
            onSendResult(nameUser, passwordUser, className, score);
        }
    };
    const onAuthenticationInformation = async () => {
        if (!nameUser || !passwordUser) {
            setError("Hãy nhập đầy đủ thông tin !");
        } else {
            const check = await onCheckInformationThunk(
                nameUser,
                passwordUser,
                className
            );
            if (!check) {
                setError(
                    `Mật khẩu bạn nhập không đúng với tên ${nameUser} ! Hãy chọn tên khác hoặc kiểm tra lại mật khẩu.`
                );
            } else {
                showAlert("Lưu thông tin thành công !");
                setIsShowModalEnterInformation(false);
            }
        }
    };
    return (
        <Overlay
            isVisible={isShowModalResult}
            overlayStyle={{ margin: 30, padding: 15 }}
        >
            {isShowModalEnterInformation ? (
                <>
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                        🔊 Thiết bị này chưa có thông tin của bạn. Hãy nhập đầy
                        đủ thông tin để chúng tôi có thể cập nhật điểm cho bạn
                    </Text>
                    {error && (
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Error
                                message={error}
                                styleProps={{
                                    width: "100%",
                                    backgroundColor: "#fff",
                                }}
                            />
                        </View>
                    )}
                    <View>
                        <Textarea
                            containerStyle={styles.correctAnswer}
                            style={styles.textarea}
                            onChangeText={(text) => setNameUser(text)}
                            defaultValue={nameUser}
                            maxLength={30}
                            placeholder={"Tên : "}
                            placeholderTextColor={"black"}
                            underlineColorAndroid={"transparent"}
                        />
                        {/* {errors && errors.correctAnswer && (
                            <Text style={styles.error_message}>
                                {errors.correctAnswer}
                            </Text>
                        )} */}
                        <Textarea
                            containerStyle={styles.correctAnswer}
                            style={styles.textarea}
                            onChangeText={(text) => setPasswordUser(text)}
                            defaultValue={passwordUser}
                            maxLength={10}
                            placeholder={"Mật khẩu : "}
                            placeholderTextColor={"black"}
                            underlineColorAndroid={"transparent"}
                        />
                        {/* {errors && errors.correctAnswer && (
                            <Text style={styles.error_message}>
                                {errors.correctAnswer}
                            </Text>
                        )} */}
                    </View>
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            flexDirection: "row",
                            marginTop: 20,
                        }}
                    >
                        <ButtonComponent
                            buttonStyle={{
                                ...commonStyles.buttonSubmit,
                                marginRight: 10,
                                backgroundColor: "#576574",
                            }}
                            titleStyle={{ fontSize: 18 }}
                            title="Quay lại"
                            onPress={() =>
                                setIsShowModalEnterInformation(false)
                            }
                        />
                        <ButtonComponent
                            buttonStyle={commonStyles.buttonSubmit}
                            titleStyle={{ fontSize: 18 }}
                            title="Lưu"
                            onPress={onAuthenticationInformation}
                        />
                    </View>
                </>
            ) : (
                <>
                    <Text style={{ fontSize: 18 }}>
                        <Text style={{ color: "red", fontSize: 22 }}>
                            👏 {score > 0 ? "Thật tuyệt" : "Cố gắng hơn nhé"} !
                        </Text>{" "}
                        Bạn đã làm đúng{" "}
                        <Text style={{ color: "green", fontSize: 20 }}>
                            {numberOfCorrect} câu{" "}
                        </Text>
                        và sai{" "}
                        <Text style={{ color: "red", fontSize: 20 }}>
                            {numberOfWrong} câu
                        </Text>{" "}
                        trong đề{" "}
                        <Text style={{ fontSize: 20 }}>
                            Toán lớp {className}
                        </Text>{" "}
                        ! Bạn {score >= 0 ? "có thêm" : "bị trừ"}{" "}
                        <Text style={{ color: "green", fontSize: 20 }}>
                            {Math.abs(score)} điểm
                        </Text>{" "}
                        ! Bạn có muốn tiếp tục làm bài không ?
                    </Text>
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            flexDirection: "row",
                            marginTop: 20,
                        }}
                    >
                        <ButtonComponent
                            buttonStyle={{
                                ...commonStyles.buttonSubmit,
                                marginRight: 10,
                                backgroundColor: "#576574",
                            }}
                            titleStyle={{ fontSize: 18 }}
                            title="Gửi kết quả"
                            onPress={sendResult}
                        />
                        <ButtonComponent
                            buttonStyle={commonStyles.buttonSubmit}
                            titleStyle={{ fontSize: 18 }}
                            title="Tiếp tục làm"
                            onPress={onToggleModalResult}
                        />
                    </View>
                </>
            )}
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
