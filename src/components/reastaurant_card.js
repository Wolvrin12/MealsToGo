import { Card, Text } from "react-native-paper";

export const RestaurantCard = ({ restaurant = {} }) => {
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
          <Text variant="titleMedium" style={{ padding: 10 }}>
            {name}
          </Text>
        </Card.Content>
      </Card>
    </>
  );
};
