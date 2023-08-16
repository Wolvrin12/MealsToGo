import { RestaurantCardGenerator } from "../components/reastaurant_card_generator";
import { RestaurantsContext } from "../../../services/restaurants/context";
import { FavouritesContext } from "../../../services/favourites/context";
import { FavouritesBar } from "../components/favourites/favourites_bar";
import { Search } from "../components/restaurants_search";
import { SafeArea } from "../../../components/safe_area";
import { Spacer } from "../../../components/spacer";
import { theme } from "../../../utils/theme/index";
import { TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import {
  Loading,
  RestaurantList,
  LoadingContainer,
} from "../../../styles/restaurants_styles";

export const Restaurants = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

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
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            goToDetail={navigation.navigate}
          />
        )}
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Restaurant Detail", {
                    restaurant: item,
                  })
                }
                activeOpacity={0.8}
              >
                <Spacer position="bottom" size="large">
                  <RestaurantCardGenerator restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
