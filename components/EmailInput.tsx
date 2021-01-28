import React from 'react';
import { Input } from 'react-native-elements';

interface EmailInputPropsInterface {
  setEmail: React.Dispatch<React.SetStateAction<string>>, 
}

export default function EmailInput(props: EmailInputPropsInterface) {
    return (
        <Input
        placeholder='Email'
        leftIcon={{ type: 'feather', name: 'mail' }}
        onChangeText={(text) => props.setEmail(text)}
        />
      );
}