/* eslint-disable react/display-name */
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useSelector } from "react-redux";
import LogInScreens from "../../container/login";
import SignUpScreens from "../../container/signup";

const AuthStack = createStackNavigator();

// connect redux
const useConnect = () => {
    const mapState = {
        questions: useSelector((state) => state.questions),
    };
    return {
        ...mapState,
    };
};
const AuthStackScreen = ({ navigation }) => {
    const { questions } = useConnect();
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="Login" component={LogInScreens} />
            <AuthStack.Screen name="Signup" component={SignUpScreens} />
        </AuthStack.Navigator>
    );
};
export default AuthStackScreen;
