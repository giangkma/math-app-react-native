import { useTheme } from "@react-navigation/native";
import React from "react";
import SupportComponent from "../../screens/support";

const SupportContainer = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <SupportComponent
            navigation={navigation}
            colors={colors}
        />
    );
};

export default SupportContainer;
