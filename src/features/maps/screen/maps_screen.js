import { LocationContext } from "../../restaurants/service/locations/context";
import { RestaurantsContext } from "../../restaurants/service/context";
import { MapsCallout } from "../components/maps_callout";
import { useContext, useEffect, useState } from "react";
import { Marker, Callout } from "react-native-maps";
import { Search } from "../components/maps_search";
import { Map } from "../styles/maps_styles";

export const MapsScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout>
                <MapsCallout name={restaurant.name} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
