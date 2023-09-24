import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {COLOR} from '../../config/constants';
import ServiceCard from '../../Components/ServiceCard';
import {ScreenProps} from '../../Navigation/ScreenTypes';

type HomeProps = ScreenProps<'Home'>;

const Home: React.FC<HomeProps> = ({navigation}) => {
  const HomeServiceImage = () => {
    return (
      <Image
        source={require('../../assets/Imgs/home-cleaning-common.png')}
        resizeMode="center"
        style={{height: 150, width: 150}}
      />
    );
  };
  const PaintingService = () => {
    return (
      <Image
        source={require('../../assets/Imgs/painting.png')}
        resizeMode="center"
        style={{height: 150, width: 150}}
      />
    );
  };
  const GardeningService = () => {
    return (
      <Image
        source={require('../../assets/Imgs/garden-common.png')}
        resizeMode="center"
        style={{height: 130, width: 130, borderRadius: 90}}
      />
    );
  };
  const OtherService = () => {
    return (
      <Image
        source={require('../../assets/Imgs/other-service-common.png')}
        resizeMode="center"
        style={{height: 150, width: 150}}
      />
    );
  };
  const PestControl = () => {
    return (
      <Image
        source={require('../../assets/Imgs/pest-control.png')}
        resizeMode="center"
        style={{height: 120, width: 140}}
      />
    );
  };
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ServiceCard
          title="Home Cleaning Service"
          illustration={HomeServiceImage()}
          style={styles.cardStyle}
          onPress={() => {
            navigation.navigate('HomeCleaningFlow');
          }}
        />
        <ServiceCard
          title="Pest Control"
          illustration={PestControl()}
          style={styles.cardStyle}
          onPress={() => {
            navigation.navigate('ServiceEntry', {type: 'PestControl'});
          }}
        />
        <ServiceCard
          title="Painting and Renovation"
          illustration={PaintingService()}
          style={styles.cardStyle}
          onPress={() => {
            navigation.navigate('ServiceEntry', {type: 'Painting'});
          }}
        />
        <ServiceCard
          title="Gardening and Landscaping Service"
          illustration={GardeningService()}
          style={styles.cardStyle}
          onPress={() => {
            navigation.navigate('ServiceEntry', {type: 'Gardening'});
          }}
        />
        <ServiceCard
          title="Other Services"
          illustration={OtherService()}
          style={styles.cardStyle}
          onPress={() => {
            navigation.navigate('ServiceEntry', {type: 'Other'});
          }}
        />
        <View style={styles.extraSpace} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 10,
    flexGrow: 1,
  },
  cardStyle: {
    marginVertical: 10,
  },
  extraSpace: {
    padding: 40,
  },
});
