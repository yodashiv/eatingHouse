import React, {useState} from 'react';
import { StyleSheet, View, Image, GestureResponderEvent} from 'react-native';
import EmailInput from '../components/EmailInput';
import AuthButton from '../components/AuthButton';
import firebase from 'firebase';
import AuthModal from '../components/AuthModal';

export default function ResetPasswordScreen() {

  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handlePress = (event: GestureResponderEvent) => {
    console.log("The reset password button was pressed");
    console.log(`The email was ${email}`);

    firebase.auth().sendPasswordResetEmail(email)
    .then((result) => {
        //FIXME: notify user that signup succeeded 
        console.log("Email reset link successful sent");
        console.log(result);
        setModalMessage("An email with a password reset link has been sent");
        setModalVisible(true);
    })
    .catch((error) => {
        //FIXME: notify user that signup failed 
        console.log("Email reset failed and response is:");
        console.log(error);
        setModalMessage(error.message)
        setModalVisible(true);
    });
  };

  return (
    <View style={styles.container}>
        <AuthModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          message={modalMessage}
        />
        <Image
          source={require("../assets/images/logo.png")}
          style= {styles.logoImage}
        />
        {/* <View style={styles.separator}/> */}
        <View style={styles.inputForm}>
          <EmailInput setEmail={setEmail}/>
          <AuthButton
            title="Reset Password"
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