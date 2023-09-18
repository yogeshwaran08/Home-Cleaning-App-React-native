import {StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import HomeIcon from '../assets/Icons/Home';

interface InputBoxProps {
  text: string | undefined;
  onChange: (text?: string) => void;
  placeholder?: string;
  leftIcon?: JSX.Element;
  style?: ViewStyle;
  isPassword?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  text,
  onChange,
  placeholder,
  leftIcon,
  style,
  isPassword,
}) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon}
      <TextInput
        secureTextEntry={isPassword}
        placeholder={placeholder}
        value={text}
        onChangeText={onChange}
        placeholderTextColor={'gray'}
        style={styles.inputBox}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
    gap: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    // width: '100%',
  },
  inputBox: {
    fontFamily: 'Poppins-Regular',
    alignItems: 'center',
    flex: 1,
    textAlign: 'left',
    textAlignVertical: 'bottom',
  },
});
