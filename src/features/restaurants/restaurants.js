import { RestaurantCardGenerator } from "./reastaurant_card";
import { RestaurantList, RestaurantsSearch } from "./styles";
import { SafeArea } from "../../components/safe-area";
import { Spacer } from "../../components/spacer";
import { Searchbar } from "react-native-paper";

export const Restaurants = () => {
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
