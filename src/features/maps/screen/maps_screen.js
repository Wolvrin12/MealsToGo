import { useContext, useState, useEffect } from "react";
import { Search } from "../components/maps_search";
import { Map } from "../styles/maps_styles";

export const MapsScreen = () => {
  return (
    <>
      <Search />
      <Map />
    </>
  );
};
