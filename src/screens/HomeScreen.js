import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Typography} from '../styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Welcome to react native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headingTitle: {fontSize: 20},
});

export default HomeScreen;
