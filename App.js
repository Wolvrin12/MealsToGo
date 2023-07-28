import { LocationContextProvider } from "./src/features/restaurants/service/locations/context";
import { RestaurantsContextProvider } from "./src/features/restaurants/service/context";
import { NavigationHundler } from "./src/features/restaurants/navigation/navigator";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/utils/theme/index";
import { StatusBar } from "expo-status-bar";

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationHundler />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
