import { useTheme } from "@react-navigation/native";
import * as React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BackgroundButtonOptions from "../../assets/options.jpg";
import { dataClassHomepage } from "../../untils/dummy";

const HomeComponent = ({ navigation, numQuestions, role }) => {
    const { colors } = useTheme();
    return (
        <>
            <View style={styles.Container}>
                <ScrollView>
                    <View
                        style={{
                            marginTop: -5,
                            marginBottom: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}
                    >
                        {role === "admin" && (
                            <TouchableOpacity
                                style={{ ...styles.card, width: "100%" }}
                                onPress={() => navigation.navigate("Question")}
                            >
                                <Image
                                    source={BackgroundButtonOptions}
                                    style={styles.backgroundImageCard}
                                />
                                <View style={styles.backgroundColorCard} />
                                <Text style={styles.nameClass}>
                                    {"Quản lý câu hỏi"}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    {dataClassHomepage.map((item, index) => {
                        return (
                            <View key={index}>
                                <View
                                    style={{
                                        ...styles.headerContent,
                                        backgroundColor:
                                            colors.headerContentHome,
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...styles.headerContentTitle,
                                            color: colors.text,
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 15 }}>
                                    <View style={styles.listCard}>
                                        {item.arrayClass.map((item, index) => {
                                            return (
                                                <TouchableOpacity
                                                    style={styles.card}
                                                    onPress={() =>
                                                        navigation.push(
                                                            "Doing",
                                                            {
                                                                name: `Lớp ${item.key}`,
                                                                className:
                                                                    item.key,
                                                                numQuestions: numQuestions,
                                                            }
                                                        )
                                                    }
                                                    key={index}
                                                >
                                                    <Image
                                                        source={item.background}
                                                        style={{
                                                            ...styles.backgroundImageCard,
                                                            borderWidth:
                                                                colors.borderWidthCardClass,
                                                            borderColor: "#fff",
                                                        }}
                                                    />
                                                    <View
                                                        style={
                                                            styles.backgroundColorCard
                                                        }
                                                    />
                                                    <Text
                                                        style={styles.nameClass}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    headerContent: {
        padding: 8,
        marginBottom: 5,
    },
    headerContentTitle: {
        fontSize: 20,
        textAlign: "center",
    },
    Container: {
        bottom: 0,
        position: "absolute",
        top: 0,
        width: "100%",
    },
    listCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingLeft: 15,
        paddingRight: 15,
        width: "100%",
    },
    card: {
        height: 100,
        width: "47%",
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 5,
    },
    backgroundImageCard: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    backgroundColorCard: {
        position: "absolute",
        backgroundColor: "#1e272e50",
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    nameClass: {
        fontWeight: "bold",
        fontSize: 26,
        color: "#fff",
    },
});
export default HomeComponent;
