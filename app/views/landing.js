import React from 'react';
import { StyleSheet, Text, View , Dimensions, ImageBackground, ActivityIndicator} from 'react-native';
import Logo from '../components/logo'; 
import constants from './../constants';
import WhiteButton from '../components/buttons/white-button';
import TransparentButton from '../components/buttons/transparent-button';
import auth from './../api/auth';

const background = require("../../assets/landing-bg.png");
const { width, height } = Dimensions.get("window");

// const Landing = (props) => {
class LandingScreen extends React.Component{
  
  static navigationOptions = {
    title: 'Landing',
  };

  state = {
    show: false
  };

  async componentDidMount(){
    let firstTime = await auth.first();
    let authenticated = await auth.check();

    if(firstTime) this.setState({show:true});
    else if(authenticated) this.props.navigation.navigate('Home');
    else this.props.navigation.navigate('Login');

  }

  render(){ 
    return this.state.show ? this.renderPage() : this.renderLoading();
  }

  renderLoading(){
    return (
      <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  renderPage(){
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={background} style={styles.landing} resizeMode="stretch"> 
        <View style={styles.landingContent}>
          <Logo 
            color={constants.PRIMARY_COLOR} 
            size={constants.LANDING_LOGO_SIZE} 
            label={constants.APP_NAME} 
            labelSize={constants.LANDING_LOGO_LABEL_SIZE}  />
        </View>
        <View style={styles.landingContent}>
          <WhiteButton onPress={ ()=> { alert("A") } } title="GET STARTED" />
          <TransparentButton onPress={() => navigate('Login')} title="LOGIN" />
        </View>
      </ImageBackground>
    );
  }

} 

const styles = StyleSheet.create({
  landing:{
    flex: 1,
    alignItems: 'center'
  },
  landingBackground: {
    width,
    height,
  },
  landingContent:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%'
  },
  loading:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LandingScreen;
