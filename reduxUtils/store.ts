import React from "react";
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from "./reduxSetup";

export interface stateInterface {
    location: string
};

let initialState: stateInterface = {
    location: ""
};

let testState: stateInterface = {
    location: "Zion Canyon"
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: testState
});

export default store;