import {
  DimensionValue,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR} from '../config/constants';

interface ButtonInterface {
  text: string;
  onPress?: () => void;
  height?: DimensionValue | number;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  style?: ViewStyle;
  gradientStyle?: ViewStyle;
  textStyle?: ViewStyle;
}

const CustomButtom: React.FC<ButtonInterface> = ({
  text,
  onPress,
  height = 40,
  leftIcon,
  rightIcon,
  style,
  gradientStyle,
  textStyle,
}) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <LinearGradient
        colors={COLOR.primaryButtonClr}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={[styles.container, {height: height}, gradientStyle]}>
        <Text style={[styles.btnText, textStyle]}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default CustomButtom;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  btnText: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 16,
    paddingTop: 5,
  },
});
