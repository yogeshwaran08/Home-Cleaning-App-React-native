import React, {useEffect, useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import CustomButtom from '../../Components/CustomButtom';
import {COLOR} from '../../config/constants';
import LottieView from 'lottie-react-native';

interface ConfirmDialogProps {
  visible: boolean;
}

const LoadingModel: React.FC<ConfirmDialogProps> = ({visible}) => {
  useEffect(() => {});
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.header}>Loading Please wait</Text>
          </View>
          <View>
            <LottieView
              source={require('../../assets/animations/round_loading.json')}
              autoPlay
              loop
              style={{height: 200, width: 200}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModel;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLOR.backgroundColor,
    padding: 20,
    borderRadius: 25,
    minheight: 236,
    width: 335,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  header: {
    color: COLOR.primaryForeground,
    fontFamily: 'Lobster-Regular',
    fontSize: 25,
    alignSelf: 'center',
  },
  msg: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
