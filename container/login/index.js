import * as React from "react";
import { useDispatch } from "react-redux";
import LoginComponent from "../../screens/login";
import { loginThunk } from "../../redux/thunk";
import { validationLogin } from "../../untils/validation";
// connect redux
const useConnect = () => {
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onLoginThunk: (username, password) =>
                dispatch(loginThunk(username, password)),
        }),
        [dispatch]
    );

    return {
        ...mapDispatch,
    };
};
const LoginContainer = ({ navigation }) => {
    const { onLoginThunk } = useConnect();
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [errors, setErrors] = React.useState(null);

    const onSubmit = () => {
        const err = validationLogin(username, password);
        if (err.username || err.password) {
            setErrors(err);
        } else {
            setErrors(null);
            setTimeout(async () => {
                const res = await onLoginThunk(username, password);
                if (res) {
                    navigation.navigate("Trang chủ");
                }
            }, 2000);
        }
    };
    return (
        <LoginComponent
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            errors={errors}
            onSubmit={onSubmit}
            navigation={navigation}
        />
    );
};
export default LoginContainer;
