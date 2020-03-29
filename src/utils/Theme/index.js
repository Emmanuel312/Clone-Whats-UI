import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export default {
  light: {
    ...DefaultTheme,
    statusBar: "#128c7e",
    primary: "#0c6258",
    name: "#000",
    common: "#777",
    highlight: "#fff",
    background: "#fff",
    divider: "#e1e4e8",
    actionButton: "#16C54E",
    appBar: "#fff"
  },
  dark: {
    ...DarkTheme,
    statusBar: "#000",
    primary: "#1b262c",
    name: "#c1c4c6",
    common: "#777",
    highlight: "#30b388",
    divider: "#313B41",
    actionButton: "#30b388",
    appBar: "#777",
    colors: {
      ...DarkTheme.colors,
      background: "#151e23"
    }
  }
};
