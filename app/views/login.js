import React from 'react';
import { StyleSheet, Text, View , Dimensions, ImageBackground, KeyboardAvoidingView} from 'react-native';
import Logo from '../components/logo'; 
import constants from './../constants';
import PrimaryButton from '../components/buttons/primary-button';
import GeneralInput from '../components/general-input';

const background = require("../../assets/login-bg.png");
const { width, height } = Dimensions.get("window");

// const Landing = (props) => {
class LandingScreen extends React.Component{

  static navigationOptions = {
    title: 'Login',
  };

  render(){
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground 
        source={background}  
        style={styles.landing} 
        blurRadius={0.2} 
        resizeMode="stretch"> 
      
      <KeyboardAvoidingView
        behaviour="padding"
        style={styles.loginContainer}
      >

        <Logo 
          color={'#FFFFFF'} 
          size={constants.LANDING_LOGO_SIZE} 
          label={constants.APP_NAME} 
          labelSize={constants.LANDING_LOGO_LABEL_SIZE}  />

        <View style={styles.loginContent}>
          <GeneralInput placeholder="Enter your code" textAlign={'center'} />
          <View style={styles.loginButton}>
            <PrimaryButton onPress={() => navigate('Home')} title="LOGIN" />
          </View>
        </View>

      </KeyboardAvoidingView>

      </ImageBackground>
    );
  }

} 

const styles = StyleSheet.create({
  landing:{
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    backgroundColor: constants.PRIMARY_COLOR,
    // opacity: 0.5
  },
  loginContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width,
    height,
  },
  loginContent:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    // backgroundColor: 'red'
  },
  loginButton:{
    width: '100%',
    marginTop: 30,
  }
});

export default LandingScreen;
