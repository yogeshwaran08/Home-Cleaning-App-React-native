import React, {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dropdown} from 'react-native-element-dropdown';
import {COLOR} from '../config/constants';
import ClockIcon from '../assets/Icons/Clock';

interface Props {
  value: string | null;
  iconName?: () => JSX.Element;
  placeholder: string;
  setValue: (value: any) => void;
  disable?: boolean;
  containerStyle?: ViewStyle;
}

const DropdownComponent: React.FC<Props> = ({
  value,
  setValue,
  iconName,
  placeholder,
  disable = false,
  containerStyle,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  let data = [
    {label: 'Forenoon', value: 'forenoon'},
    {label: 'Afternoon', value: 'afternoon'},
  ];

  //@ts-ignore
  data = [{name: placeholder, codename: null}, ...data];

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
        renderLeftIcon={() => (
          <ClockIcon width={30} height={30} style={{paddingRight: 40}} />
        )}
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
