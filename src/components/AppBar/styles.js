import styled from "styled-components/native";
import Colors from "../../utils/Theme";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  background: ${props => props.theme.primary};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: ${Colors.light.common};
`;
export const Aside = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const Search = styled(MaterialIcons)`
  color: ${Colors.light.common};
  font-size: 25px;
  margin-right: 20px;
`;
export const Options = styled(MaterialIcons)`
  color: ${Colors.light.common};
  font-size: 25px;
`;
