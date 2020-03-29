import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Photo,
  Aside,
  Content,
  Name,
  LastMessage,
  Time
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
          <LastMessage>{lastMessage}</LastMessage>
        </Content>
        <Time>{timestamp}</Time>
      </Aside>
    </Container>
  );
}
