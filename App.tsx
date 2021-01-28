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
