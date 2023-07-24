import { LocationContext } from "./service/locations/context";
import { RestaurantsSearch } from "./restaurants_styles";
import { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

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
