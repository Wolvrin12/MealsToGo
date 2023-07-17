import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { styled } from "styled-components";
import { Image, View } from "react-native";
import { TypoText } from "../components/typography";
import { Spacer } from "./spacer";
import star from "../../assets/star";
import open from "../../assets/open";

export const RestaurantCard = ({ restaurant = {} }) => {
  const CardContent = styled(Card.Content)`
    padding: ${(props) => props.theme.space[3]};
  `;

  const CardPreferences = styled(View)`
    flex-direction: row;
    align-items: center;
  `;

  const CardRating = styled(View)`
    flex-direction: row;
    padding: ${(props) => props.theme.space[2]} 0;
  `;

  const CardStatus = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
  `;

  const Icon = styled(Image)`
    width: 15px;
    height: 15px;
  `;

  const CardAdress = styled(Text)`
    padding: ${(props) => props.theme.space[2]} 0;
    color: ${(props) => props.theme.colors.text.secondary};
    font-size: ${(props) => props.theme.fontSizes.caption};
    font-family: ${(props) => props.theme.fonts.monospace};
  `;

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
      <Card>
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
          <CardAdress>{adress}</CardAdress>
        </CardContent>
      </Card>
    </>
  );
};
