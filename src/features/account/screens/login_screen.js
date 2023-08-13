import { AuthenticationContext } from "../../../firebase/auth/context";
import { TypoText } from "../../../components/typography";
import { Spacer } from "../../../components/spacer";
import { useContext, useEffect, useState } from "react";
import {
  AuthCover,
  AuthInput,
  AuthButton,
  AuthContainer,
  AuthBackground,
} from "../styles/styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    setIsErrorVisible(true);
    setTimeout(() => {
      setIsErrorVisible(false);
    }, 10000);
  }, [error]);

  return (
    <AuthBackground>
      <AuthCover />
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
          secure
          onChangeText={setPassword}
        />
        {isErrorVisible && error && (
          <Spacer size="large" position="top">
            <TypoText variant="error">Failed with error code: {error}</TypoText>
          </Spacer>
        )}
        <Spacer size="large" position="top">
          <AuthButton
            mode="contained"
            icon="lock-open-outline"
            onPress={() => {
              onLogin(email, password);
            }}
          >
            Login
          </AuthButton>
        </Spacer>
      </AuthContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AuthBackground>
  );
};
