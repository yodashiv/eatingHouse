import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';

export interface AuthButtonPropsInterface {
  title: string, 
  onPress: (event: GestureResponderEvent) => void
}

export default function AuthButton(props: AuthButtonPropsInterface) {
    return (
        <Button
        title={props.title}
        type="outline"
        onPress={props.onPress}
        />
      );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "crimson",
      marginBottom: 12,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "rgba(255,255,255,0.7)"
    },
    text: {
      textAlign: "center",
      height: 20
    }
});
