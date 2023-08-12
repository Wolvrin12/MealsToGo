import { AuthenticationContext } from "../firebase/auth/context";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account_navigator";
import { AppNavigator } from "./app_navigator";
import { useContext } from "react";

export const NavigationProvider = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
