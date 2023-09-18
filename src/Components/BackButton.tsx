import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" color={'white'} size={35} />
      </Pressable>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
