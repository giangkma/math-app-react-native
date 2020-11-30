import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateInformationUserThunk } from "../../redux/thunk";
import AccountComponent from "../../screens/account";
import { AccountSchema } from "../../untils/validation";

// connect redux
const useConnect = () => {
    const mapState = {
        user: useSelector((state) => state.user),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onUpdateInformationUserThunk: (user, id) =>
                dispatch(updateInformationUserThunk(user, id)),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const AccountContainer = ({ navigation }) => {
    const { colors } = useTheme();
    const { user, onUpdateInformationUserThunk } = useConnect();
    const [isOpenFormChangePass, setIsOpenFormChangePass] = React.useState(
        false
    );
    const { register, handleSubmit, control, errors } = useForm({
        resolver: yupResolver(AccountSchema),
    });
    const onSubmitFormChangePass = async (data) => {
        const { password, newPassword } = data;
        const passwordStore = user.password;
        if (password !== passwordStore) {
            Alert.alert("Hãy kiểm tra lại","Mật khẩu cũ bạn nhập không đúng", [
                { text: "Đã hiểu" },
            ]);
        } else {
            const { id } = user;
            const res = await onUpdateInformationUserThunk({ password: newPassword }, id);
            if(res) navigation.navigate("Home");
        }
    };

    const toggleFormChangePass = () => {
        setIsOpenFormChangePass(!isOpenFormChangePass);
    };
    return (
        <AccountComponent
            toggleFormChangePass={toggleFormChangePass}
            isOpenFormChangePass={isOpenFormChangePass}
            navigation={navigation}
            user={user}
            colors={colors}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
            onSubmitFormChangePass={onSubmitFormChangePass}
        />
    );
};

export default AccountContainer;
