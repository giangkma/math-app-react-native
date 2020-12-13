import { Platform } from "react-native";
import { DEFAULT_COLOR } from "../constants";

export const commonStyles = {
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
    },
    image: {
        flex: 1,
        height: null,
        width: null,
    },
    titlePage: {
        paddingBottom: 35,
        paddingTop: 10,
    },
    contentPage: {
        position: "absolute",
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    wrapButtonSubmit: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonSubmit: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: DEFAULT_COLOR,
        borderRadius: 10,
    },
    ContainerContent: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    inputHomeStack: {
        height: 50,
        padding: 10,
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 18,
    },
};
