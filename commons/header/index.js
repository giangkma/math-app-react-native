import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const HeaderComponent = ({ navigation }) => {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon style={{ fontSize: 24, color: "#fff" }} name="bars" />
            </TouchableOpacity>
            <View>
                <Image
                    style={{ width: 90, height: 35, marginRight: 20 }}
                    source={require("../../assets/logo.png")}
                />
            </View>
            <View></View>
        </View>
    );
};
export default HeaderComponent;
