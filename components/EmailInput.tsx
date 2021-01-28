import React from 'react';
import { Input } from 'react-native-elements';

export default function EmailInput() {
    return (
        <Input
        placeholder='Email'
        leftIcon={{ type: 'feather', name: 'mail' }}
        />
      );
}