import React from "react";
import { Container, CustomStatusBar } from "./styles";

export default function StatusBarWrapper({ backgroundColor, ...rest }) {
  return (
    <Container backgroundColor={backgroundColor}>
      <CustomStatusBar
        {...rest}
        backgroundColor={backgroundColor}
        translucent
      />
    </Container>
  );
}
