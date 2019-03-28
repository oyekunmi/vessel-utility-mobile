import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation"; 

import LandingScreen from './app/views/landing';
import LoginScreen from './app/views/login';
import HomeScreen from './app/views/home';

const LandingStack = createStackNavigator(
  { Landing: LandingScreen, Login: LoginScreen }, 
  { headerMode: 'none'}
);
const AppStack = createBottomTabNavigator(
  { Home: HomeScreen }
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

