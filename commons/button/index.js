import * as React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";

const ButtonComponent = ({ title, onPress, buttonStyle, titleStyle, icon }) => {
    return (
        <Button
            icon={icon}
            mode="contained"
            onPress={onPress}
            style={buttonStyle}
        >
            <Text style={{ ...titleStyle, color: "#fff" }}>{title}</Text>
        </Button>
    );
};
export default ButtonComponent;
