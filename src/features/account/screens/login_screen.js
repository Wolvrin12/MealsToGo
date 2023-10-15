import { AuthenticationContext } from "../../../services/auth/context";
import { TypoText } from "../../../components/typography";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/spacer";
import { theme } from "../../../utils/theme/index";
import {
  AuthTitle,
  AuthCover,
  AuthInput,
  AuthButton,
  AuthContainer,
  AuthBackground,
} from "../../../styles/account_styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  const checkError = () => {
    setIsErrorVisible(true);
    setTimeout(() => {
      setIsErrorVisible(false);
    }, 5000);
  };

  useEffect(() => {
    if (email && password) {
      setIsLoginButtonDisabled(false);
    } else {
      setIsLoginButtonDisabled(true);
    }
  }, [email, password]);

  return (
    <AuthBackground>
      <AuthCover />
      <AuthTitle>Meals To Go</AuthTitle>
      <AuthContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={setEmail}
        />
        <Spacer size="large" position="top" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setPassword}
        />
        {isErrorVisible && error && (
          <Spacer size="large" position="top">
            <TypoText variant="error">Failed with error code: {error}</TypoText>
          </Spacer>
        )}
        <Spacer size="large" position="top">
          {!isLoading ? (
            <AuthButton
              mode="contained"
              icon="login"
              disabled={isLoginButtonDisabled}
              onPress={() => {
                onLogin(email, password);
                checkError();
              }}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator
              animating={true}
              size={50}
              color={theme.colors.brand.secondary}
            />
          )}
        </Spacer>
      </AuthContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => {
            navigation.goBack();
            setIsErrorVisible(false);
          }}
        >
          Back
        </AuthButton>
      </Spacer>
    </AuthBackground>
  );
};
