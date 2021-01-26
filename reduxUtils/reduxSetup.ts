import {createSlice} from "@reduxjs/toolkit";
import React from "react";

const updateLocationF = (state, action) => (
    {
        ...state,
        loading: action.payload.location,
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