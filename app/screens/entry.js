import React, { Component } from 'react';
import {StatusBar, ActivityIndicator, View, StyleSheet} from 'react-native';
import auth from '../api/auth';

class EntryScreen extends Component {
  constructor(props){
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    let authenticated = await auth.check();
    if(authenticated) {
      this.props.navigation.navigate('App');
      return;
    }

    let firstTime = await auth.first();
    if(firstTime) {
      this.props.navigation.navigate('Landing');
      return;
    }

    this.props.navigation.navigate('Login');
  };
  
  render() {
    return (
      <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
          <StatusBar barStyle="default" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loading:{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default EntryScreen;