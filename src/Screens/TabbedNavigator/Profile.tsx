import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
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
import {useAuth} from '../../CustomContext/AuthContext';
import {getData, setData} from '../../Firebase/Crud';
import {logOut} from '../../Firebase/Firebase';
import LocationEditorModel from './LocationEditorModel';
import {TextInput} from 'react-native-gesture-handler';

type ProfileScreenProps = ScreenProps<'Profile'>;

const Profile: React.FC<ProfileScreenProps> = ({navigation}) => {
  const animationRef = useRef<LottieView | null>(null);

  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [isLogOutVisible, setLogoutVisible] = useState(false);
  const [user, initializing] = useAuth();

  const [name, setName] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [showLocEditer, setLocEditer] = useState<boolean>(false);

  useEffect(() => {
    const dataSetter = async () => {
      if (user) {
        setName(user.email);
        console.log(user.displayName);
        const phoneNO = await getData(`/${user.uid}/phone`);
        const loc = await getData(`${user.uid}/location`);
        const gen = await getData(`${user.uid}/gender`);
        setPhone(phoneNO);
        setLocation(loc);
        setGender(gen);
      }
    };
    dataSetter();
  }, [initializing]);

  useEffect(() => {
    animationRef.current?.play(20, 90);
  }, [initializing]);

  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {display: 'none'},
    });
  });

  const handleLogout = () => {
    logOut();
    navigation.dispatch(StackActions.replace('AuthFlow'));
  };

  const handleDelete = () => {
    user?.delete();
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
  const handleLoctionChange = async (loc: string | undefined) => {
    setData(`${user?.uid}/location`, loc);
    setLocEditer(false);
    const loc1 = await getData(`${user?.uid}/location`);
    setLocation(loc1);
  };

  return (
    <View style={styles.parent}>
      <View style={styles.picContainer}>
        {gender === 'male' ? (
          <LottieView
            ref={animationRef}
            source={require('../../assets/animations/boy_profile.json')}
            autoPlay
            loop
            style={{width: 200, height: 200}}
          />
        ) : (
          <LottieView
            ref={animationRef}
            source={require('../../assets/animations/girl_profile.json')}
            autoPlay
            loop
            style={{width: 200, height: 200}}
          />
        )}
      </View>
      <View style={styles.dataCard}>
        <View style={styles.NameContainer}>
          <View style={styles.iconContainer}>
            <UserIcon height={30} width={30} fill={'none'} />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.subHeader}>Email</Text>
            <Text style={styles.header} numberOfLines={1}>
              {name}
            </Text>
          </View>
          {/* <View style={styles.iconContainer}>
            <EvilIcons name={'pencil'} size={30} color={'white'} />
          </View> */}
        </View>
        <View style={styles.NameContainer}>
          <View style={styles.iconContainer}>
            <PhoneIcon height={30} width={30} />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.subHeader}>Phone number</Text>
            <Text style={styles.header}>{phone}</Text>
          </View>
          {/* <View style={styles.iconContainer}>
            <EvilIcons name={'pencil'} size={30} color={'white'} />
          </View> */}
        </View>
        <View style={styles.NameContainer}>
          <View style={styles.iconContainer}>
            <LocationIcon height={25} width={25} />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.subHeader}>Location</Text>
            <Text style={styles.header}>{location}</Text>
          </View>
          <Pressable
            style={styles.iconContainer}
            onPress={() => setLocEditer(true)}>
            <EvilIcons name={'pencil'} size={30} color={'white'} />
          </Pressable>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View>
          <CustomButtom
            text="Logout"
            onPress={showLogout}
            textStyle={{paddingHorizontal: 20}}
          />
        </View>
        <View>
          <CustomButtom
            text="Delete Account"
            onPress={showDelete}
            textStyle={{paddingHorizontal: 20}}
          />
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
        {/* <EmailEditorModel onCancel={} /> */}
        <LocationEditorModel
          onCancel={() => setLocEditer(false)}
          visible={showLocEditer}
          onConfirm={handleLoctionChange}
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
    justifyContent: 'center',
  },
});
