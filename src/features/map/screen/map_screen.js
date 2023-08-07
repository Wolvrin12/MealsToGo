import { LocationContext } from "../../restaurants/services/locations/context";
import { RestaurantsContext } from "../../restaurants/services/data/context";
import { MapCallout } from "../components/map_callout";
import { useContext, useEffect, useState } from "react";
import { Marker, Callout } from "react-native-maps";
import { Search } from "../components/map_search";
import { Map } from "../styles/map_styles";

export const MapScreen = ({ navigation }) => {
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
              <Callout
                onPress={() =>
                  navigation.navigate("Restaurant Detail", { restaurant })
                }
              >
                <MapCallout
                  name={restaurant.name}
                  photo={restaurant.photos[0]}
                />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
