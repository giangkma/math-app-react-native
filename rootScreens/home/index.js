/* eslint-disable react/display-name */
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "../../commons/header";
import DoingScreens from "../../container/doing";
import HomeScreens from "../../container/home";
import RankScreens from "../../container/rank";
import QuestionScreens from "../../container/question";

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
                    headerTitle: () => (
                        <HeaderComponent
                            numQuestions={numQuestions}
                            navigation={navigation}
                        />
                    ),
                }}
            />
            <HomeStack.Screen
                name="Question"
                component={QuestionScreens}
                options={{
                    title: "Quản lý câu hỏi",
                }}
            />
            <HomeStack.Screen
                name="Doing"
                component={DoingScreens}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
            <HomeStack.Screen
                name="Rank"
                component={RankScreens}
                options={{
                    title: "Bảng xếp hạng",
                }}
            />
        </HomeStack.Navigator>
    );
};
export default HomeStackScreen;
