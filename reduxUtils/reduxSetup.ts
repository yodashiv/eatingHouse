import {createSlice} from "@reduxjs/toolkit";
import React from "react";
import { stateInterface } from "./store";

interface updateLocationActionInterface {
    payload: updateLocationPayloadInterface
}

interface updateLocationPayloadInterface {
    location: string,
    latitude: number, 
    longitude: number
}

const updateLocationF = (state: stateInterface, action: updateLocationActionInterface) => (
    {
        ...state,
        location: action.payload.location,
        latitude: action.payload.latitude, 
        longitude: action.payload.longitude
    }
);

/* Redux Toolkit utility method to auto-create action types, creators, and reducer. */
const dataSlice = createSlice({
    name: 'data',
    initialState: {},
    reducers: {
        "updateLocation": updateLocationF
    }
});

/* Our async action creators that will fetch data over the network.
* Using redux-thunk under the hood to allow us to return a function.*/

export const templateAsyncFunc = () => {
    return async(dispatch, getState) => {
        let listOfCompanies = [{site: "Autocompletion Unavailable"}];
        let action = dataSlice.actions.updateLocation;
        dispatch(action);
    }
};

const {actions, reducer } = dataSlice;
export const rootReducer = reducer;
export const {updateLocation } = actions;