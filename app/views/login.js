import React from 'react';
import { StyleSheet, Text, View , Dimensions, ImageBackground} from 'react-native';
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

        <Logo 
          color={'#FFFFFF'} 
          size={constants.LANDING_LOGO_SIZE} 
          label={constants.APP_NAME} 
          labelSize={constants.LANDING_LOGO_LABEL_SIZE}  />

        <View style={styles.loginContent}>
          <GeneralInput placeholder="Enter your code" textAlign={'center'} />
          <PrimaryButton onPress={ ()=> { alert("A") } } title="LOGIN" />
        </View>
      </ImageBackground>
    );
  }

} 

const styles = StyleSheet.create({
  landing:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: constants.PRIMARY_COLOR,
  },
  landingBackground: {
    width,
    height,
  },
  loginContent:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    // backgroundColor: 'red'
  }
});

export default LandingScreen;
