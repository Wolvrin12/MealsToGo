import { RegisterScreen } from "../features/account/screens/register";
import { AccountScreen } from "../features/account/screens/account";
import { LoginScreen } from "../features/account/screens/login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      <Stack.Screen name="Main Screen" component={AccountScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Register Screen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
