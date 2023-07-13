import { Card, Text } from "react-native-paper";
import { styled } from "styled-components";

export const RestaurantCard = ({ restaurant = {} }) => {
  const CardText = styled(Text)`
    padding-top: ${(props) => props.theme.space[2]};
    color: ${(props) => props.theme.colors.text.secondary};
    font-size: ${(props) => props.theme.fontSizes.title};
    font-family: ${(props) => props.theme.fonts.body};
  `;

  const {
    name = "Wolvrin Restaurant",
    icon,
    photos = [
      "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    ],
    addess = "36 Street, Madrid, Spain",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <>
      <Card>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <CardText>{name}</CardText>
        </Card.Content>
      </Card>
    </>
  );
};
