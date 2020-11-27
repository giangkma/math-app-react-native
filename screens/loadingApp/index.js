import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import AnimatedEllipsis from "react-native-animated-ellipsis";
import { DEFAULT_COLOR } from "../../untils/constants";

const LoadingApp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="slideInUp"
                    easing="ease-out"
                    source={require("../../assets/logo1.png")}
                    style={{
                        ...styles.imageLogo,
                        height: 160,
                        width: 160,
                        marginBottom: 10,
                    }}
                    duration={1500}
                    resizeMode="stretch"
                />
                <View style={styles.wraperLogo}>
                    <Animatable.Image
                        animation="lightSpeedIn"
                        easing="ease-out"
                        delay={800}
                        duration={1500}
                        source={require("../../assets/logo2.png")}
                        style={styles.imageLogo}
                        resizeMode="stretch"
                    />
                    <Animatable.Image
                        animation="lightSpeedIn"
                        easing="ease-out"
                        delay={1600}
                        duration={1500}
                        source={require("../../assets/logo3.png")}
                        style={styles.imageLogo}
                        resizeMode="stretch"
                    />
                    <Animatable.Image
                        animation="lightSpeedIn"
                        easing="ease-out"
                        delay={2400}
                        duration={1500}
                        source={require("../../assets/logo4.png")}
                        style={styles.imageLogo}
                        resizeMode="stretch"
                    />
                    <Animatable.Image
                        animation="lightSpeedIn"
                        easing="ease-out"
                        delay={3200}
                        duration={1500}
                        source={require("../../assets/logo5.png")}
                        style={styles.imageLogo}
                        resizeMode="stretch"
                    />
                </View>
                <View style={styles.wraperDot}>
                    <AnimatedEllipsis
                        numberOfDots={4}
                        minOpacity={0.4}
                        animationDelay={100}
                        style={{
                            color: "#fff",
                            fontSize: 100,
                            letterSpacing: -10,
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default LoadingApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DEFAULT_COLOR,
    },
    wraperDot: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: -70,
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    wraperLogo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    imageLogo: {
        width: 50,
        height: 55,
    },
});
