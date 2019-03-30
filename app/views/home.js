import React, {Component} from 'react';
import { View, Text, StyleSheet } from "react-native";
import constants from '../constants';
import ProfileRow from '../components/profile-row';
import auth from './../api/auth';

class HomeScreen extends Component {
  constructor(props){
    super(props); 
    this.state = ({
      profileName: ''
    });
  }

  componentDidMount(){
    auth.current().then(x=>{
      this.setState({
        profileName: x.name
      });
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <ProfileRow profileName={this.state.profileName} />
      </View>
    ); 
  }
}

// const 
const styles = StyleSheet.create({
  container: { 
    backgroundColor: constants.APP_BACKGROUND_COLOR ,
    flex: 1,
    paddingHorizontal: 25,
    // alignItems: 'center' 
  }
});
 
export default HomeScreen;