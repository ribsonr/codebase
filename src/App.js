/**
 * Olly Owners App
 * created by: Basil Arackal
 * created on: Nov 5, 2020
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootSwitchNavigator from './routes/RootSwitchNavigator';
import {AuthContextProvider} from './context/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <RootSwitchNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
