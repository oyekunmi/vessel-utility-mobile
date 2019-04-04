import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import certificateAPI from '../api/certificate';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";
import constants from '../constants';
import moment from 'moment';

class ExpiredCertificatesScreen extends React.Component {
  
  render(){
    const certs = certificateAPI.certificates.filter(c=>{
      return moment(c.dateOfExpiry).isBefore(moment().subtract(1,'days'));
    });
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={certs}
        renderItem={
          ({item}) => 
            <CertificateTeaserCard status={constants.APP_EXPIRED_INDICATOR} certificate={item} />
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

export default ExpiredCertificatesScreen;