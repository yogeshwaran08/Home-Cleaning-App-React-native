import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../Screens/AuthFlow';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{headerShown: false, gestureDirection: 'horizontal'}}
        initialRouteName="AuthFlow">
        <AppStack.Screen component={AuthStack} name={'AuthFlow'} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
