import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export default {
  light: {
    ...DefaultTheme,
    statusBar: "#128c7e",
    primary: "#0c6258",
    name: "#000",
    common: "#fff",
    highlight: "#fff",
    background: "#fff",
    divider: "#e1e4e8"
  },
  dark: {
    ...DarkTheme,
    statusBar: "#000",
    primary: "#1b262c",
    name: "#fff",
    common: "gray",
    highlight: "#30b388",
    divider: "#313B41",
    colors: {
      ...DarkTheme.colors,
      background: "#151e23"
    }
  }
};
