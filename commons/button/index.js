import * as React from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const ButtonComponent = ({
    title,
    onPress,
    buttonStyle,
    titleStyle,
    iconName,
    iconStyle,
    iconColor,
    iconSize,
}) => {
    return (
        <Button
            title={title}
            onPress={onPress}
            buttonStyle={buttonStyle}
            titleStyle={titleStyle}
            icon={
                <Icon
                    name={iconName}
                    size={iconSize || 17}
                    color={iconColor || "white"}
                    style={iconStyle}
                />
            }
        />
    );
};
export default ButtonComponent;
