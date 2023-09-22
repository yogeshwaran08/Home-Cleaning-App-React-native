import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './src/Navigation';
import {ToastProvider} from 'react-native-toast-notifications';
import {AuthContextProvider} from './src/CustomContext/AuthContext';
import database from '@react-native-firebase/database';

const App = () => {
  useEffect(() => {
    database().setPersistenceEnabled(true);
  });
  return (
    <AuthContextProvider>
      <ToastProvider>
        <AppNavigator />
      </ToastProvider>
    </AuthContextProvider>
  );
};

export default App;
