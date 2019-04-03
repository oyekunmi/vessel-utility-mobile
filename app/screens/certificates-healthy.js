import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import certificateAPI from '../api/certificate';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";
import constants from '../constants';

class HealthyCertificatesScreen extends React.Component{
  render(){
    let certs = certificateAPI.certificates;
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