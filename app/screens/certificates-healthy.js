import React from 'react';
import {Text, FlatList} from 'react-native';
import certificateAPI from '../api/certificate';
import CertificateTeaserCard from "./../components/certifitcate-teaser-card";
import { ScrollView } from 'react-native-gesture-handler';

const HealthyCertificatesScreen = () => {
  let certs = certificateAPI.certificates;
  // certs = certs.concat(certs.copyWithin(certs.length));
  return (
    <ScrollView style={{flex: 1, paddingTop:20, paddingBottom: 80}}>
    <FlatList
      data={certs}
      renderItem={
        ({item}) => 
          <CertificateTeaserCard certificate={item} />
      }
    />
  </ScrollView>
  )
}

export default HealthyCertificatesScreen;