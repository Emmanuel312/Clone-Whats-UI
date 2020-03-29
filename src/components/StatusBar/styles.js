import styled from "styled-components/native";
import { StatusBar, Platform, SafeAreaView } from "react-native";

const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export const Container = styled(SafeAreaView)`
  height: ${statusBarHeight}px;
  background: ${props => props.backgroundColor};
`;

export const CustomStatusBar = styled(StatusBar)``;
