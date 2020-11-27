/* eslint-disable react/display-name */
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useSelector } from "react-redux";
import { DrawerContent } from "../commons/drawer";

import AuthStackScreen from "../rootScreens/auth";
import HomeStackScreen from "../rootScreens/home";
import LoadingApp from "../screens/loadingApp";

const Drawer = createDrawerNavigator();

// connect redux
const useConnect = () => {
    const mapState = {
        accessToken: useSelector((state) => state.accessToken),
    };
    return {
        ...mapState,
    };
};

export default function Navigator() {
    const { accessToken } = useConnect();
    const [showLoadingPage, setShowLoadingPage] = React.useState(true);
    React.useEffect(() => {
        setTimeout(async () => {
            setShowLoadingPage(false);
        }, 4000);
    }, [setShowLoadingPage]);
    if (showLoadingPage) {
        return <LoadingApp />;
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                {!accessToken && (
                    <Drawer.Screen name="Auth" component={AuthStackScreen} />
                )}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
