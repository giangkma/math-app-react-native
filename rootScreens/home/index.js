/* eslint-disable react/display-name */
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "../../commons/header";
import DoingScreens from "../../container/doing";
import HomeScreens from "../../container/home";
import RankScreens from "../../container/rank";
import SupportScreens from "../../container/support";
import AccountScreens from "../../container/account";
import QuestionScreens from "../../container/question";
import { DEFAULT_COLOR } from "../../untils/constants";

const HomeStack = createStackNavigator();

// connect redux
const useConnect = () => {
    const mapState = {
        questions: useSelector((state) => state.questions),
    };
    return {
        ...mapState,
    };
};
const HomeStackScreen = ({ navigation }) => {
    const { questions } = useConnect();
    const numQuestions = React.useMemo(() => questions.length, [questions]);
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreens}
                options={{
                    headerStyle: {
                        backgroundColor: DEFAULT_COLOR,
                    },
                    headerTitle: () => (
                        <HeaderComponent
                            numQuestions={numQuestions}
                            navigation={navigation}
                        />
                    ),
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerTintColor: '#fff',
                }}
            />
            <HomeStack.Screen
                name="Question"
                component={QuestionScreens}
                options={{
                    title: "Quản lý câu hỏi",
                    headerStyle: {
                        backgroundColor: DEFAULT_COLOR,
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerTintColor: '#fff',
                }}
            />
            <HomeStack.Screen
                name="Doing"
                component={DoingScreens}
                options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: DEFAULT_COLOR,
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerTintColor: '#fff',
                })}
            />
            <HomeStack.Screen
                name="Rank"
                component={RankScreens}
                options={{
                    title: "Bảng xếp hạng",
                    headerStyle: {
                        backgroundColor: DEFAULT_COLOR,
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerTintColor: '#fff',
                }}
            />
            <HomeStack.Screen
                name="Account"
                component={AccountScreens}
                options={{
                    title: "Thông tin cá nhân",
                    headerStyle: {
                        backgroundColor: DEFAULT_COLOR,
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerTintColor: '#fff',
                }}
            />
            <HomeStack.Screen
                name="Support"
                component={SupportScreens}
                options={{
                    title: "Hỗ trợ",
                    headerStyle: {
                        backgroundColor: DEFAULT_COLOR,
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerTintColor: '#fff',
                }}
            />
        </HomeStack.Navigator>
    );
};
export default HomeStackScreen;
