import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../config/constants';
import LottieView from 'lottie-react-native';
import InputBox from '../../Components/InputBox';
import {useToast} from 'react-native-toast-notifications';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButtom from '../../Components/CustomButtom';
import {ScreenProps} from '../../Navigation/ScreenTypes';
import DropdownComponent from '../../Components/TimingDropDown';
import ClockIcon from '../../assets/Icons/Clock';
import {useAuth} from '../../CustomContext/AuthContext';
import {setData} from '../../Firebase/Crud';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {getAddress, getCurrentLocation} from '../../Firebase/GeoLocation';

type CollectUserDataProps = ScreenProps<'CollectUserData'>;

const CollectUserData: React.FC<CollectUserDataProps> = ({navigation}) => {
  const [name, setName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [selectedOption, setSelectedOption] = useState(null);
  const toast = useToast();
  const [user, initializing] = useAuth();

  let data = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  const notify = (msg: string, type: string) => {
    toast.show(msg, {
      type: type,
      placement: 'top',
      duration: 3000,
      animationType: 'slide-in',
    });
  };

  const handleNameCng = (text: string | undefined) => {
    setName(text);
  };

  const handleLocationCng = (lcn: string | undefined) => {
    setLocation(lcn);
  };

  const handlePhoneCng = (ph: string | undefined) => {
    setPhone(ph);
  };

  const handleSubmit = () => {
    if (!user && initializing === false) {
      notify('Cookie error', 'warning');
    } else if (!user && initializing === true) {
      notify('Please hold up on this page for some more time', 'warning');
    } else if (!name || name === null || name?.trim() === '') {
      notify('Name Field is required', 'warning');
    } else if (name?.length <= 3) {
      notify('Name should be atlease 4 character long', 'warning');
    } else if (!phone || phone === null || phone?.trim() === '') {
      notify('Phone number is required', 'warning');
    } else if (phone.trim().length !== 10) {
      notify('Phone number should be exactly 10 digit long', 'warning');
    } else if (!location || location === null || location?.trim() === '') {
      notify('Location field is required', 'warning');
    } else if (location.trim().length <= 3) {
      notify(
        'The location field should be atleast 4 character long',
        'warning',
      );
    } else if (!selectedOption || selectedOption === null) {
      notify('Please select your gender', 'warning');
    } else {
      user?.updateProfile({displayName: name});
      // user?.updatePhoneNumber();
      setData(`/${user?.uid}`, {
        location: location,
        gender: selectedOption,
        phone: phone,
      });
      navigation.navigate('AuthLoadingScreen');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.parent}>
        <KeyboardAvoidingView style={styles.container} behavior="height">
          {/* <View style={styles.animationContainer}>
            <Image
              source={require('../../assets/Imgs/helo.png')}
              style={styles.imgStyle}
            />
          </View> */}

          <View>
            <Text style={styles.header}>Please Fill up your details</Text>
          </View>
          <View style={styles.inputboxs}>
            <InputBox
              text={name}
              onChange={handleNameCng}
              placeholder="Name"
              leftIcon={<Feather name="user" size={30} color={'black'} />}
              style={styles.input}
            />
            <InputBox
              text={location}
              onChange={handleLocationCng}
              placeholder="Location"
              leftIcon={
                <Entypo name="location-pin" size={25} color={'black'} />
              }
              multiline={true}
              rightIcon={
                <Pressable
                  onPress={() =>
                    getAddress(address => {
                      setLocation(address);
                      console.log('asdasd');
                    })
                  }>
                  <FontAwesome6
                    name={'location-crosshairs'}
                    size={25}
                    color={'black'}
                  />
                </Pressable>
              }
            />
            <InputBox
              text={phone}
              onChange={handlePhoneCng}
              placeholder="Phone No."
              leftIcon={<Feather name="phone" size={25} color={'black'} />}
              style={styles.input}
            />
            <View style={styles.timeContainer}>
              <DropdownComponent
                placeholder="Gender"
                value={selectedOption}
                setValue={setSelectedOption}
                containerStyle={styles.dropDownStyle}
                data={data}
                type="dob"
              />
            </View>
            <CustomButtom
              text="Submit"
              style={styles.btnStyle}
              onPress={handleSubmit}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CollectUserData;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: COLOR.backgroundColor,
    flex: 1,
    display: 'flex',
  },
  container: {
    position: 'relative',
    top: '30%',
  },
  animationContainer: {
    paddingBottom: 30,
  },
  header: {
    fontSize: 25,
    fontFamily: 'Lobster-Regular',
    color: COLOR.primaryForeground,
    alignSelf: 'center',
  },
  inputboxs: {
    width: '90%',
    alignSelf: 'center',
  },
  imgStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 5,
  },
  btnStyle: {
    marginVertical: 15,
  },
  dropDownStyle: {
    width: '100%',
    // height: 30,
    borderRadius: 30,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'center',
    marginVertical: 5,
  },
});
