import { FavouritesContext } from "../../../../services/locations/context";
import { FavouriteBtn } from "../../../../styles/favourites_styles";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";

export const FavouriteIcon = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteBtn
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteBtn>
  );
};
