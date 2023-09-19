import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../config/constants';
import InputBox from '../../Components/InputBox';
import HomeIcon from '../../assets/Icons/Home';
import LockIcon from '../../assets/Icons/Lock';
import CustomButtom from '../../Components/CustomButtom';
import {Image} from 'react-native';
import {ScreenProps} from '../../Navigation/ScreenTypes';
import {useToast} from 'react-native-toast-notifications';

type ForgotPasswordProps = ScreenProps<'ForgotPassword'>;

const ForgotPasswordScreen: React.FC<ForgotPasswordProps> = ({navigation}) => {
  const [username, setUsername] = useState<string>();
  const toast = useToast();

  const handleButton = () => {
    toast.show('Email sent', {
      type: 'success',
      placement: 'top',
      duration: 4000,
      animationType: 'slide-in',
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Forgot Password</Text>
            <Text style={styles.subHeader}>Reset your password</Text>
          </View>

          <View>
            <InputBox
              text={username}
              onChange={uname => setUsername(uname)}
              placeholder="Email"
              leftIcon={<HomeIcon height={32} width={32} />}
              style={{marginVertical: 10}}
            />
          </View>
          <CustomButtom
            text="Reset Password"
            style={{marginTop: 10}}
            onPress={() => handleButton()}
          />
          <View style={styles.newUserContainer}>
            <Text style={styles.newUserText}>Looking of login?</Text>
            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.newUserPress}>Login here</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parent: {
    display: 'flex',
    width: '90%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  headerText: {
    color: COLOR.primaryForeground,
    fontFamily: 'Lobster-Regular',
    fontSize: 40,
  },
  subHeader: {
    color: COLOR.secondaryForeground,
    fontFamily: 'Poppins-Regular',
  },
  forgotPassword: {
    color: '#FE8400',
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-end',
    paddingVertical: 5,
  },
  newUserContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  newUserText: {
    color: COLOR.primaryForeground,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  newUserPress: {
    color: COLOR.highlightColor,
  },
});
