import { RestaurantCardGenerator } from "./components/reastaurant_card";
import { Search } from "./components/restaurants_search";
import { RestaurantsContext } from "./service/context";
import { SafeArea } from "../../components/safe-area";
import { Spacer } from "../../components/spacer";
import { theme } from "../../utils/theme/index";
import { useContext } from "react";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
} from "./styles/restaurants_styles";

export const Restaurants = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
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
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
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
