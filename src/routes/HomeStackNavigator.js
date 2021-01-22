import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {AppContext} from '../context/AppContext';
import {Colors} from '../styles';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const {
    locale: {locale},
  } = useContext(AppContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: () => null,
        headerTintColor: Colors.BLACK,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: locale?.navigation?.profile}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
