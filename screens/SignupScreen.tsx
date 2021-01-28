import React, {useState} from 'react';
import { StyleSheet, View, Image, GestureResponderEvent} from 'react-native';
import EmailInput from '../components/EmailInput';
import AuthButton from '../components/AuthButton';
import PasswordInput from '../components/PasswordInput';

export default function SignupScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePress = (event: GestureResponderEvent) => {
        console.log("The sign up button was pressed");
        console.log(`The email was ${email} and the password was ${password}`);
        //FIXME: Add firebase sign up stuff here
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
                title="Signup"
                onPress={handlePress}
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