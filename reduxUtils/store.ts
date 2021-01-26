import React from "react";
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from "./reduxSetup";

export interface dataState {
    location: string
}

let initialState: dataState = {
    location: ""
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
});

export default store