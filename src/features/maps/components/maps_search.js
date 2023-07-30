import { LocationContext } from "../../restaurants/service/locations/context";
import { useContext, useEffect, useState } from "react";
import { MapsSearch } from "../styles/maps_styles";
import { Searchbar } from "react-native-paper";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <MapsSearch>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </MapsSearch>
  );
};
