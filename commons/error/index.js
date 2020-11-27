import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Error = ({ message, styleProps }) => {
    return (
        <View style={{ ...styles.error, ...styleProps }}>
            <Text style={styles.errorTitle}>{message}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    error: {
        padding: 10,
        borderWidth: 3,
        borderColor: "#EA2027",
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "80%",
    },
    errorTitle: {
        fontSize: 18,
        textAlign: "center",
        color: "#EA2027",
    },
});
export default Error;
