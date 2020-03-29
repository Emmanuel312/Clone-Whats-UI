import React, { useEffect } from "react";
import { Container } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/native";

export default function Camera({ navigation }) {
  const focused = useIsFocused();

  useEffect(() => {
    async function handleOpenCamera() {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if (permissionResult.granted === false) {
        navigation.navigate("Chats");
        return;
      }

      const pickerResult = await ImagePicker.launchCameraAsync();

      console.log(pickerResult);

      navigation.navigate("Chats");
    }
    if (focused) handleOpenCamera();
  }, [focused]);

  return <Container></Container>;
}
