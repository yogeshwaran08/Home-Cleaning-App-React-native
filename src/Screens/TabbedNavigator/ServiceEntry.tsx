import {StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackParamList, ScreenProps} from '../../Navigation/ScreenTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {COLOR} from '../../config/constants';
import TitleText from '../../Components/TitleText';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalenderIcon from '../../assets/Icons/Calender';
import {RadioButton} from 'react-native-paper';
import CustomButtom from '../../Components/CustomButtom';
import DropdownComponent from '../../Components/TimingDropDown';
import {ScrollView} from 'react-native-gesture-handler';

type ServiceEntryProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ServiceEntry'>;
  route: RouteProp<RootStackParamList, 'ServiceEntry'>;
};

const ServiceData = {
  HomeService: {
    title: 'Home Service',
    img: require('../../assets/Imgs/home-cleaning-common.png'),
  },
  PestControl: {
    title: 'Pest Control',
    img: require('../../assets/Imgs/pest-control-common.png'),
  },
  Painting: {
    title: 'Painting and Renovation',
    img: require('../../assets/Imgs/painting.png'),
  },
  Other: {
    title: 'Other Service',
    img: require('../../assets/Imgs/other-service-common.png'),
  },
  Gardening: {
    title: 'Gardening',
    img: require('../../assets/Imgs/garden-common.png'),
  },
};

const ServiceEntry: React.FC<ServiceEntryProps> = ({navigation, route}) => {
  const scrnName = route.params.type;
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Forenoon');

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: props => (
        <TitleText scrnName={ServiceData[scrnName].title} />
      ),
    });
  });
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={{width: 300, height: 300, alignSelf: 'center'}}>
          <Image
            source={ServiceData[scrnName].img}
            width={100}
            height={200}
            resizeMethod="resize"
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{justifyContent: 'center', height: '40%'}}>
          <View style={styles.timeContainer}>
            <DropdownComponent
              placeholder="Select time"
              value={selectedOption}
              setValue={setSelectedOption}
              containerStyle={styles.dropDownStyle}
            />
          </View>
          <Pressable
            style={styles.dateSelecterStyle}
            onPress={() => setShowDatePicker(true)}>
            <CalenderIcon height={30} width={30} style={styles.iconStyle} />
            <Text style={styles.dateTextStyle}>
              Date :{' ' + date.toDateString()}
            </Text>
          </Pressable>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <CustomButtom
            text="Book now!"
            style={{width: 150, alignSelf: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};

export default ServiceEntry;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: COLOR.backgroundColor,
    flex: 1,
    paddingTop: 20,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    gap: 50,
    alignItems: 'center',
  },
  iconStyle: {
    paddingHorizontal: 20,
  },
  dateSelecterStyle: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    height: 45,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    position: 'relative',
    marginBottom: 30,
  },
  dateTextStyle: {
    color: COLOR.onTextColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    paddingTop: 5,
  },
  timeText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'center',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionStyle: {
    color: COLOR.primaryForeground,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  dropDownStyle: {
    width: '100%',
    // height: 30,
    borderRadius: 30,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
