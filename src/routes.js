import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Chats from "./pages/Chats";
import Status from "./pages/Status";
import Calls from "./pages/Calls";
import Camera from "./pages/Camera";
import { Dimensions } from "react-native";

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  const theme = useTheme();
  console.log(theme);
  return (
    <Tab.Navigator
      initialLayout={{ backgroundColor: theme.background }}
      lazy={true}
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: theme.highlight,
        inactiveTintColor: "rgba(255,255,255,0.5)",
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",

          width: (Dimensions.get("window").width - 132) / 3
        },
        style: {
          backgroundColor: theme.primary
        },
        indicatorStyle: {
          backgroundColor: theme.common
        },
        pressColor: "#fff",
        showIcon: true,
        tabStyle: { width: "auto" }
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: () => {},

          tabBarIcon: () => (
            <MaterialIcons
              name="camera-alt"
              size={20}
              color="rgba(255,255,255,0.5)"
            />
          )
        }}
        name="Camera"
        component={Camera}
      />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}

function App({ theme }) {
  return (
    <NavigationContainer theme={theme}>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
