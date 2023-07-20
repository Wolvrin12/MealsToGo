import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Restaurants } from "./src/features/restaurants/restaurants";
import { NavigationContainer } from "@react-navigation/native";
import { Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";
import { SafeArea } from "./src/components/safe-area";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/utils/theme/index";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const ICONS_NAMES = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Map = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
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
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Ubuntu_400Regular,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={tabBarIcons}>
            <Tab.Screen name="Restaurants" component={Restaurants} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
