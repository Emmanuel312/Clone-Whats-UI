import React from "react";
import {
  Container,
  Content,
  Title,
  Aside,
  Search,
  Options,
  OptionsView
} from "./styles";

export default function AppBar({ theme, handleToggleTheme }) {
  return (
    <Container theme={theme}>
      <Content>
        <Title theme={theme}>WhatsApp</Title>

        <Aside>
          <Search theme={theme} name="search"></Search>
          <OptionsView onPress={handleToggleTheme}>
            <Options theme={theme} name="more-vert"></Options>
          </OptionsView>
        </Aside>
      </Content>
    </Container>
  );
}
