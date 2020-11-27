import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";
// connect redux
const useConnect = () => {
    const mapState = {
        loading: useSelector((state) => state.loading),
    };
    return {
        ...mapState,
    };
};
const Loading = () => {
    const { loading } = useConnect();
    if (loading) {
        return (
            <View
                style={{
                    position: "absolute",
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#181616ad",
                }}
            >
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }
    return null;
};

export default Loading;
