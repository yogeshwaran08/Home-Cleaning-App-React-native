import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLOR} from '../../config/constants';
import UserIcon from '../../assets/Icons/UserProfile';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LocationIcon from '../../assets/Icons/Location';
import PhoneIcon from '../../assets/Icons/Phone';
import CustomButtom from '../../Components/CustomButtom';
import LottieView from 'lottie-react-native';
import {ScreenProps} from '../../Navigation/ScreenTypes';
import {StackActions} from '@react-navigation/native';
import DeleteModel from './DeleteModel';
import LogoutModel from './LogoutModel';

type ProfileScreenProps = ScreenProps<'Profile'>;

const Profile: React.FC<ProfileScreenProps> = ({navigation}) => {
  const animationRef = useRef<LottieView | null>(null);
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [isLogOutVisible, setLogoutVisible] = useState(false);

  const handleLogout = () => {
    navigation.dispatch(StackActions.replace('AuthFlow'));
  };

  const handleDelete = () => {
    navigation.dispatch(StackActions.replace('AuthFlow'));
  };

  const hideDelete = () => {
    setDeleteVisible(false);
  };
  const showDelete = () => {
    setDeleteVisible(true);
  };

  const hideLogout = () => {
    setLogoutVisible(false);
  };
  const showLogout = () => {
    setLogoutVisible(true);
  };

  useEffect(() => {
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <View style={styles.parent}>
      <View style={styles.picContainer}>
        <LottieView
          ref={animationRef}
          source={require('../../assets/animations/girl_profile.json')}
          autoPlay
          loop
          style={{width: 200, height: 200}}
        />
      </View>
      <View style={styles.dataCard}>
        <View style={styles.NameContainer}>
          <View style={styles.iconContainer}>
            <UserIcon height={30} width={30} fill={'none'} />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.subHeader}>Name</Text>
            <Text style={styles.header}>Emma watson</Text>
          </View>
          <View style={styles.iconContainer}>
            <EvilIcons name={'pencil'} size={30} color={'white'} />
          </View>
        </View>
        <View style={styles.NameContainer}>
          <View style={styles.iconContainer}>
            <PhoneIcon height={30} width={30} />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.subHeader}>Phone number</Text>
            <Text style={styles.header}>9626067415</Text>
          </View>
          <View style={styles.iconContainer}>
            <EvilIcons name={'pencil'} size={30} color={'white'} />
          </View>
        </View>
        <View style={styles.NameContainer}>
          <View style={styles.iconContainer}>
            <LocationIcon height={25} width={25} />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.subHeader}>Location</Text>
            <Text style={styles.header}>
              No 123, My Street, My city, Pin code 0006
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <EvilIcons name={'pencil'} size={30} color={'white'} />
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={{width: '50%'}}>
          <CustomButtom text="Logout" onPress={showLogout} />
        </View>
        <View style={{width: '50%'}}>
          <CustomButtom text="Delete Account" onPress={showDelete} />
        </View>
        <DeleteModel
          onCancel={hideDelete}
          onConfirm={handleDelete}
          visible={isDeleteVisible}
        />
        <LogoutModel
          onCancel={hideLogout}
          onConfirm={handleLogout}
          visible={isLogOutVisible}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: COLOR.backgroundColor,
    flex: 1,
  },
  picContainer: {
    // backgroundColor: 'white',
    height: 200,
    width: 200,
    borderRadius: 50,
    alignSelf: 'center',
  },
  NameContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    gap: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  dataContainer: {
    flex: 7,
  },
  subHeader: {
    color: COLOR.secondaryForeground,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  header: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  dataCard: {
    paddingTop: 20,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    gap: 20,
    alignSelf: 'center',
    paddingRight: 20,
    paddingVertical: 40,
  },
});
