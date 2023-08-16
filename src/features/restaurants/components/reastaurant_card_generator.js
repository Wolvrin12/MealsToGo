import { FavouriteIcon } from "../components/favourites/favourite_icon";
import { TypoText } from "../../../components/typography";
import { Spacer } from "../../../components/spacer";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import {
  Icon,
  CardStatus,
  CardRating,
  CardContent,
  RestaurantCard,
  CardPreferences,
} from "../../../styles/restaurants_styles";

export const RestaurantCardGenerator = ({ restaurant = {} }) => {
  const {
    name = "Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    ],
    address = "Unknown",
    isOpenNow = false,
    rating = 1,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <FavouriteIcon restaurant={restaurant} />
        <Card.Cover key={name} source={{ uri: photos[0] }} />
        <CardContent>
          <TypoText variant="title">{name}</TypoText>
          <CardPreferences>
            <CardRating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`star-${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
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
          <TypoText variant="hint">{address}</TypoText>
        </CardContent>
      </RestaurantCard>
    </>
  );
};
