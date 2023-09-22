import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import UserIcon from '../assets/Icons/UserProfile';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {useAuth} from '../CustomContext/AuthContext';
import {getData} from '../Firebase/Crud';

interface PropfileProps {
  profileUrl?: string;
}

const ProfileButton: React.FC<PropfileProps> = ({profileUrl}) => {
  const animationRef = useRef<LottieView | null>(null);
  const nav = useNavigation();
  const [user, initializing] = useAuth();
  const [gender, setGender] = useState<'female' | 'male'>();
  const handlePress = () => {
    nav.navigate('Profile');
  };
  useEffect(() => {
    animationRef.current?.play(30, 120);
    const func = async () => {
      if (user) {
        const gen = await getData(`/${user.uid}/gender`);
        setGender(gen);
      }
    };
    func();
  }, [initializing]);
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      {gender === 'male' ? (
        <LottieView
          ref={animationRef}
          source={require('../assets/animations/boy_profile.json')}
          autoPlay
          loop
          style={{width: 30, height: 30}}
        />
      ) : (
        <LottieView
          ref={animationRef}
          source={require('../assets/animations/girl_profile.json')}
          autoPlay
          loop
          style={{width: 30, height: 30}}
        />
      )}
    </Pressable>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#462EB3',
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  iconstyle: {
    padding: 10,
  },
});
