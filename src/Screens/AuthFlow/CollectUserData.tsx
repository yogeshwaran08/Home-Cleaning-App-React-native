import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../config/constants';
import LottieView from 'lottie-react-native';
import InputBox from '../../Components/InputBox';
import {useToast} from 'react-native-toast-notifications';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButtom from '../../Components/CustomButtom';
import {ScreenProps} from '../../Navigation/ScreenTypes';

type CollectUserDataProps = ScreenProps<'CollectUserData'>;

const CollectUserData: React.FC<CollectUserDataProps> = ({navigation}) => {
  const [name, setName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const toast = useToast();

  const handleNameCng = (text: string | undefined) => {
    setName(text);
  };

  const handleLocationCng = (lcn: string | undefined) => {
    setLocation(lcn);
  };

  const handlePhoneCng = (ph: string | undefined) => {
    setPhone(phone);
  };

  const handleSubmit = () => {
    let message = '';
    let type = 'warning';
    if (!name || name === null || name?.trim() === '') {
      message = 'Name Field is required';
    } else if (name?.length <= 3) {
      message = 'Name should be atlease 4 character long';
    } else if (!phone || name === null || name?.trim() === '') {
      message = 'Phone number is required';
    } else if (phone.trim.length < 10 || phone.trim.length >= 11) {
      message = 'Phone number should be exactly 10 digit long';
    } else if (!location || location === null || location?.trim() === '') {
      message = 'Location field is required';
    } else if (location.trim().length <= 3) {
      message = 'The location field should be atleast 4 character long';
    } else {
      message = 'Sucess';
      type = 'warning';
      navigation.navigate('AuthLoadingScreen');
    }
    if (message !== '') {
      toast.show(message, {
        type: 'warning',
        placement: 'top',
        duration: 3000,
        animationType: 'slide-in',
      });
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
              style={styles.input}
            />
            <InputBox
              text={phone}
              onChange={handlePhoneCng}
              placeholder="Phone No."
              leftIcon={<Feather name="phone" size={25} color={'black'} />}
              style={styles.input}
            />
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
    justifyContent: 'center',
    alignItems: 'center',
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
});
