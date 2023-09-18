import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLOR} from '../config/constants';

interface ServiceCardProps {
  title: string;
  illustration: JSX.Element;
  style?: ViewStyle;
  onPress: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  illustration,
  style,
  onPress,
}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.left}>
        <Text style={styles.text} numberOfLines={2}>
          {title}
        </Text>
      </View>
      <View style={styles.right}>{illustration}</View>
    </Pressable>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: COLOR.highlightColor,
    borderRadius: 40,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontFamily: 'Lobster-Regular',
    color: 'white',
    fontSize: 20,
  },
  left: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
