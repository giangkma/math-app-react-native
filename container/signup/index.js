import * as React from "react";
import SignUpComponent from "../../screens/signup";
import { useTheme } from "react-native-paper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../untils/validation";

// connect redux
// const useConnect = () => {
//     const mapState = {
//         isDarkTheme: useSelector((state) => state.isDarkTheme),
//     };
//     const dispatch = useDispatch();
//     const mapDispatch = React.useMemo(
//         () => ({
//             onTogleTheme: () => dispatch(actionTogleTheme()),
//         }),
//         [dispatch]
//     );

//     return {
//         ...mapState,
//         ...mapDispatch,
//     };
// };
const SignUpContainer = ({ navigation }) => {
    const { colors } = useTheme();
    const { register, handleSubmit, control, errors } = useForm({
        resolver: yupResolver(SignupSchema),
    });
    // const { onLoginThunk } = useConnect();
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
        // const { username, password } = data;
        // const res = await onLoginThunk(username, password);
        // if (res) {
        //     navigation.navigate("Home");
        // }
        console.log(data);
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
