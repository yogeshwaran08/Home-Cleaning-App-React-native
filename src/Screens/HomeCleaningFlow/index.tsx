import {View, Text, Button} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../Navigation/ScreenTypes';
import {COLOR} from '../../config/constants';
import TitleText from '../../Components/TitleText';
import ProfileButton from '../../Components/ProfileButton';
import {createStackNavigator} from '@react-navigation/stack';
import BackButton from '../../Components/BackButton';
import CleaningSelecter from './CleaningSelecter';
import FullCleaning from './FullCleaning';
import PartialCleaning from './PartialCleaning';

const HomeCleaningNav = createStackNavigator<RootStackParamList>();

const HomeCleaning = () => {
  return (
    <HomeCleaningNav.Navigator
      screenOptions={{
        headerStyle: {
          height: 70,
          backgroundColor: COLOR.backgroundColor,
        },
        headerShadowVisible: false,
        headerRight: () => (
          <ProfileButton profileUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
        ),
      }}>
      <HomeCleaningNav.Screen
        component={CleaningSelecter}
        name="CleaningSelecter"
        options={{
          headerStyle: {
            height: 70,
            backgroundColor: COLOR.backgroundColor,
          },
          headerShadowVisible: false,
          headerTitle: props => <TitleText scrnName="Home Cleaning" />,
          headerLeftContainerStyle: {display: 'none'},
        }}
      />
      <HomeCleaningNav.Screen
        component={FullCleaning}
        name="FullCleaning"
        options={{
          headerStyle: {
            height: 70,
            backgroundColor: COLOR.backgroundColor,
          },
          headerShadowVisible: false,
          headerTitle: props => <TitleText scrnName="Full Cleaning" />,
          headerLeftContainerStyle: {display: 'none'},
        }}
      />
      <HomeCleaningNav.Screen
        component={PartialCleaning}
        name="PartialCleaning"
        options={{
          headerStyle: {
            height: 70,
            backgroundColor: COLOR.backgroundColor,
          },
          headerShadowVisible: false,
          headerTitle: props => <TitleText scrnName="Partial Cleaning" />,
          headerLeftContainerStyle: {display: 'none'},
        }}
      />
    </HomeCleaningNav.Navigator>
  );
};

export default HomeCleaning;
