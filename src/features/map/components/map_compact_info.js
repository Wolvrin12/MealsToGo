import { TypoText } from "../../../components/typography";
import { Platform } from "react-native";
import {
  MapCompactWebView,
  MapCompactImg,
  MapItem,
} from "../../../styles/map_styles";

const isAndroid = Platform.OS === "android";

export const MapCompactInfo = ({ name, photo, isMap }) => {
  const Image = isAndroid && isMap ? MapCompactWebView : MapCompactImg;
  return (
    <MapItem>
      <Image source={{ uri: photo }} />
      <TypoText center variant="caption">
        {name}
      </TypoText>
    </MapItem>
  );
};
