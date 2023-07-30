import { RestaurantCardGenerator } from "../components/reastaurant_card_generator";
import { Search } from "../components/restaurants_search";
import { SafeArea } from "../../../components/safe-area";
import { RestaurantsContext } from "../service/context";
import { Spacer } from "../../../components/spacer";
import { theme } from "../../../utils/theme/index";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
} from "../styles/restaurants_styles";

export const Restaurants = ({ navigation }) => {
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
