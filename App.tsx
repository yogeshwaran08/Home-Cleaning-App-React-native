import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/Navigation';
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {
  return (
    <ToastProvider>
      <AppNavigator />
    </ToastProvider>
  );
};

export default App;
