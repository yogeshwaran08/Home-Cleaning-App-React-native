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
import {ScreenProps} from '../../Navigation/ScreenTypes';

type SignUpProps = ScreenProps<'SignUpScreen'>;

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [cnfPassword, setCnfPassword] = useState<string>();

  const handleSignUp = () => {
    navigation.navigate('CollectUserData');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>SignUp</Text>
            <Text style={styles.subHeader}>Create your account here</Text>
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
            <InputBox
              isPassword={true}
              text={cnfPassword}
              onChange={pword => setCnfPassword(pword)}
              placeholder="Confim password"
              leftIcon={<LockIcon height={32} width={32} />}
              style={{marginVertical: 5}}
            />
          </View>
          <CustomButtom
            text="Sign up"
            style={{marginTop: 10}}
            onPress={handleSignUp}
          />
          <View style={styles.newUserContainer}>
            <Text style={styles.newUserText}>Already registred?</Text>
            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.newUserPress}>Login here</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

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
