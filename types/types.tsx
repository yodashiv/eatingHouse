export type RootStackParamList = {
  Login: undefined;
  Root: undefined;
  NotFound: undefined;
};

export type LoginStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  ResetPasswordScreen: undefined;
}

export type BottomTabParamList = {
  Home: undefined;
  Discovery: undefined;
  Collaborate: undefined;
};

export type HomeParamlist = {
  HomeMapScreen: undefined;
  FullSearchScreen: undefined;
};

export type DiscoveryParamList = {
  TabTwoScreen: undefined;
};

export type CollaborateParamList = {
  TabThreeScreen: undefined;
};

export interface placesItemInterface {
  id: String, 
  name: String, 
  rating: number, 
  vicinity: any, 
  photo_url?: string,
  marker: markerInterface
};

export interface markerInterface {
  latitude: number, 
  longitude: number
}


