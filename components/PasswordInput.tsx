import React from 'react';
import { Input } from 'react-native-elements';

interface PasswordInputPropsInterface {
  setPassword: React.Dispatch<React.SetStateAction<string>>, 
}

export default function PasswordInput(props: PasswordInputPropsInterface) {
    return (
        <Input
        placeholder='Password'
        leftIcon={{ type: 'feather', name: 'lock' }}
        onChangeText={(text) => props.setPassword(text)}
        />
      );
}