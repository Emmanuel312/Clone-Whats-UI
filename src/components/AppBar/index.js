import React from "react";
import { Container, Content, Title, Aside, Search, Options } from "./styles";

export default function AppBar({ theme }) {
  console.log(theme);
  return (
    <Container theme={theme}>
      <Content>
        <Title>WhatsApp</Title>

        <Aside>
          <Search name="search"></Search>
          <Options name="more-vert"></Options>
        </Aside>
      </Content>
    </Container>
  );
}
