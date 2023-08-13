import { Spacer } from "../../../components/spacer";
import { theme } from "../../../utils/theme/index";
import {
  AuthTitle,
  AuthCover,
  AuthButton,
  AuthContainer,
  AuthBackground,
} from "../styles/styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AuthBackground>
      <AuthCover />
      <AuthTitle>Meals To Go</AuthTitle>
      <AuthContainer>
        <AuthButton
          icon="login"
          mode="contained"
          textColor={theme.colors.text.tertiary}
          buttonColor={theme.colors.bg.quaternary}
          onPress={() => navigation.navigate("Login Screen")}
        >
          Login
        </AuthButton>
        <Spacer position="top" size="large" />
        <AuthButton
          icon="account-plus"
          mode="contained"
          textColor={theme.colors.text.tertiary}
          buttonColor={theme.colors.bg.quaternary}
          onPress={() => navigation.navigate("Register Screen")}
        >
          Register
        </AuthButton>
      </AuthContainer>
    </AuthBackground>
  );
};
