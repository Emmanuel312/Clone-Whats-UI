import React from "react";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Photo,
  Aside,
  Content,
  Name,
  LastMessage,
  Time,
  MessageView
} from "./styles";

export default function Conversation({
  id,
  name,
  lastMessage,
  picture,
  timestamp
}) {
  const theme = useTheme();

  return (
    <Container key={id}>
      <Photo source={{ uri: picture }}></Photo>
      <Aside theme={theme}>
        <Content>
          <Name theme={theme}>{name}</Name>
          <MessageView>
            <Ionicons
              name="ios-checkmark"
              size={25}
              color={theme.common}
            ></Ionicons>
            <LastMessage theme={theme}>{lastMessage}</LastMessage>
          </MessageView>
        </Content>
        <Time theme={theme}>{timestamp}</Time>
      </Aside>
    </Container>
  );
}
