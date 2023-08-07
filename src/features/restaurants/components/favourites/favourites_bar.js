import { MapCompactInfo } from "../../../map/components/map_compact_info";
import { TypoText } from "../../../../components/typography";
import { ScrollView, TouchableOpacity } from "react-native";
import { FavouritesWrapper } from "./favourites_styles";
import { Spacer } from "../../../../components/spacer";

export const FavouritesBar = ({ favourites, goToDetail }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="bottom" size="large">
        <Spacer position="left" size="large">
          <TypoText variant="title">Favourites</TypoText>
        </Spacer>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  goToDetail("Restaurant Detail", { restaurant: restaurant });
                }}
              >
                <MapCompactInfo
                  name={restaurant.name}
                  photo={restaurant.photos[0]}
                />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
