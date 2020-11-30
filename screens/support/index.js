import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import ButtonComponent from "../../commons/button";
import { commonStyles } from "../../untils/styles/global";
import BackgroundButtonOptions from "../../assets/doing.png";

const SupportComponent = ({ colors, navigation }) => {
    return (
        <Animatable.View animation="slideInUp" easing="ease-out">
            <View style={styles.Container}>
                <View
                    style={{
                        marginBottom: 100,
                        paddingLeft: 10,
                        paddingRight: 10,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={BackgroundButtonOptions}
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    />
                    <View
                        style={{ marginTop: -40 }}
                    >
                        <Text
                            style={{
                                color: colors.text,
                                fontSize: 18,
                                textAlign: "center",
                            }}
                        >
                            {"Chức năng này sẽ sớm được cập nhật !"}
                        </Text>
                    </View>
                    <View >
                        <ButtonComponent
                            title="Quay lại trang chủ"
                            onPress={()=> navigation.navigate("Home")}
                            buttonStyle={{
                                ...commonStyles.buttonSubmit,
                                marginTop: 15,
                            }}
                            titleStyle={{ fontSize: 13 }}
                        />
                    </View>
                </View>
            </View>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({});
export default SupportComponent;
