import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../config/constants';

interface TitleTextProps {
  scrnName: string;
}

const TitleText: React.FC<TitleTextProps> = ({scrnName}) => {
  return (
    <View>
      <Text style={styles.title}>{scrnName}</Text>
    </View>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lobster-Regular',
    fontSize: 25,
    color: COLOR.primaryForeground,
  },
});
