import { styled } from "styled-components";
import MapView from "react-native-maps";
import { View } from "react-native";

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapsSearch = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;
