import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';

const handlePress = (event: GestureResponderEvent) => {
    console.log("The login button was pressed");
    //FIXME: Add firebase auth stuff here
};

export default function LoginButton() {
    return (
        <Button
        title="Login"
        type="outline"
        onPress={handlePress}
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
