import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Riafy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
