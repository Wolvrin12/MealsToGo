import { RegisterScreen } from "../features/account/screens/register_screen";
import { AccountScreen } from "../features/account/screens/account_screen";
import { LoginScreen } from "../features/account/screens/login_screen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      <Stack.Screen name="Main Screen" component={AccountScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Register Screen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
