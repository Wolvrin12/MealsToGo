import { RestaurantDetails } from "../components/restaurant_details";
import { Restaurants } from "../container/restaurants";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const RestaurantsStack = createStackNavigator();

export const RestaurantsScreen = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants Screen"
        component={Restaurants}
      />
      <RestaurantsStack.Screen
        name="Restaurant Detail"
        component={RestaurantDetails}
      />
    </RestaurantsStack.Navigator>
  );
};
