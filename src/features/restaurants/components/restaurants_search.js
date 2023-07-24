import { LocationContext } from "./service/locations/context";
import { RestaurantsSearch } from "./restaurants_styles";
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
