import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginStackParamList } from '../types';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const LoginStack = createStackNavigator<LoginStackParamList>();

export default function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: 'Login' }}
      />
      <LoginStack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerTitle: 'Signup' }}
      />
      <LoginStack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerTitle: 'Reset Password' }}
      />
    </LoginStack.Navigator>
  );
}