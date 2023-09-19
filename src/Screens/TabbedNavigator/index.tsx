import {View, Text, Button} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../Navigation/ScreenTypes';
import Home from './Home';
import {COLOR} from '../../config/constants';
import TitleText from '../../Components/TitleText';
import ProfileButton from '../../Components/ProfileButton';
import {createStackNavigator} from '@react-navigation/stack';
import ServiceEntry from './ServiceEntry';
import BackButton from '../../Components/BackButton';
import Profile from './Profile';
import SucessScreen from './SucessScreen';

const TabbeNavigtor = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <TabbeNavigtor.Navigator
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
      <TabbeNavigtor.Screen
        component={Home}
        name="Home"
        options={{
          headerStyle: {
            height: 70,
            backgroundColor: COLOR.backgroundColor,
          },
          headerShadowVisible: false,
          headerTitle: props => <TitleText scrnName="Our Services" />,
          headerLeftContainerStyle: {display: 'none'},
        }}
      />
      <TabbeNavigtor.Screen
        component={ServiceEntry}
        name="ServiceEntry"
        options={{
          headerTitle: props => <TitleText scrnName="Services" />,
          headerLeft: () => <BackButton />,
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      />

      <TabbeNavigtor.Screen
        component={Profile}
        name="Profile"
        options={{
          headerTitle: props => <TitleText scrnName="Profile" />,
          headerLeft: () => <BackButton />,
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      />
      <TabbeNavigtor.Screen
        component={SucessScreen}
        name="SucessScreen"
        options={{
          headerShown: false,
        }}
      />
    </TabbeNavigtor.Navigator>
  );
};

export default MainNavigator;
