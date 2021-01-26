import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const RestaurantSearch = () => {
  const googlePlacesKey = process.env.REACT_NATIVE_googlePlacesKey
  console.log("The key is " +  googlePlacesKey)
  return (
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("I was pressed");
        console.log(data, details);
      }}
      query={{
        key: googlePlacesKey,
        language: 'en',
      }}
      />
  );
};

export default RestaurantSearch;