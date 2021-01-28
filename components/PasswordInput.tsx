import React from 'react';
import { Input } from 'react-native-elements';

export default function PasswordInput() {
    return (
        <Input
        placeholder='Email'
        leftIcon={{ type: 'feather', name: 'lock' }}
        />
      );
}