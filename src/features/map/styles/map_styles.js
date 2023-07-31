import { styled } from "styled-components";
import { View, Image } from "react-native";
import MapView from "react-native-maps";
import WebView from "react-native-webview";

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapSearch = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const MapCompactImg = styled(Image)`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

export const MapCompactWebView = styled(WebView)`
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

export const MapItem = styled(View)`
  border-radius: ${(props) => props.theme.sizes[3]};
  padding: ${(props) => props.theme.space[2]};
  max-width: ${(props) => props.theme.space[7]};
  align-items: center;
`;
