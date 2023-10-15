import Space_Adventure_Italic from "./src/assets/fonts/Space_Adventure_Italic.ttf";
import { AuthenticationContextProvider } from "./src/services/auth/context";
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

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    signInWithEmailAndPassword(auth, "anouar@chlih.user", "testtest")
      .then((user) => {
        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  let [fontsLoaded] = useFonts({
    "Space Adventure Italic": Space_Adventure_Italic,
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
          <NavigationProvider />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
