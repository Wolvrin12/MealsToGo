import { Spacer } from "../../../components/spacer";
import { theme } from "../../../utils/theme/index";
import {
  AccountCover,
  AccountButton,
  AccountContainer,
  AccountBackground,
} from "../styles/styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AccountButton
          icon="login"
          mode="contained"
          textColor={theme.colors.text.tertiary}
          buttonColor={theme.colors.bg.quaternary}
          onPress={() => navigation.navigate("Login Screen")}
        >
          Login
        </AccountButton>
        <Spacer position="top" size="large" />
        <AccountButton
          icon="account-plus"
          mode="contained"
          textColor={theme.colors.text.tertiary}
          buttonColor={theme.colors.bg.quaternary}
          onPress={() => navigation.navigate("Register Screen")}
        >
          Register
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  );
};
