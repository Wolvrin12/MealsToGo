import { Restaurants } from "../../features/restaurants/restaurants";
import { createStackNavigator } from "@react-navigation/stack";

const RestaurantsStack = createStackNavigator();

export const RestaurantsScreen = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none">
      <RestaurantsStack.Screen name="Hello World" component={Restaurants} />
    </RestaurantsStack.Navigator>
  );
};
