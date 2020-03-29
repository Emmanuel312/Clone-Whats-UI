import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const Conversations = styled(FlatList)`
  flex: 1;
  padding: 10px;
`;
