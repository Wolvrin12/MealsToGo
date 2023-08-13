import { AuthenticationContext } from "../firebase/auth/context";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./auth_navigator";
import { AppNavigator } from "./app_navigator";
import { useContext } from "react";

export const NavigationProvider = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
