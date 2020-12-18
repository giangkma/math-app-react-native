/* eslint-disable react/jsx-no-literals */
import { Picker } from "native-base";
import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useTheme } from "react-native-paper";
import ImageNodata from "../../assets/noDataFound.png";
import { filterForDuplicateValues } from "../../untils/functions";
import { commonStyles } from "../../untils/styles/global";

const RankComponent = ({ ranksInClass, nameClassRanks, selectClassRanks }) => {
    const { colors } = useTheme();
    return (
        <>
            <Animatable.View
                style={styles.imageContainer}
                animation="slideInUp"
                easing="ease-out"
            >
                <View style={commonStyles.ContainerContent}>
                    <ScrollView
                        style={{}}
                        contentContainerStyle={{
                            paddingBottom: 30,
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                                marginBottom: 5,
                                paddingLeft: 20,
                                paddingRight: 20,
                            }}
                        >
                            <View style={{ marginRight: 10 }}>
                                <Text
                                    style={{ color: colors.text, fontSize: 16 }}
                                >
                                    {"Sắp xếp theo"}
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderColor: colors.borderInputColor,
                                    borderWidth: 2,
                                    marginTop: 10,
                                    marginBottom: 10,
                                    flex: 1,
                                }}
                            >
                                <Picker
                                    style={{
                                        height: 40,
                                        color: colors.text,
                                    }}
                                    placeholderIconColor="red"
                                    selectedValue={nameClassRanks}
                                    onValueChange={(itemValue) =>
                                        selectClassRanks(itemValue)
                                    }
                                >
                                    {/* <Picker.Item
                                        label="Xếp hạng tổng hợp"
                                        value={0}
                                    /> */}
                                    <Picker.Item label="Lớp 1" value={1} />
                                    <Picker.Item label="Lớp 2" value={2} />
                                    <Picker.Item label="Lớp 3" value={3} />
                                    <Picker.Item label="Lớp 4" value={4} />
                                    <Picker.Item label="Lớp 5" value={5} />
                                </Picker>
                            </View>
                        </View>
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
                                    ...styles.titleName,
                                    color: colors.text,
                                }}
                            >
                                Tên
                            </Text>
                            {nameClassRanks !== 0 && (
                                <Text
                                    style={{
                                        ...styles.titleTable,
                                        color: colors.text,
                                    }}
                                >
                                    Lớp
                                </Text>
                            )}
                            <Text
                                style={{
                                    ...styles.titleTable,
                                    flex: nameClassRanks === 0 ? 2 : 1,
                                    color: colors.text,
                                }}
                            >
                                {nameClassRanks === 0 ? "Tổng điểm" : "Điểm"}
                            </Text>
                        </View>
                        {ranksInClass.length === 0 ? (
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
                                {filterForDuplicateValues(
                                    ranksInClass,
                                    nameClassRanks
                                ).map((item, index) => {
                                    return (
                                        <View
                                            key={index}
                                            style={styles.rowTable}
                                        >
                                            {index === 0 ? (
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        fontSize: 26,
                                                    }}
                                                >
                                                    🥇
                                                </Text>
                                            ) : index === 1 ? (
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        fontSize: 26,
                                                    }}
                                                >
                                                    ️🥈
                                                </Text>
                                            ) : index === 2 ? (
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        fontSize: 26,
                                                    }}
                                                >
                                                    ️🥉
                                                </Text>
                                            ) : (
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        color: colors.text,
                                                    }}
                                                >
                                                    {index + 1}
                                                </Text>
                                            )}
                                            <Text
                                                style={{
                                                    ...styles.titleTable,
                                                    ...styles.titleName,
                                                    color: colors.text,
                                                }}
                                            >
                                                {item.fullName}
                                            </Text>
                                            {nameClassRanks !== 0 && (
                                                <Text
                                                    style={{
                                                        ...styles.titleTable,
                                                        color: colors.text,
                                                    }}
                                                >
                                                    {nameClassRanks}
                                                </Text>
                                            )}
                                            <Text
                                                style={{
                                                    ...styles.titleTable,
                                                    color: colors.text,
                                                    flex:
                                                        nameClassRanks === 0
                                                            ? 2
                                                            : 1,
                                                }}
                                            >
                                                {item.score}
                                            </Text>
                                        </View>
                                    );
                                })}
                            </View>
                        )}
                    </ScrollView>
                </View>
            </Animatable.View>
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
        marginTop: 10,
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
export default RankComponent;
