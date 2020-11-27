import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Success = ({ message, styleProps }) => {
    return (
        <View style={{ ...styles.success, ...styleProps }}>
            <Text style={styles.successTitle}>{message}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    success: {
        padding: 10,
        borderWidth: 3,
        borderColor: "seagreen",
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "80%",
    },
    successTitle: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        color: "seagreen",
    },
});
export default Success;
