import React from 'react';
import {StatusBar} from 'react-native';

import { 
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation"; 
import { Ionicons, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import LandingScreen from './app/views/landing';
import LoginScreen from './app/views/login';
import HomeScreen from './app/views/home';
import CertificatesScreen from './app/views/certificates';
import VesselsScreen from './app/views/vessels';
import constants from './app/constants';

StatusBar.setHidden(true)

const LandingStack = createStackNavigator(
  { Landing: LandingScreen, Login: LoginScreen }, 
  { headerMode: 'none'}
);
const AppStack = createBottomTabNavigator(
  { 
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        title: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="home" size={24} color={tintColor} />
        )
      }
    },
    Certificates: {
      screen: CertificatesScreen,
      navigationOptions:{
        title: "Certificates", 
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="certificate" size={24} color={tintColor} />
        )
      }
    },
    Vessels:{
      screen: VesselsScreen,
      navigationOptions:{
        title: "Vessels",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-boat" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: constants.PRIMARY_COLOR,
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 14, 
      },
      style: {
        backgroundColor: constants.APP_TAB_BACKGROUND_COLOR,
        verticalPadding: 20
      },
    },
  }
);
const MainNavigator = createSwitchNavigator(
  { 
      Landing: LandingStack,
      App: AppStack
  },
  {
    // mode: 'modal',
    // headerMode: 'none',
  }
); 

const App = createAppContainer(MainNavigator);
export default App;

