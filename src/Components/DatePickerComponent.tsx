import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import CalenderIcon from '../assets/Icons/Calender';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  selectedDate: Date;
  setDate: (currentDate: any) => void;
  style?: ViewStyle;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({
  selectedDate,
  setDate,
  style,
  //   onChange,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  return (
    <View>
      <Pressable
        style={[styles.dateSelecterStyle, style]}
        onPress={() => setShowDatePicker(true)}>
        <CalenderIcon height={30} width={25} style={styles.iconStyle} />
        <Text style={styles.dateTextStyle}>
          Date :{' ' + selectedDate.toDateString()}
        </Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
  dateTextStyle: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  iconStyle: {
    paddingHorizontal: 20,
  },
  dateSelecterStyle: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
  },
});
