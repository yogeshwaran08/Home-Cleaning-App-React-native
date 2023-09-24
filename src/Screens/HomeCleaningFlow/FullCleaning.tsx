import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenProps} from '../../Navigation/ScreenTypes';
import TitleText from '../../Components/TitleText';
import DropdownComponent, {dataProps} from '../../Components/TimingDropDown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePickerComponent from '../../Components/DatePickerComponent';
import ClockIcon from '../../assets/Icons/Clock';
import CustomButtom from '../../Components/CustomButtom';
import {useToast} from 'react-native-toast-notifications';
import {getData, setData} from '../../Firebase/Crud';
import {useAuth} from '../../CustomContext/AuthContext';
import {firebase} from '@react-native-firebase/database';
import {dbUrl} from '../../config/constants';

type FullCleaningProps = ScreenProps<'FullCleaning'>;

const FullCleaning: React.FC<FullCleaningProps> = ({navigation}) => {
  const [homeType, setHomeType] = useState<string | null>(null);
  const [homeSize, setHomeSize] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slot, setSlot] = useState<string | null>(null);
  const [user, initializing] = useAuth();
  const toast = useToast();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: props => <TitleText scrnName="Full Cleaning" />,
    });
  }, []);

  const notify = (msg: string, type: string) => {
    toast.show(msg, {
      type: type,
      placement: 'top',
      duration: 4000,
      animationType: 'slide-in',
    });
  };

  const homeTypes: dataProps[] = [
    {label: 'Furnished home', value: 'furnishedHome'},
    {label: 'Unfurnished Home', value: 'unFurnishedHome'},
    {label: 'Individual Home', value: 'Individual Home'},
  ];

  const homeSizes: dataProps[] = [
    {label: '1 BHK', value: '1'},
    {label: '2 BHK', value: '2'},
    {label: '3 BHK', value: '3'},
    {label: '4 BHK', value: '4'},
    {label: '5 BHK', value: '5'},
    {label: 'other', value: '0'},
  ];

  const slots: dataProps[] = [
    {label: 'Forenoon', value: 'forenooon'},
    {label: 'Afternoon', value: 'afternoon'},
  ];

  const handleBook = async () => {
    if (!homeType || homeType === null) {
      notify('Please select the home type', 'warning');
    } else if (!homeSize || homeSize === null) {
      notify('Please select the home size', 'warning');
    } else if (!selectedDate) {
      notify('Please select a valid date', 'warning');
    } else if (!slot || slot === null) {
      notify('Please select a valid slot', 'warning');
    } else {
      const location = await getData(`${user?.uid}/location`);
      const data = {
        bookingTime: new Date().getTime(),
        serviceTime: selectedDate,
        location: location,
        status: 'incomplete',
        preferedVisitingTime: slot,
        homeType: homeType,
        homeSize: homeSize,
      };
      const db = firebase.app().database(dbUrl);
      db.ref(`/${user?.uid}/Bookings`).push(data);
      navigation.navigate('SucessScreen');
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <DropdownComponent
          placeholder="Select Home type"
          value={homeType}
          setValue={val => {
            setHomeType(val);
          }}
          containerStyle={styles.dropDownStyle}
          data={homeTypes}
          leftIcon={() => (
            <MaterialCommunityIcons
              name={'table-furniture'}
              size={30}
              color={'black'}
              style={{paddingHorizontal: 10}}
            />
          )}
        />
        <DropdownComponent
          placeholder="Home Size"
          value={homeSize}
          setValue={val => {
            setHomeSize(val);
          }}
          containerStyle={styles.dropDownStyle}
          data={homeSizes}
          leftIcon={() => (
            <MaterialCommunityIcons
              name={'home-switch'}
              size={30}
              color={'black'}
              style={{paddingHorizontal: 10}}
            />
          )}
        />
        <DatePickerComponent
          selectedDate={selectedDate}
          setDate={date => setSelectedDate(date)}
          style={styles.dropDownStyle}
        />

        <DropdownComponent
          placeholder="Select Time"
          value={slot}
          setValue={val => {
            setSlot(val);
          }}
          containerStyle={styles.dropDownStyle}
          data={slots}
          leftIcon={() => (
            <ClockIcon height={30} width={30} style={{paddingHorizontal: 25}} />
          )}
        />
        <CustomButtom
          text="Book now"
          style={styles.dropDownStyle}
          onPress={handleBook}
        />
      </View>
    </View>
  );
};

export default FullCleaning;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  dropDownStyle: {
    marginVertical: 10,
    borderRadius: 60,
  },
});
