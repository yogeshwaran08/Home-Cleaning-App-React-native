import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../../config/constants';
import LottieView from 'lottie-react-native';
import {ScreenProps} from '../../Navigation/ScreenTypes';
import {StackActions} from '@react-navigation/native';

type AuthLoadingScreenProps = ScreenProps<'AuthLoadingScreen'>;

const AuthLoadingScreen: React.FC<AuthLoadingScreenProps> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('MainNavigator'));
    }, 3000);
  });
  return (
    <View style={{backgroundColor: COLOR.backgroundColor}}>
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/animations/world_loading.json')}
          autoPlay
          loop
          style={styles.worldLoading}
        />
        <LottieView
          source={require('../../assets/animations/loading_text.json')}
          autoPlay
          loop
          style={{flex: 1}}
        />
      </View>
    </View>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.backgroundColor,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  worldLoading: {
    height: '80%',
  },
  worldLoadingContainer: {
    width: '80%',
    justifyContent: 'center',
  },
});
