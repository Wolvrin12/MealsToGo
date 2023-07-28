import { RestaurantDetails } from "../../components/restaurant_details";
import { Restaurants } from "../../restaurants";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

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
