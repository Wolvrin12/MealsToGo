import { RestaurantCardGenerator } from "./reastaurant_card";
import { RestaurantList, RestaurantsSearch } from "./styles";
import { RestaurantsContext } from "./service/context";
import { SafeArea } from "../../components/safe-area";
import { Spacer } from "../../components/spacer";
import { Searchbar } from "react-native-paper";
import { useContext } from "react";

export const Restaurants = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <>
      <SafeArea>
        <RestaurantsSearch>
          <Searchbar placeholder="Search" elevation="5" />
        </RestaurantsSearch>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            console.log(item.photos);
            return (
              <Spacer position="bottom" size="large">
                <RestaurantCardGenerator restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
