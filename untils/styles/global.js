import { DEFAULT_COLOR } from "../constants";

export const commonStyles = {
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
        padding: 10,
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
};
