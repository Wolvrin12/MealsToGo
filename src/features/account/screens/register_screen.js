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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] =
    useState(true);

  const checkError = () => {
    setIsErrorVisible(true);
    setTimeout(() => {
      setIsErrorVisible(false);
    }, 5000);
  };

  useEffect(() => {
    if (email && password && repeatedPassword) {
      setIsRegisterButtonDisabled(false);
    } else {
      setIsRegisterButtonDisabled(true);
    }
    if (password !== repeatedPassword) {
      setIsRegisterButtonDisabled(true);
    }
  }, [email, password, repeatedPassword]);

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
        <Spacer size="large" position="top" />
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setRepeatedPassword}
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
              icon="account-plus"
              disabled={isRegisterButtonDisabled}
              onPress={() => {
                onRegister(email, password, repeatedPassword);
                checkError();
              }}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator
              animating={true}
              size={50}
              color={theme.colors.ui.secondary}
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
