import { RestaurantCardGenerator } from "./reastaurant_card";
import { RestaurantsContext } from "./service/context";
import { SafeArea } from "../../components/safe-area";
import { Spacer } from "../../components/spacer";
import { theme } from "../../utils/theme/index";
import { Search } from "./restaurants_search";
import { useContext } from "react";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
} from "./restaurants_styles";

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
