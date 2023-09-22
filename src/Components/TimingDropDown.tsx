import React, {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dropdown} from 'react-native-element-dropdown';
import {COLOR} from '../config/constants';
import ClockIcon from '../assets/Icons/Clock';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface dataProps {
  label: string;
  value: string;
}

interface Props {
  value: string | null;
  iconName?: () => JSX.Element;
  placeholder: string;
  setValue: (value: any) => void;
  disable?: boolean;
  containerStyle?: ViewStyle;
  data: dataProps[];
  type: 'time' | 'dob';
}

const DropdownComponent: React.FC<Props> = ({
  value,
  setValue,
  placeholder,
  disable = false,
  containerStyle,
  data,
  type,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  // let data = [
  //   {label: 'Forenoon', value: 'forenoon'},
  //   {label: 'Afternoon', value: 'afternoon'},
  // ];
  const leftIconn = () => {
    if (type === 'time')
      return <ClockIcon width={30} height={30} style={{paddingRight: 40}} />;
    else
      return (
        <MaterialCommunityIcons name={'human-male'} size={30} color={'black'} />
      );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Dropdown
        disable={disable}
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        selectedTextProps={{numberOfLines: 1}}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        activeColor={'rgba(126, 124, 124, 0.46)'}
        placeholder={!isFocus ? placeholder : '.....'}
        value={value}
        containerStyle={styles.containerStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={leftIconn}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 3,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  containerStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  itemContainerStyle: {
    backgroundColor: COLOR.DropDownContainerClr,
    color: COLOR.onTextColor,
  },
  itemTextStyle: {
    color: COLOR.onTextColor,
  },
  dropdown: {
    height: 40,
  },
  icon: {
    marginRight: 15,
    marginLeft: 8,
  },
  placeholderStyle: {
    color: COLOR.onTextColor,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  selectedTextStyle: {
    color: COLOR.onTextColor,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
