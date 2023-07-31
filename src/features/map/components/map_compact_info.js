import { TypoText } from "../../../components/typography";
import { Platform } from "react-native";
import {
  MapItem,
  MapCompactImg,
  MapCompactWebView,
} from "../styles/map_styles";

const isAndroid = Platform.OS === "android";

export const MapCompactInfo = ({ name, photo }) => {
  const Image = isAndroid ? MapCompactWebView : MapCompactImg;
  return (
    <MapItem>
      <Image source={{ uri: photo }} />
      <TypoText center variant="caption">
        {name}
      </TypoText>
    </MapItem>
  );
};
