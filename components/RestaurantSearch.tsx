import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_KEY } from "@env";
import {useDispatch, useSelector} from "react-redux";
import {stateInterface} from "../reduxUtils/store";
import {updateLocation} from "../reduxUtils/reduxSetup";


const RestaurantSearch = () => {

  let location = useSelector((state: stateInterface) => state.location)
  const dispatch = useDispatch();

  return (
      <GooglePlacesAutocomplete
      placeholder={location}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("The location is" + location);
        dispatch(updateLocation({location: data.description}));
        console.log(`The data description is ${data.description}`);
      }}
      query={{
        key: GOOGLE_PLACES_KEY,
        language: 'en',
      }}
      />
  );
};

export default RestaurantSearch;