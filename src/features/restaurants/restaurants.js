import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { RestaurantCardGenerator } from "./reastaurant_card";
import { RestaurantList, RestaurantsSearch } from "./styles";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";
import { SafeArea } from "../../components/safe-area";
import { Spacer } from "../../components/spacer";
import { Searchbar } from "react-native-paper";

export const Restaurants = () => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Ubuntu_400Regular,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeArea>
        <RestaurantsSearch>
          <Searchbar placeholder="Search" elevation="5" />
        </RestaurantsSearch>
        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
            { name: 15 },
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantCardGenerator />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
