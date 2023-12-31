import React, {useEffect, useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import CustomButtom from '../../Components/CustomButtom';
import {COLOR} from '../../config/constants';

interface ConfirmDialogProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModel: React.FC<ConfirmDialogProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {});
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.header}>Confirm Logout?</Text>
          </View>
          <View>
            <Text style={styles.msg}>
              Are you sure you want to clear the session data
            </Text>
          </View>
          <View></View>
          <View style={styles.buttonContainer}>
            <CustomButtom
              text={'Cancel'}
              style={{width: 90}}
              onPress={onCancel}
            />
            <CustomButtom
              text={'Confirm'}
              style={{width: 90}}
              onPress={onConfirm}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModel;

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
    height: 236,
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
  header: {
    color: COLOR.primaryForeground,
    fontFamily: 'Lobster-Regular',
    fontSize: 25,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  msg: {
    color: COLOR.primaryForeground,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
