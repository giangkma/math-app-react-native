import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { actionTogleTheme } from "../../redux/actions";
import { loginThunk } from "../../redux/thunk";
import LoginComponent from "../../screens/login";
import { getToken } from "../../untils/functions";
import { validationLogin, LoginSchema } from "../../untils/validation";
// connect redux
const useConnect = () => {
    const mapState = {
        accessToken: useSelector((state) => state.accessToken),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onLoginThunk: (username, password) =>
                dispatch(loginThunk(username, password)),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const LoginContainer = ({ navigation }) => {
    const { register, handleSubmit, control, errors } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const { colors } = useTheme();
    const { onLoginThunk } = useConnect();
    const [isShowPassword, setIsShowPassword] = React.useState(false);

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };
    const onSubmit = async (data) => {
        const { username, password } = data;
        const res = await onLoginThunk(username, password);
        if (res) {
            navigation.navigate("HomePage");
        }
    };
    return (
        <LoginComponent
            navigation={navigation}
            colors={colors}
            handleShowPassword={handleShowPassword}
            isShowPassword={isShowPassword}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
            onSubmit={onSubmit}
        />
    );
};
export default LoginContainer;
