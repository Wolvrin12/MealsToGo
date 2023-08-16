import { styled } from "styled-components";
import { View, Image } from "react-native";
import MapView from "react-native-maps";
import WebView from "react-native-webview";

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapSearch = styled(View)`
  padding: ${(props) => props.theme.spaces[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const MapCompactImg = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const MapCompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const MapItem = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
