import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";
import constants from '../constants';
import CertificatesService from '../services/certificates';

class HealthyCertificatesScreen extends React.Component{
  render(){
    const certs = CertificatesService.getHealthyCertificates();
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={certs}
        renderItem={
          ({item}) => 
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