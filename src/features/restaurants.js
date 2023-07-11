import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/reastaurant_card";

export const Restaurants = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <View style={{ padding: 15, backgroundColor: "yellowgreen" }}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={{ flex: 1, padding: 15, backgroundColor: "orange" }}>
          <RestaurantCard></RestaurantCard>
        </View>
      </SafeAreaView>
    </>
  );
};
