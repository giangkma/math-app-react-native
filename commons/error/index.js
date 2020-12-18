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
        backgroundColor: "#EA202750",
        borderRadius: 10,
        marginTop: 15,
        width: "80%",
    },
    errorTitle: {
        fontSize: 18,
        textAlign: "center",
        color: "#ffffff",
    },
});
export default Error;
