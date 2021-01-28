import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
  apiKey: FIREBASE_KEY,
  authDomain: "eatinghouse.firebaseapp.com",
  projectId: "eatinghouse",
  storageBucket: "eatinghouse.appspot.com",
  messagingSenderId: "351334492855",
  appId: "1:351334492855:web:39231106c1abbeba0b7b32",
  measurementId: "G-7642Q7TJEB"
};

// if (firebase.apps.length == 0) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <Text> This is a test </Text>;
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
}
