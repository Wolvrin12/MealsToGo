import { RestaurantsScreen } from "../features/restaurants/screen/restaurants_screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapsScreen } from "../features/maps/screen/maps_screen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "../components/safe-area";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../utils/theme";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const ICONS_NAMES = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
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

export const NavigationHundler = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabBarIcons}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={MapsScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
