import React, {Component} from 'react';
import { View, Text, StyleSheet } from "react-native";
import constants from '../constants';
import ProfileRow from '../components/profile-row';
import auth from './../api/auth';
import StatusCard from '../components/status-card';

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
        <ProfileRow style={styles.profileRow} profileName={this.state.profileName} />
        <View style={styles.statusRow}>
          <StatusCard label="Expiring" value="0" size={0.47} />
          <StatusCard label="Expired" value="0" size={0.47} />
        </View>
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
  },
  profileRow: {
    marginVertical: 50,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
 
export default HomeScreen;