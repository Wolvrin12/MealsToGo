import { TouchableOpacity, View } from "react-native";
import { styled } from "styled-components/native";

export const FavouritesWrapper = styled(View)`
  padding: 10px;
`;

export const FavouriteBtn = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`;
