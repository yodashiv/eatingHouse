import * as React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import EmailInput from '../components/EmailInput';
import LoginButton from '../components/LoginButton';
import PasswordInput from '../components/PasswordInput';

export default function LoginScreen() {

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
          <LoginButton/>
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