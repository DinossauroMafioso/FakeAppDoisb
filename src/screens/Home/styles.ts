import { SafeAreaView } from "react-native-safe-area-context";
import nativeStyled from "styled-components/native";

export const ScreenContainer = nativeStyled(SafeAreaView)`
  flex: 1;
  background-color: #bbff00;
`;

export const Header = nativeStyled.View`
  background-color: #fd08e9;
  padding: 16px;
`;

export const ScreenTitle = nativeStyled.Text`
  margin-top: 44px;
  margin-bottom: 16px;
  font-size: 24px;
  color: #4f0074;
`;

export const SearchInput = nativeStyled.TextInput`
  background-color: #00f7ff;
  border-radius: 8px;
  padding: 8px;
`;

export const CategoryList = nativeStyled.View`
  flex: 1;
  padding: 16px;
`;

export const ProductCard = nativeStyled.View`
  margin-bottom: 12px;
  padding: 16px;
  background-color: #f71313;
`;

export const ProductName = nativeStyled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #051944;
`;

export const ProductDetails = nativeStyled.Text`
  margin-top: 6px;
  color: #051944;
`;
