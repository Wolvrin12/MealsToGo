import { styled } from "styled-components";
import { FlatList, Image, View } from "react-native";
import { Card, Text } from "react-native-paper";

export const RestaurantsSearch = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

export const CardPreferences = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const CardRating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
`;

export const CardStatus = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const CardAdress = styled(Text)`
  padding: ${(props) => props.theme.space[2]} 0;
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.monospace};
`;
