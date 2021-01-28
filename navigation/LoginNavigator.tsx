import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginStackParamList } from '../types';
import LoginScreen from '../screens/LoginScreen';

const LoginStack = createStackNavigator<LoginStackParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: 'Home' }}
      />
      <LoginStack.Screen
        name="SignupScreen"
        component={RestaurantSearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </LoginStack.Navigator>
  );
}