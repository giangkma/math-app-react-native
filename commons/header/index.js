import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HeaderComponent = ({
    navigation,
    className,
    // backHome,
    numQuestions,
    // hideNumQuestions,
    // showButtonUpdateRank,
    // onUpdateDataRank,
    // isStart,
    // onEnd,
}) => {
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
                <Text style={{ color: "#fff", fontSize: 22, marginRight: 15 }}>{"math"}</Text>
            </View>
            <View></View>
        </View>
    );
};
export default HeaderComponent;
