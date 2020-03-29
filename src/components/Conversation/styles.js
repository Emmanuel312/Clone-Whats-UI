import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
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
  padding: 20px 15px;
`;

export const Content = styled.View``;

export const Name = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${props => props.theme.name};
`;

export const LastMessage = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.common};
  margin-left: 5px;
`;
export const MessageView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.common};
`;
