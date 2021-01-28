import React, {useRef} from 'react';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function SearchBarPopout() {
    const navigation = useNavigation();
    const self = useRef(null);

    return (
        <SearchBar
        placeholder="Search"
        ref={self}
        onFocus={() => {
            console.log("The search bar was pressed");
            navigation.navigate("TabTwo");
            self.current.blur();
        }}
      />
    );
}