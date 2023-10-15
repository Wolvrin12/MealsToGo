import { RestaurantsScreen } from "../features/restaurants/screen/restaurants_screen";
import { RestaurantsContextProvider } from "../services/restaurants/context";
import { FavouritesContextProvider } from "../services/favourites/context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LocationContextProvider } from "../services/locations/context";
import { AuthenticationContext } from "../services/auth/context";
import { MapScreen } from "../features/map/screen/map_screen";
import { SafeArea } from "../components/safe_area";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { theme } from "../utils/theme";
import { useContext } from "react";

const Tab = createBottomTabNavigator();

const ICONS_NAMES = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Button mode="contained" icon="logout" onPress={() => onLogout()}>
        Logout
      </Button>
    </SafeArea>
  );
};

const tabBarIcon = (name, color, size) => {
  let iconName = ICONS_NAMES[name];
  return <Ionicons name={iconName} size={size} color={color} />;
};

const tabBarIcons = ({ route }) => ({
  tabBarIcon: ({ color, size }) => tabBarIcon(route.name, color, size),
  tabBarActiveTintColor: theme.colors.brand.primary,
  tabBarInactiveTintColor: theme.colors.brand.muted,
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={tabBarIcons}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
