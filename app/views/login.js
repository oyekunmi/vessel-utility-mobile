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
      
      <KeyboardAvoidingView
        behaviour="padding"
        style={styles.container}
      >
        <ImageBackground 
          source={background}  
          style={styles.backgroundContainer} 
          // blurRadius={0.2} 
          // resizeMode="stretch"
          imageStyle={styles.backgroundImage}
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


        </ImageBackground> 

      </KeyboardAvoidingView>
    );
  }

} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  backgroundContainer:{
    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: 'rgba(70, 132, 254, .8)',
  },
  loginContent:{
    flex: 0.5,
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  loginButton:{
    marginTop: 30,
  }
});

export default LandingScreen;
