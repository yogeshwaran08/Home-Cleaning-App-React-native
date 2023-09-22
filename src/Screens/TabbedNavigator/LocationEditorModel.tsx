import React, {useEffect, useState} from 'react';
import {View, Text, Modal, StyleSheet, Pressable} from 'react-native';
import CustomButtom from '../../Components/CustomButtom';
import {COLOR} from '../../config/constants';
import InputBox from '../../Components/InputBox';
import Entypo from 'react-native-vector-icons/Entypo';
import {getAddress} from '../../Firebase/GeoLocation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface ConfirmDialogProps {
  visible: boolean;
  onConfirm: (loc: string | undefined) => void;
  onCancel: () => void;
}

const LocationEditorModel: React.FC<ConfirmDialogProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {});
  const [loc, setLoc] = useState<string | undefined>();

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.header}>Change the location </Text>
          </View>
          <InputBox
            text={loc}
            onChange={text => setLoc(text)}
            placeholder="Location"
            leftIcon={<Entypo name="location-pin" size={25} color={'black'} />}
            multiline={true}
            rightIcon={
              <Pressable
                onPress={() =>
                  getAddress(address => {
                    setLoc(address);
                  })
                }>
                <FontAwesome6
                  name={'location-crosshairs'}
                  size={25}
                  color={'black'}
                />
              </Pressable>
            }
          />
          <View style={styles.buttonContainer}>
            <CustomButtom
              text={'Cancel'}
              style={{width: 90}}
              onPress={onCancel}
            />
            <CustomButtom
              text={'Confirm'}
              style={{width: 90}}
              onPress={() => onConfirm(loc)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LocationEditorModel;

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
    // height: 236,
    minHeight: 236,
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
    paddingBottom: 20,
  },
  msg: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
