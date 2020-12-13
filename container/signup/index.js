import * as React from "react";
import SignUpComponent from "../../screens/signup";
import { useTheme } from "react-native-paper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../untils/validation";
import { useDispatch } from "react-redux";
import { loginThunk, singupThunk } from "../../redux/thunk";

// connect redux
const useConnect = () => {
    const mapState = {
        // isDarkTheme: useSelector((state) => state.isDarkTheme),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onSignupThunk: (username, password, fullName) =>
                dispatch(singupThunk(username, password, fullName)),
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
const SignUpContainer = ({ navigation }) => {
    const { colors } = useTheme();
    const { register, handleSubmit, control, errors } = useForm({
        resolver: yupResolver(SignupSchema),
    });
    const { onSignupThunk, onLoginThunk } = useConnect();
    const [isShowPassword, setIsShowPassword] = React.useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = React.useState(
        false
    );

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };
    const handleShowConfirmPassword = () => {
        setIsShowConfirmPassword(!isShowConfirmPassword);
    };
    const onSubmit = async (data) => {
        const { username, password, fullName } = data;
        const res = await onSignupThunk(username, password, fullName);
        if (res) {
            navigation.navigate("Login");
            setTimeout(async () => {
                await onLoginThunk(username, password);
            }, 2000);
        }
    };
    return (
        <SignUpComponent
            navigation={navigation}
            colors={colors}
            handleShowPassword={handleShowPassword}
            isShowPassword={isShowPassword}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
            onSubmit={onSubmit}
            handleShowConfirmPassword={handleShowConfirmPassword}
            isShowConfirmPassword={isShowConfirmPassword}
        />
    );
};
export default SignUpContainer;
