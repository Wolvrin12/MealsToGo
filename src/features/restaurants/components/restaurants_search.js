import { RestaurantsSearch } from "../styles/restaurants_styles";
import { LocationContext } from "../service/locations/context";
import { Searchbar } from "react-native-paper";
import { useContext, useState } from "react";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <RestaurantsSearch>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </RestaurantsSearch>
  );
};
