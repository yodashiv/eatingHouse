import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_KEY, LOCATIONIQ_KEY } from "@env";
import {useDispatch, useSelector} from "react-redux";
import {stateInterface} from "../reduxUtils/store";
import {updateLocation} from "../reduxUtils/reduxSetup";
import { useNavigation } from '@react-navigation/native';


// Construct forwarding geocoding URL (U.S. Only)
function getForwardGeocodingUrl(searchTerm: string, apiKey: string) {
  return `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${searchTerm}&format=json`;
}

const RestaurantSearchScreen = () => {
  let location = useSelector((state: stateInterface) => state.location)
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
      <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("Fetching forward geocoding info from locationIQ");
        let url = getForwardGeocodingUrl(data.description, LOCATIONIQ_KEY);

        fetch(url)
        .then(res => res.json())
        .then(res => {
           console.log(`The first forward geocoding result is ${JSON.stringify(res[0], null, 4)}`);
           if (res.length > 0) {
            dispatch(updateLocation({location: data.description, latitude: +res[0].lat, longitude: +res[0].lon}))
           }

           navigation.navigate("HomeMapScreen");
        });
        console.log(`The google autocomplete data is ${JSON.stringify(data, null, 4)}`);
      }}
      query={{
        key: GOOGLE_PLACES_KEY,
        language: 'en',
      }}
      />
  );
};

export default RestaurantSearchScreen;