import {
    DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme
} from "@react-navigation/native";
import {
    DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme
} from "react-native-paper";


export const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: "#ffffff",
        text: "#333333",
        headerContentHome: '#d2dae2',
        borderWidthCardClass: 0,
        placeholderTextColor: "#00000050",
        borderInputColor: "#DAE2ED"
    },
};

export const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: "#333333",
        text: "#ffffff",
        headerContentHome: '#485460',
        borderWidthCardClass: 2,
        placeholderTextColor: "#ffffff50",
        borderInputColor: "#ffffff60"
    },
};

