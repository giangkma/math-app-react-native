/* eslint-disable react/jsx-no-literals */
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Avatar,
    Caption,
    Drawer,
    Switch,
    Text,
    Title,
    TouchableRipple,
    useTheme,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import AvatarImage from "../../assets/avatar.png";
import { actionLogout, actionTogleTheme } from "../../redux/actions";
// connect redux
const useConnect = () => {
    const mapState = {
        isDarkTheme: useSelector((state) => state.isDarkTheme),
        user: useSelector((state) => state.user),
        role: useSelector((state) => state.role),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onTogleTheme: () => dispatch(actionTogleTheme()),
            onLogout: () => dispatch(actionLogout()),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
export function DrawerContent(props) {
    const { onTogleTheme, isDarkTheme, onLogout, user, role } = useConnect();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View
                            style={{
                                flexDirection: "row",
                                padding: 8,
                                alignItems: "center",
                            }}
                        >
                            <Avatar.Image source={AvatarImage} size={50} />
                            <View
                                style={{
                                    marginLeft: 10,
                                    flexDirection: "column",
                                }}
                            >
                                <Title style={styles.title}>
                                    {(user && user.fullName) || null}
                                </Title>
                                {role === "admin" && (
                                    <Caption style={styles.caption}>
                                        👋Chào mừng admin !
                                    </Caption>
                                )}
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Trang chủ"
                            onPress={() => {
                                props.navigation.navigate("HomePage");
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Bảng xếp hạng"
                            onPress={() => {
                                props.navigation.navigate("Rank");
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Hỗ trợ"
                            onPress={() => {
                                props.navigation.navigate("Support");
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Tùy chỉnh">
                        <TouchableRipple
                            onPress={() => {
                                onTogleTheme();
                                setTimeout(() => {
                                    props.navigation.toggleDrawer();
                                }, 400);
                            }}
                        >
                            <View style={styles.preference}>
                                <Text>Giao diện tối</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Đăng xuất"
                    onPress={() => {
                        onLogout(), props.navigation.toggleDrawer();
                    }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: "#dcdde140",
        marginTop: -5,
        elevation: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
