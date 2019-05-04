import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";
import constants from '../constants';
import CertificatesService from '../services/certificates';
import { ActivityIndicator } from 'react-native-paper';

class HealthyCertificatesScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      certificates: [],
      loaded: false
    }

  }
  async componentDidMount(){
    const certs = await CertificatesService.getHealthyCertificates();
    this.setState({
      certificates: certs,
      loaded: true
    })
  }

  render(){
    if(!this.state.loaded){
      return (
       <ActivityIndicator size="large" style={{flex:1}} />
      )
    }
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={this.state.certificates}
        renderItem={
          (item) => 
            <CertificateTeaserCard status={constants.APP_HEALTHY_INDICATOR} certificate={item} />
        }
      />
    )
  }

}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 20,
  }
});

export default HealthyCertificatesScreen;