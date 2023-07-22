import { RestaurantCardGenerator } from "./reastaurant_card";
import { RestaurantsContext } from "./service/context";
import { SafeArea } from "../../components/safe-area";
import { Spacer } from "../../components/spacer";
import { theme } from "../../utils/theme/index";
import { Searchbar } from "react-native-paper";
import { useContext } from "react";
import {
  Loading,
  RestaurantList,
  RestaurantsSearch,
} from "./restaurants_styles";

export const Restaurants = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading
              size={50}
              animating={true}
              color={theme.colors.ui.primary}
            />
          </LoadingContainer>
        )}
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
