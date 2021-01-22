import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import {StatusBar} from 'react-native';
import {Colors} from '../styles';

const Stack = createStackNavigator();

const AuthSwitchNavigator = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthSwitchNavigator;
