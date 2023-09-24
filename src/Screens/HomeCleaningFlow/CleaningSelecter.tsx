import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ServiceCard from '../../Components/ServiceCard';
import {ScreenProps} from '../../Navigation/ScreenTypes';

type CleaningServiceProps = ScreenProps<'CleaningSelecter'>;

const CleaningSelecter: React.FC<CleaningServiceProps> = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <ServiceCard
          title="Full Home Cleaning"
          onPress={() => {
            navigation.navigate('FullCleaning');
          }}
          style={styles.card}
        />
        <ServiceCard
          title="Partial Home Cleaning"
          onPress={() => {
            () => {
              navigation.navigate('PartialCleaning');
            };
          }}
          style={styles.card}
        />
        <ServiceCard
          title="Regular Home Cleaning"
          onPress={() => {}}
          style={styles.card}
        />
        <ServiceCard
          title="Hourly Cleaning"
          onPress={() => {}}
          style={styles.card}
        />
      </View>
    </View>
  );
};

export default CleaningSelecter;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    marginVertical: 5,
  },
});
