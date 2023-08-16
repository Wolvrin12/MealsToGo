import { FavouritesContextProvider } from "./src/features/restaurants/services/favourites/context";
import { LocationContextProvider } from "./src/features/restaurants/services/locations/context";
import { RestaurantsContextProvider } from "./src/features/restaurants/services/data/context";
import { AuthenticationContextProvider } from "./src/firebase/auth/context";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { NavigationProvider } from "./src/navigation/navigation";
import { Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/utils/theme/index";
import { auth } from "./src/firebase/config";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    signInWithEmailAndPassword(auth, "anouar@chlih.user", "testtest")
      .then((user) => {
        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log("====================================");
        console.log("error", err);
        console.log("====================================");
      });
  }, []);

  let [fontsLoaded] = useFonts({
    "Space Adventure Italic": require("./assets/fonts/Space_Adventure_Italic.ttf"),
    Nunito_600SemiBold,
    Ubuntu_400Regular,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <NavigationProvider />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
