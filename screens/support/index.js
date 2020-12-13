/* eslint-disable react/jsx-no-literals */
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements";
import { TouchableRipple } from "react-native-paper";
import ImageNodata from "../../assets/noDataFound.png";
import { DEFAULT_COLOR } from "../../untils/constants";
import { commonStyles } from "../../untils/styles/global";

const SupportComponent = ({ colors, navigation, reports }) => {
    return (
        <>
            <View style={styles.imageContainer}>
                <View style={commonStyles.ContainerContent}>
                    <View
                        style={{
                            padding: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.borderInputColor,
                            backgroundColor: colors.headerContentHome,
                        }}
                    >
                        <Text
                            style={{
                                color: colors.text,
                                fontSize: 22,
                            }}
                        >
                            Danh sách câu hỏi
                        </Text>
                        <Text
                            style={{
                                color: colors.text,
                                fontSize: 17,
                            }}
                        >
                            Được người dùng báo cáo
                        </Text>
                    </View>
                    <ScrollView>
                        <Animatable.View
                            animation="slideInUp"
                            easing="ease-out"
                            style={{
                                paddingLeft: 5,
                                paddingRight: 5,
                            }}
                        >
                            <View style={styles.rowTable}>
                                <Text
                                    style={{
                                        ...styles.titleTable,
                                        color: colors.text,
                                    }}
                                >
                                    STT
                                </Text>
                                <Text
                                    style={{
                                        ...styles.titleTable,
                                        flex: 1,
                                        color: colors.text,
                                    }}
                                >
                                    ID
                                </Text>
                                <Text
                                    style={{
                                        ...styles.titleTable,
                                        ...styles.titleName,
                                        color: colors.text,
                                    }}
                                >
                                    Số người báo cáo
                                </Text>
                                <Text
                                    style={{
                                        ...styles.titleTable,
                                        color: colors.text,
                                    }}
                                >
                                    Lớp
                                </Text>

                                <Text
                                    style={{
                                        ...styles.titleTable,
                                        flex: 1,
                                        color: colors.text,
                                    }}
                                />
                            </View>
                            {reports.length === 0 ? (
                                <View
                                    style={{
                                        alignItems: "center",
                                        marginTop: 50,
                                    }}
                                >
                                    <Image
                                        source={ImageNodata}
                                        style={{ width: 150, height: 150 }}
                                    />
                                    <Text
                                        style={{
                                            color: colors.text,
                                            fontSize: 20,
                                            marginTop: 5,
                                        }}
                                    >
                                        Opps ! Không có dữ liệu
                                    </Text>
                                </View>
                            ) : (
                                <View>
                                    {reports.map((item, index) => {
                                        return (
                                            <View
                                                key={index}
                                                style={styles.rowTable}
                                            >
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        color: colors.text,
                                                    }}
                                                >
                                                    {index + 1}
                                                </Text>
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        color: colors.text,
                                                        flex: 1,
                                                    }}
                                                >
                                                    {item.idQuestion}
                                                </Text>
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        ...styles.titleName,
                                                        color: colors.text,
                                                    }}
                                                >
                                                    {`${item.countUserReport} người`}
                                                </Text>
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        color: colors.text,
                                                    }}
                                                >
                                                    {item.className}
                                                </Text>

                                                <TouchableRipple
                                                    style={{
                                                        flex: 1,
                                                        backgroundColor: DEFAULT_COLOR,
                                                        paddingTop: 8,
                                                        paddingBottom: 8,
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            color: colors.text,
                                                            fontSize: 15,
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Xong
                                                    </Text>
                                                </TouchableRipple>
                                            </View>
                                        );
                                    })}
                                </View>
                            )}
                        </Animatable.View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    titleTable: {
        color: "#fff",
        fontSize: 18,
        flex: 1,
        textAlign: "center",
    },
    titleName: {
        flex: 3,
    },
    rowTable: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15,
    },
    imageContainer: {
        bottom: 0,
        position: "absolute",
        top: 0,
        width: "100%",
    },

    titleButton: {
        position: "absolute",
        fontSize: 22,
    },
});
export default SupportComponent;
