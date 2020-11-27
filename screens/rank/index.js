/* eslint-disable react/jsx-no-literals */
import * as React from "react";
import { Image, StyleSheet, ScrollView, Text, View } from "react-native";
import Background from "../../assets/bg.jpg";
import ImageNodata from "../../assets/noDataFound.png";
import ButtonComponent from "../../commons/button";
import HeaderComponent from "../../commons/header";
import { buttonsHome } from "../../untils/dummy";
import { filterForDuplicateValues } from "../../untils/functions";
import { commonStyles } from "../../untils/styles/global";

const RankComponent = ({
    navigation,
    backHome,
    ranksInClass,
    nameClassRanks,
    selectClassRanks,
    onUpdateDataRank,
}) => {
    return (
        <>
            <HeaderComponent
                navigation={navigation}
                backHome={backHome}
                onUpdateDataRank={onUpdateDataRank}
                hideNumQuestions
                showButtonUpdateRank
            />
            <View style={styles.imageContainer}>
                <Image
                    resizeMode="cover"
                    source={Background}
                    style={styles.image}
                />
                <View style={commonStyles.ContainerContent}>
                    <ScrollView
                        style={{}}
                        contentContainerStyle={{
                            paddingBottom: 30,
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                textAlign: "center",
                                fontSize: 25,
                                marginTop: 20,
                            }}
                        >
                            Bảng xếp hạng
                        </Text>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginTop: 10,
                                marginBottom: 5,
                            }}
                        >
                            <View>
                                <ButtonComponent
                                    title="Tất cả"
                                    onPress={() => selectClassRanks(0)}
                                    buttonStyle={{
                                        backgroundColor:
                                            nameClassRanks === 0
                                                ? "#26de81"
                                                : "#1B9CFC",
                                    }}
                                />
                            </View>
                            {/* {buttonsHome.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <ButtonComponent
                                            title={item.title}
                                            onPress={() =>
                                                selectClassRanks(index + 1)
                                            }
                                            buttonStyle={{
                                                backgroundColor:
                                                    nameClassRanks === index + 1
                                                        ? "#26de81"
                                                        : "#1B9CFC",
                                            }}
                                        />
                                    </View>
                                );
                            })} */}
                        </View>
                        <View style={styles.rowTable}>
                            <Text style={styles.titleTable}>STT</Text>
                            <Text
                                style={{
                                    ...styles.titleTable,
                                    ...styles.titleName,
                                }}
                            >
                                Tên
                            </Text>
                            {nameClassRanks !== 0 && (
                                <Text style={styles.titleTable}>Lớp</Text>
                            )}
                            <Text
                                style={{
                                    ...styles.titleTable,
                                    flex: nameClassRanks === 0 ? 2 : 1,
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
                                        color: "#fff",
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
                                                <Text style={styles.titleTable}>
                                                    {index + 1}
                                                </Text>
                                            )}
                                            <Text
                                                style={{
                                                    ...styles.titleTable,
                                                    ...styles.titleName,
                                                }}
                                            >
                                                {item.name}
                                            </Text>
                                            {nameClassRanks !== 0 && (
                                                <Text style={styles.titleTable}>
                                                    {item.class}
                                                </Text>
                                            )}
                                            <Text
                                                style={{
                                                    ...styles.titleTable,
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
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: null,
        width: null,
    },
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
        top: 80,
        width: "100%",
    },

    titleButton: {
        position: "absolute",
        fontSize: 22,
    },
});
export default RankComponent;
