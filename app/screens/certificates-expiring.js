import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import certificateAPI from '../api/certificate';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";
import constants from '../constants';
import moment from 'moment';

class ExpiringCertificatesScreen extends React.Component {

  render(){
    let certs = certificateAPI.certificates.filter(c=>{
      let diff =  moment(c.dateOfExpiry).diff(moment(), 'months');
      return diff >= 0 && diff <= 3; 
    });
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={certs}
        renderItem={
          ({item}) => 
            <CertificateTeaserCard status={constants.APP_EXPIRING_INDICATOR} certificate={item} />
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

export default ExpiringCertificatesScreen;