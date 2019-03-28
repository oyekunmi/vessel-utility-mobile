import React from 'react';
import { 
  StyleSheet, View, ImageBackground, KeyboardAvoidingView,
  StatusBar, 
} from 'react-native';
import Logo from '../components/logo'; 
import constants from './../constants';
import PrimaryButton from '../components/buttons/primary-button';
import GeneralInput from '../components/general-input';

const background = require("../../assets/login-bg.png");

// const Landing = (props) => {
class LoginScreen extends React.Component{

  static navigationOptions = {
    title: 'Login'
  };

  constructor(props){
    super(props);
    this.state={
      code: '',
      loading: false,
      error: false,
      user: null
    };
  }

  findUser = (code) => {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({ code: code, name: "Captain"});
      }, 5000);
    });
  }

  onCodeUpdated = code => {
    if(!code) return;
    this.setState({code: code});
  }

  handleLogin = () => {
    const {code} = this.state;
    if(!code) return;

    try{
      this.setState({loading: true}, async() => {
        const user = await this.findUser(code);
        console.log(user)

        this.setState({
          loading: false,
          error: false,
          user: user
        });

        this.props.navigation.navigate('Home');

      });
    }catch(e){
      this.setState({
        loading: false,
        error: true,
        user: null
      });
        
    }
   
  }

  render(){
    const {loading, error} = this.state;
    return (
      
      <KeyboardAvoidingView
        behaviour="padding"
        style={styles.container}
      >
        
        <StatusBar barStyle="light-content" />
        <ImageBackground 
          source={background}  
          style={styles.backgroundContainer} 
          // blurRadius={0.2} 
          imageStyle={styles.backgroundImage}
          >
          <Logo 
            color={'#FFFFFF'} 
            size={constants.LANDING_LOGO_SIZE} 
            label={constants.APP_NAME} 
            labelSize={constants.LANDING_LOGO_LABEL_SIZE}  />

          <View style={styles.loginContent}>
            <GeneralInput 
              placeholder="Enter your code" 
              textAlign={'center'} 
              onSubmitEditing={this.onCodeUpdated} 
              onTextChanged={this.onCodeUpdated}
              />
            <View style={styles.loginButton}>
              <PrimaryButton onPress={this.handleLogin} title="LOGIN" disabled={loading} loading={loading} />
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

export default LoginScreen;
