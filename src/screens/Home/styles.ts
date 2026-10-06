import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #bbff00;
`;

export const Header = styled.View`
  background-color: #fd08e9;
`;

export const ScreenTittle = styled.Text`
  font-size: 24px;
  color: #00fcc5;
  Margin-top: 60px;

`;

export const SearchInput = styled.TextInput`
  background-color: #00fcc5;
  border-radius: 8px;
  padding: 8px;
  `;

export const CategoryList = styled.FlatList`
  margin-top: 16px;
  background-color: #051944;
  `;


