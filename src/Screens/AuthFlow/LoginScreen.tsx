import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../config/constants';
import InputBox from '../../Components/InputBox';
import HomeIcon from '../../assets/Icons/Home';
import LockIcon from '../../assets/Icons/Lock';
import CustomButtom from '../../Components/CustomButtom';
import {Image} from 'react-native';
import {ScreenProps} from '../../Navigation/ScreenTypes';
import {useToast} from 'react-native-toast-notifications';
import {StackActions} from '@react-navigation/native';
import {loginWithEmail, onGoogleButtonPress} from '../../Firebase/Firebase';
import {useAuth} from '../../CustomContext/AuthContext';
import LoadingModel from './Loading';

type LoginScreenProps = ScreenProps<'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [user, initializing] = useAuth();

  useEffect(() => {
    if (user && initializing === false) {
      navigation.dispatch(StackActions.replace('MainNavigator'));
      setIsLoading(false);
    } else if (!user && initializing === true) {
      setIsLoading(true);
    } else if (!user && initializing === false) {
      setIsLoading(false);
    }
  }, [initializing]);

  const notify = (msg: string, type: string) => {
    toast.show(msg, {
      type: type,
      placement: 'top',
      duration: 4000,
      animationType: 'slide-in',
    });
  };

  const handleLogin = () => {
    if (username && password)
      loginWithEmail(
        username,
        password,
        () => {
          notify('Login Success', 'success');
          navigation.dispatch(StackActions.replace('AuthLoadingScreen'));
        },
        error => {
          if (error.code === 'auth/invalid-login') {
            notify('Invalid username/password', 'danger');
          } else if (error.code === 'auth/invalid-email') {
            notify('Invalid email', 'warning');
          } else {
            notify('Error occured', 'warning');
          }
        },
      );
    else
      toast.show('Please fill all fields', {
        type: 'warning',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
  };

  const hadleOAuth = () => {
    onGoogleButtonPress()
      .then(userInfo => {
        console.log('Signed in with Google!');
        toast.show('Login Success!', {
          type: 'success',
          duration: 3000,
          placement: 'top',
        });
        console.log();
        if (!userInfo.additionalUserInfo?.isNewUser)
          navigation.dispatch(StackActions.replace('AuthLoadingScreen'));
        else {
          console.log('creating new user');
          navigation.dispatch(StackActions.replace('CollectUserData'));
        }
      })
      .catch(error => {
        console.log(error);
        let message = 'Error on logging in with google';
        toast.show(message, {
          type: 'danger',
          duration: 3000,
          placement: 'top',
        });
      });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.subHeader}>Login to your Account</Text>
          </View>

          <View>
            <InputBox
              text={username}
              onChange={uname => setUsername(uname)}
              placeholder="Email"
              leftIcon={<HomeIcon height={32} width={32} />}
              style={{marginVertical: 5}}
            />
            <InputBox
              isPassword={true}
              text={password}
              onChange={pword => setPassword(pword)}
              placeholder="Password"
              leftIcon={<LockIcon height={32} width={32} />}
              style={{marginVertical: 5}}
            />
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </Pressable>
          <CustomButtom
            text="Login"
            style={{marginTop: 10}}
            onPress={() => handleLogin()}
          />
          <View style={styles.newUserContainer}>
            <Text style={styles.newUserText}>New to app?</Text>
            <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.newUserPress}>Create New User</Text>
            </Pressable>
          </View>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              },
            ]}>
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
            <View>
              <Text
                style={{
                  width: 50,
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Poppins-Regular',
                }}>
                OR
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
          </View>
          <Pressable onPress={() => hadleOAuth()}>
            <View style={styles.oauthBtnContainer}>
              <Image
                source={require('../../assets/Imgs/google-logo.png')}
                style={styles.btnImg}
              />
              <Text style={styles.btnText}>Continue with google</Text>
            </View>
          </Pressable>
        </View>
        <LoadingModel visible={isLoading} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
    color: COLOR.highlightColor,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-end',
    paddingVertical: 5,
  },
  newUserContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
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
  oauthBtnContainer: {
    backgroundColor: '#4081B0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  btnImg: {
    height: 28,
    width: 28,
  },
});
