/* eslint-disable react/jsx-no-literals */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,

    TouchableOpacity,
    View
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import InputReactHook from "../../commons/input";
import { DEFAULT_COLOR } from "../../untils/constants";

const LoginInScreen = ({
    navigation,
    onSubmit,
    colors,
    handleShowPassword,
    isShowPassword,
    register,
    handleSubmit,
    control,
    errors,
    handleShowConfirmPassword,
    isShowConfirmPassword
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Text animation="fadeInRightBig">
                    <Text style={styles.text_header}>Đăng ký ngay</Text>
                </Animatable.Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[
                    styles.footer,
                    {
                        backgroundColor: colors.background,
                    },
                ]}
            >
                <ScrollView>
                    <Text
                        style={[
                            styles.text_footer,
                            {
                                color: colors.text,
                            },
                        ]}
                    >
                        Họ và tên
                    </Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color={colors.text}
                            size={20}
                        />
                        <InputReactHook
                            aref={register}
                            placeholder="Họ và tên"
                            name="fullName"
                            control={control}
                            defaultValue={""}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                        />
                    </View>
                    {errors && errors.fullName && (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>
                                {errors.fullName.message}
                            </Text>
                        </Animatable.View>
                    )}

                    <Text
                        style={[
                            styles.text_footer,
                            {
                                color: colors.text,
                                marginTop: 20,
                            },
                        ]}
                    >
                        Tài khoản
                    </Text>
                    <View style={styles.action}>
                        <Feather name="lock" color={colors.text} size={20} />
                        <InputReactHook
                            aref={register}
                            placeholder="Tài khoản"
                            name="username"
                            control={control}
                            defaultValue={""}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                            secureTextEntry={isShowPassword}
                        />
                    </View>
                    {errors && errors.username && (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>
                                {errors.username.message}
                            </Text>
                        </Animatable.View>
                    )}

                    <Text
                        style={[
                            styles.text_footer,
                            {
                                color: colors.text,
                                marginTop: 20,
                            },
                        ]}
                    >
                        Mật khẩu
                    </Text>
                    <View style={styles.action}>
                        <Feather name="lock" color={colors.text} size={20} />
                        <InputReactHook
                            aref={register}
                            placeholder="Password"
                            name="password"
                            control={control}
                            defaultValue={""}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                            secureTextEntry={!isShowPassword}
                        />
                        <TouchableOpacity onPress={handleShowPassword}>
                            {!isShowPassword ? (
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                            ) : (
                                <Feather name="eye" color="grey" size={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                    {errors && errors.password && (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>
                                {errors.password.message}
                            </Text>
                        </Animatable.View>
                    )}

                    <Text
                        style={[
                            styles.text_footer,
                            {
                                color: colors.text,
                                marginTop: 20,
                            },
                        ]}
                    >
                        Nhập lại mật khẩu
                    </Text>
                    <View style={styles.action}>
                        <Feather name="lock" color={colors.text} size={20} />
                        <InputReactHook
                            aref={register}
                            placeholder="Confirm password"
                            name="confirmPassword"
                            control={control}
                            defaultValue={""}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                            secureTextEntry={!isShowConfirmPassword}
                        />
                        <TouchableOpacity onPress={handleShowConfirmPassword}>
                            {!isShowConfirmPassword ? (
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                            ) : (
                                <Feather name="eye" color="grey" size={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                    {errors && errors.confirmPassword && (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>
                                {errors.confirmPassword.message}
                            </Text>
                        </Animatable.View>
                    )}

                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={handleSubmit(onSubmit)}
                            style={[
                                styles.signIn,
                                {
                                    backgroundColor: DEFAULT_COLOR,
                                    marginTop: 15,
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.textSign,
                                    {
                                        color: "#fff",
                                    },
                                ]}
                            >
                                Đăng ký
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                            style={[
                                styles.signIn,
                                {
                                    borderColor: DEFAULT_COLOR,
                                    borderWidth: 1,
                                    marginTop: 15,
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.textSign,
                                    {
                                        color: DEFAULT_COLOR,
                                    },
                                ]}
                            >
                                Đăng nhập ngay
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default LoginInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DEFAULT_COLOR,
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 30,
        marginTop: -70
    },
    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#FF0000",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
        fontSize: 16
    },
    errorMsg: {
        color: "#FF0000",
        fontSize: 14,
    },
    button: {
        alignItems: "center",
        marginTop: 20,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
