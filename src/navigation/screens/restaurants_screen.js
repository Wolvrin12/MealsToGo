import { Restaurants } from "../../features/restaurants/restaurants";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantDetails } from "../../features/restaurants/components/restaurant_details";

const RestaurantsStack = createStackNavigator();

export const RestaurantsScreen = () => {
  return (
    <RestaurantsStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen name="Restaurants" component={Restaurants} />
      <RestaurantsStack.Screen
        name="Restaurant Detail"
        component={RestaurantDetails}
      />
    </RestaurantsStack.Navigator>
  );
};
