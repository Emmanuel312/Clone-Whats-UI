import React, { useEffect, useState } from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import Routes from "./routes";
import Statusbar from "./components/StatusBar";
import AppBar from "./components/AppBar";
import Theme from "./utils/Theme";

export default function Src() {
  const appearance = useColorScheme();
  const [theme, setTheme] = useState(null);
  const [scheme, setScheme] = useState(appearance);

  useEffect(() => {
    const theme = scheme === "light" ? Theme.light : Theme.dark;
    setTheme(theme);
  }, [scheme]);

  function handleToggleTheme() {
    setScheme(scheme === "light" ? "dark" : "light");
  }

  return (
    <AppearanceProvider>
      {theme && (
        <>
          <Statusbar backgroundColor={theme.statusBar} />
          <AppBar theme={theme} handleToggleTheme={handleToggleTheme} />
          <Routes theme={theme} />
        </>
      )}
    </AppearanceProvider>
  );
}
