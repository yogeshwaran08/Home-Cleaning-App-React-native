import {StackNavigationProp} from '@react-navigation/stack';

interface ServiceEntry {
  type: 'HomeService' | 'PestControl' | 'Painting' | 'Gardening' | 'Other';
}

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  AuthFlow: undefined;
  ForgotPassword: undefined;
  AuthLoadingScreen: undefined;
  CollectUserData: undefined;
  Home: undefined;
  ServiceEntry: ServiceEntry;
  Profile: undefined;
  SucessScreen: undefined;
  //navigaters
  MainNavigator: undefined;
};

export type ScreenProps<RouteName extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
};
