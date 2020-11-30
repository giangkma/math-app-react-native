import React from "react";
import { Controller } from "react-hook-form";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import ButtonComponent from "../../commons/button";
import InputReactHook from "../../commons/input";
import { DEFAULT_COLOR } from "../../untils/constants";
import { showAlert } from "../../untils/functions";
import { commonStyles } from "../../untils/styles/global";

const AccountComponent = ({
    colors,
    user,
    isOpenFormChangePass,
    toggleFormChangePass,
    register,
    handleSubmit,
    control,
    errors,
    onSubmitFormChangePass,
}) => {
    const { fullName } = user;
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
                        {"Thông tin cá nhân 👋"}
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
                            borderBottomWidth: !isOpenFormChangePass ? 3 : 0,
                            borderBottomColor: DEFAULT_COLOR,
                        }}
                        onPress={() => {
                            toggleFormChangePass();
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: colors.text,
                            }}
                        >
                            {"Thông tin cá nhân"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            toggleFormChangePass();
                        }}
                        style={{
                            height: "100%",
                            paddingBottom: 10,
                            borderBottomWidth: isOpenFormChangePass ? 3 : 0,
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
                            {"Thay đổi mật khẩu"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Container}>
                {isOpenFormChangePass ? (
                    <>
                        <View style={{ marginBottom: 15 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: colors.text,
                                }}
                            >
                                {"Hãy điền đầy đủ thông tin !"}
                            </Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <InputReactHook
                                aref={register}
                                placeholder="Password"
                                name="password"
                                control={control}
                                defaultValue={""}
                                error={errors.password}
                                style={{
                                    ...commonStyles.inputHomeStack,
                                    borderColor: colors.borderInputColor,
                                    color: colors.text,
                                }}
                            />
                            <InputReactHook
                                name="newPassword"
                                control={control}
                                defaultValue={""}
                                aref={register}
                                placeholder={"Mật khẩu mới : "}
                                error={errors.newPassword}
                                style={{
                                    ...commonStyles.inputHomeStack,
                                    borderColor: colors.borderInputColor,
                                    color: colors.text,
                                }}
                            />
                            <InputReactHook
                                name="reNewPassword"
                                control={control}
                                defaultValue={""}
                                aref={register}
                                error={errors.reNewPassword}
                                style={{
                                    ...commonStyles.inputHomeStack,
                                    borderColor: colors.borderInputColor,
                                    color: colors.text,
                                }}
                                placeholder={"Nhập lại mật khẩu mới : "}
                            />
                        </View>
                    </>
                ) : (
                    <>
                        <Text style={{ color: colors.text }}>
                            {"Họ và tên"}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                showAlert("Bạn không được thay đổi Họ tên")
                            }
                        >
                            <View
                                style={{
                                    height: 50,
                                    padding: 10,
                                    borderWidth: 2,
                                    marginTop: 10,
                                    marginBottom: 5,
                                    borderColor: colors.borderInputColor,
                                    color: colors.text,
                                    fontSize: 18,
                                }}
                            >
                                <Text
                                    style={{ color: colors.text, fontSize: 18 }}
                                >
                                    {fullName}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
                {isOpenFormChangePass && (
                    <ButtonComponent
                        buttonStyle={{
                            ...commonStyles.buttonSubmit,
                            marginTop: 20,
                        }}
                        titleStyle={{ fontSize: 14 }}
                        title="Lưu thay đổi"
                        onPress={handleSubmit(onSubmitFormChangePass)}
                    />
                )}
            </View>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
    Container: {
        paddingTop: 25,
        paddingBottom: 30,
        padding: 20,
        width: "100%",
        height: "100%",
    },
    textarea: {
        textAlignVertical: "top", // hack android
        fontSize: 18,
    },
    errorMsg: {
        color: "#FF0000",
        fontSize: 14,
    },
});
export default AccountComponent;
