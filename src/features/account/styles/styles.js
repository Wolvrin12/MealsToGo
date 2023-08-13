import { Button, TextInput } from "react-native-paper";
import { styled } from "styled-components/native";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

export const AuthBackground = styled(ImageBackground).attrs({
  source: require("../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AuthContainer = styled(View)`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button)`
  width: ${(props) => props.theme.sizes[6]};
  padding: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.sizes[2]};
`;

export const AuthInput = styled(TextInput)`
  width: ${(props) => props.theme.sizes[7]};
`;

export const AuthTitle = styled(Text)`
  font-size: 30px;
`;