import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Provider} from "react-redux";
import store from "./reduxUtils/store";
import {View, Text} from "react-native";
import {FIREBASE_KEY} from "@env";

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB2Ouigwy3CHgGtGrq8WygGpDkZFx7TlzE",
  authDomain: "neweatinghousefirebase.firebaseapp.com",
  projectId: "neweatinghousefirebase",
  storageBucket: "neweatinghousefirebase.appspot.com",
  messagingSenderId: "1099284106240",
  appId: "1:1099284106240:web:ece311422e43822e0f5ce5",
  measurementId: "G-WBYR7G3RRH"
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    });
  }, []);

  //FIXME: put a better loading screen here
  // Firebase is not yet sure of the state of authentication
  if (!loaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
      return (
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </Provider>
        );
  }



  // if (!isLoadingComplete) {
  //   return <Text> This is a test </Text>;
  // } else {
  // return (
  //   <Provider store={store}>
  //     <SafeAreaProvider>
  //       <Navigation colorScheme={colorScheme} />
  //       <StatusBar />
  //     </SafeAreaProvider>
  //   </Provider>
  //   );
  // }
}
