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
                <Icon style={{ fontSize: 24 }} name="bars" />
            </TouchableOpacity>
            <View>
                <Text style={{ color: "black", fontSize: 16 }}>
                    {className
                        ? `Số câu hỏi lớp ${className} đang có : ${numQuestions}`
                        : `Tổng số câu hỏi đang có : ${numQuestions}`}
                </Text>
            </View>
        </View>
    );
};
export default HeaderComponent;
