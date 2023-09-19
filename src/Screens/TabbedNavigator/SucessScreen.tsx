import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLOR} from '../../config/constants';
import LottieView from 'lottie-react-native';
import CustomButtom from '../../Components/CustomButtom';
import {ScreenProps} from '../../Navigation/ScreenTypes';

type SuccessScreenProps = ScreenProps<'SucessScreen'>;

const SucessScreen: React.FC<SuccessScreenProps> = ({navigation}) => {
  const animationRef = useRef<LottieView | null>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);
  const handleDone = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <LottieView
          ref={animationRef}
          source={require('../../assets/animations/tick_animation.json')}
          style={{height: 300, width: 300}}
          loop={false}
        />
        <View style={{position: 'absolute', zIndex: -1}}>
          <LottieView
            source={require('../../assets/animations/completed_celebration.json')}
            autoPlay={true}
            loop={false}
            style={{height: 600, width: 500}}
          />
        </View>
        <Text style={styles.text}>Booking Successful</Text>
        <CustomButtom text="Continue" onPress={handleDone} style={styles.btn} />
      </View>
    </View>
  );
};

export default SucessScreen;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: COLOR.backgroundColor,
    flex: 1,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 30,
  },
  text: {
    color: COLOR.primaryForeground,
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
  },
  btn: {
    width: 150,
  },
});
