import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPasswordScreen from './ForgotPassword';
import AuthLoadingScreen from './AuthLoadingScreen';
import MainNavigator from '../TabbedNavigator';
import {RootStackParamList} from '../../Navigation/ScreenTypes';
import CollectUserData from './CollectUserData';

const AuthStackNavigator = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{headerShown: false, gestureDirection: 'horizontal'}}
      initialRouteName="LoginScreen">
      <AuthStackNavigator.Screen component={LoginScreen} name={'LoginScreen'} />
      <AuthStackNavigator.Screen
        component={SignUpScreen}
        name={'SignUpScreen'}
      />
      <AuthStackNavigator.Screen
        component={ForgotPasswordScreen}
        name={'ForgotPassword'}
      />
      <AuthStackNavigator.Screen
        component={AuthLoadingScreen}
        name="AuthLoadingScreen"
      />
      <AuthStackNavigator.Screen
        component={CollectUserData}
        name="CollectUserData"
      />
      <AuthStackNavigator.Screen
        component={MainNavigator}
        name="MainNavigator"
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;
