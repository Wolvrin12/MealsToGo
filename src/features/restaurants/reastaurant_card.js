import { TypoText } from "../../components/typography";
import { Spacer } from "../../components/spacer";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import {
  CardContent,
  CardPreferences,
  CardRating,
  CardStatus,
  Icon,
  RestaurantCard,
} from "./styles";

export const RestaurantCardGenerator = ({ restaurant = {} }) => {
  const {
    name = "Wolvrin Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    ],
    adress = "36 Street, Madrid, Spain",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <Card.Cover source={{ uri: photos[0] }} />
        <CardContent>
          <TypoText variant="title">{name}</TypoText>
          <CardPreferences>
            <CardRating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} key={Math.random()} />
              ))}
            </CardRating>
            <CardStatus>
              {isClosedTemporarily && (
                <TypoText variant="error">Closed Temporarily</TypoText>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </CardStatus>
          </CardPreferences>
          <TypoText variant="hint">{adress}</TypoText>
        </CardContent>
      </RestaurantCard>
    </>
  );
};
