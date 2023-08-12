import { styled } from "styled-components/native";
import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { View } from "react-native";
import { theme } from "../../../utils/theme";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AccountButton = styled(Button)`
  padding: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.sizes[2]};
`;
