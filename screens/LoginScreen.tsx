import * as React from 'react';
import { StyleSheet, View, Image, GestureResponderEvent} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import EmailInput from '../components/EmailInput';
import AuthButton from '../components/AuthButton';
import PasswordInput from '../components/PasswordInput';
import { useNavigation } from '@react-navigation/native';

const handlePress = (event: GestureResponderEvent) => {
  console.log("The login button was pressed");
  //FIXME: Add firebase auth stuff here
};

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style= {styles.logoImage}
        />
        {/* <View style={styles.separator}/> */}
        <View style={styles.inputForm}>
          <EmailInput/>
          <PasswordInput/>
          <AuthButton
            title="Login"
            onPress={handlePress}
          />
          {/* <Divider style={{ backgroundColor: 'blue' }}/>; */}
          <Button
            title="Need an account?"
            style={styles.signupButton}
            type="clear"
            onPress={() => navigation.navigate("SignupScreen")}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
    },
    logoImage: {
      flex:1 , 
      width: undefined, 
      height: undefined
    },
    inputForm: {
      flex: 1, 
      alignItems: "center", 
      justifyContent:"center"
    },
    signupButton: {
      paddingTop: 25
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