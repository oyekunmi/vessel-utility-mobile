import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import certificateAPI from '../api/certificate';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";
import constants from '../constants';
import moment from 'moment';

class HealthyCertificatesScreen extends React.Component{
  render(){
    const certs = certificateAPI.certificates.filter(c=>{
      const three_months_time = moment().add(3, 'month')
      return moment(c.dateOfExpiry).isAfter(three_months_time);
    });
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