import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import RestaurantSearch from "../components/RestaurantSearch";
import MapEmbed from '../components/MapEmbed';
import SearchBarPopout from '../components/SearchBarPopout';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Home Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
      {/* <RestaurantSearch/> */}
      <SearchBarPopout/>
      <MapEmbed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: "center", 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
