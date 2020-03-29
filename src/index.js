import React from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import Routes from "./routes";
import Statusbar from "./components/StatusBar";
import Colors from "./utils/Theme";
import AppBar from "./components/AppBar";
import Theme from "./utils/Theme";

export default function Src() {
  let scheme = useColorScheme();
  scheme = "dark";
  const theme = scheme === "dark" ? Theme.dark : Theme.light;
  console.log(scheme);

  return (
    <AppearanceProvider>
      <Statusbar backgroundColor={theme.statusBar} />
      <AppBar theme={theme} />
      <Routes theme={theme} />
    </AppearanceProvider>
  );
}
