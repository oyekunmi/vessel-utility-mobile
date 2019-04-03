import React from 'react';
import {StatusBar} from 'react-native';
import { 
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from "react-navigation"; 
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import LandingScreen from './app/screens/landing';
import LoginScreen from './app/screens/login';
import HomeScreen from './app/screens/home';
import VesselsScreen from './app/screens/vessels';
import constants from './app/constants';
import EntryScreen from './app/screens/entry';
import ExpiringCertificatesScreen from './app/screens/certificates-expiring';
import ExpiredCertificatesScreen from './app/screens/certificates-expired';
import HealthyCertificatesScreen from './app/screens/certificates-healthy';
import TabbedHeaderComponent from './app/components/tabbed-header';

StatusBar.setHidden(true)
// auth.logout();

const LandingStack = createStackNavigator(
  { 
    Landing: LandingScreen,
    Login: LoginScreen 
  }, 
  { 
    // headerMode: 'none'
  }
);

const CertificatesTabs= createMaterialTopTabNavigator(
  {
    ExpiringCertificates: {
      screen: ExpiringCertificatesScreen,
      navigationOptions:{
        tabBarLabel: "EXPIRING",
        title: "Example",
      }
    },
    ExpiredCertificates: {
      screen: ExpiredCertificatesScreen,
      navigationOptions:{
        tabBarLabel: "EXPIRED",
        title: "Expired",
      }
    },
    HealthyCertificates: {
      screen: HealthyCertificatesScreen,
      navigationOptions:{
        tabBarLabel: "HEALTHY",
        title: "Healthy",
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: constants.PRIMARY_COLOR,
      inactiveTintColor: "#909090",
      labelStyle:{
        fontWeight: 'bold',
      },
      indicatorStyle: {
        backgroundColor: constants.PRIMARY_COLOR,
      },
      style: {
        backgroundColor: 'transparent',
        borderBottomColor: '#DCDCDC',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        elevation: 0,
      },
    }
  }
);

const CertificatesStack = createStackNavigator(
  {
    certificate: CertificatesTabs,
  },
  {
    defaultNavigationOptions: {
      headerTitle: <TabbedHeaderComponent />,
      headerStyle: {
        paddingTop: 60,
        paddingBottom: 40,
        elevation: 0,
        // backgroundColor: 'red',
      }
    },
  }
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
      screen: CertificatesStack,
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
      activeTintColor: '#FFFFFF',
      inactiveTintColor: "#E0E0E0",
      labelStyle: {
        fontSize: 12,
        // color: "#FFFFFF",
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: constants.PRIMARY_COLOR,
        paddingVertical: 10,
        height: 70,

      },
    }
  }
);

const MainNavigator = createSwitchNavigator(
  { 
    AuthLoading: EntryScreen,
    Landing: LandingStack,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
); 

const App = createAppContainer(MainNavigator);
export default App;

