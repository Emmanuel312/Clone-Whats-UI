import styled from "styled-components/native";
import Colors from "../../utils/Theme";
import { StyleSheet } from "react-native";
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
`;
export const Photo = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const Aside = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.divider};
  width: 85%;
  padding: 15px;
`;

export const Content = styled.View``;

export const Name = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${props => props.theme.name};
`;

export const LastMessage = styled.Text`
  font-size: 14px;
  color: #777;
`;

export const Time = styled.Text`
  font-size: 12px;
  color: #777;
`;
