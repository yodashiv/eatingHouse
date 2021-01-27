import React from 'react';
import { SearchBar } from 'react-native-elements';

export default function SearchBarPopout() {
    return (
        <SearchBar
        placeholder="Search"
        onFocus={() => console.log("The search bar was pressed")}
      />
    );
}