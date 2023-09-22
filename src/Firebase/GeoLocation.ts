import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoding';
import { GOOGLE_MAP_API_KEY } from '../config/FirebaseScreats';

Geocoder.init(GOOGLE_MAP_API_KEY);

export interface dropDownMenuType {
    name : string,
    codename : string,
}

export const getCurrentLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 6000,
      });
      console.log('location ', location);
      return location;
    } catch {
      console.log('error');
    }
};

export const getAddress = async (
    callback: (text : string) => void,
  ) => {
    const location = await getCurrentLocation();
    if (location?.latitude && location.longitude) {
      const lat = location.latitude;
      const long = location.longitude;
      Geocoder.from(lat, long)
        .then(addressLocation => {
          callback(addressLocation['results'][0].formatted_address)
        })
        .catch(error => {
          console.log('error occured on fethcing address ', error);
        });
    }
};

