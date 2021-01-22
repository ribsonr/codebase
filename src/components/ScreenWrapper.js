import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';

import {Colors} from '../styles';

const ScreenWrapper = ({children}) => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: Colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      enabled
      style={{width: '100%', flex: 1, backgroundColor: Colors.secondary}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default ScreenWrapper;
