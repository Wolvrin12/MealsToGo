import { FavouritesContext } from "../features/restaurants/service/favourites/context";
import { styled } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";

const FavouriteBtn = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const FavouriteIcon = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  return (
    <FavouriteBtn>
      <AntDesign name="heart" size={24} color="red" />
    </FavouriteBtn>
  );
};
