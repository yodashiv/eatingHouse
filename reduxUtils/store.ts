import React from "react";
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from "./reduxSetup";

export interface stateInterface {
    location: string,
    latitude: number, 
    longitude: number
};

let initialState: stateInterface = {
    location: "",
    latitude: 0, 
    longitude: 0
};

let testState: stateInterface = {
    location: "Berkeley", 
    latitude: 37.871666, 
    longitude: -122.272781
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: testState
});

export default store;