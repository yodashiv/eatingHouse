import React, {useState} from 'react';
import { StyleSheet, View, Image, GestureResponderEvent} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import EmailInput from '../components/EmailInput';
import AuthButton from '../components/AuthButton';
import PasswordInput from '../components/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = (event: GestureResponderEvent) => {
    console.log("The login button was pressed");
    console.log(`The email was ${email} and the password was ${password}`);
    //FIXME: Add firebase auth stuff here
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        //FIXME: notify user that signup succeeded 
        console.log("Login succeeded and response is:");
        console.log(result);
    })
    .catch((error) => {
        //FIXME: notify user that signup failed 
        console.log("Login failed and response is:");
        console.log(error);
    });
  };

  return (
    <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style= {styles.logoImage}
        />
        {/* <View style={styles.separator}/> */}
        <View style={styles.inputForm}>
          <EmailInput setEmail={setEmail}/>
          <PasswordInput setPassword={setPassword}/>
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