import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_KEY } from "@env";

const RestaurantSearch = () => {
  return (
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("I was pressed");
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_PLACES_KEY,
        language: 'en',
      }}
      />
  );
};

export default RestaurantSearch;