import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";
import Loading from "./commons/loading";
import { CustomDarkTheme, CustomDefaultTheme } from "./untils/theme";
import { DrawerContent } from "./commons/drawer";
import HomeStackScreen from "./rootScreens/home";
import AuthStackScreen from "./rootScreens/auth";
import { DEFAULT_COLOR } from "./untils/constants";

const Drawer = createDrawerNavigator();
// connect redux
const useConnect = () => {
    const mapState = {
        isDarkTheme: useSelector((state) => state.isDarkTheme),
        accessToken: useSelector((state) => state.accessToken),
    };
    return {
        ...mapState,
    };
};

const App = () => {
    const { isDarkTheme, accessToken } = useConnect();
    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <StatusBar
                    backgroundColor={theme.dark ? "#1e272e" : DEFAULT_COLOR}
                    barStyle="light-content"
                />
                <Drawer.Navigator
                    drawerContent={(props) => <DrawerContent {...props} />}
                >
                    {!accessToken ? (
                        <Drawer.Screen
                            name="Auth"
                            component={AuthStackScreen}
                        />
                    ) : (
                        <Drawer.Screen
                            name="HomePage"
                            component={HomeStackScreen}
                        />
                    )}
                </Drawer.Navigator>
                <Loading />
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
