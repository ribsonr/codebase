import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const SplashScreen = () => {
  const {checkAuthState} = useContext(AuthContext);

  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
