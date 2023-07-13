import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/reastaurant_card";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";
import { Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";
import { styled } from "styled-components";

export const Restaurants = () => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Ubuntu_400Regular,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  `;

  const RestaurantsSearch = styled(View)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
  `;

  const RestaurantsScreen = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.secondary};
  `;

  return (
    <>
      <SafeArea>
        <RestaurantsSearch>
          <Searchbar placeholder="Search" elevation="5" />
        </RestaurantsSearch>
        <RestaurantsScreen>
          <RestaurantCard></RestaurantCard>
        </RestaurantsScreen>
      </SafeArea>
    </>
  );
};
