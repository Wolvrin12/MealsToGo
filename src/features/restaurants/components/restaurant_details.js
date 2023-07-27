import { RestaurantCardGenerator } from "./reastaurant_card_generator";
import { SafeArea } from "../../../components/safe-area";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { useState } from "react";

export const RestaurantDetails = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantCardGenerator restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Puncakes" />
          <List.Item title="Fried egg" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Humburger" />
          <List.Item title="Fries" />
          <List.Item title="Barbecue" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Pizza" />
          <List.Item title="Spacaty" />
          <List.Item title="Soup" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Apple Juice" />
          <List.Item title="Orange Juice" />
          <List.Item title="Hot Chocolate" />
          <List.Item title="Soda" />
          <List.Item title="Tea" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
