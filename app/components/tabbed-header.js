import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import constants from '../constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HeaderComponent = (props) => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>Certificates</Text>
        <MaterialIcons 
          style={styles.addCardIcon}
          name="add-circle"
          onPress={()=>{ this.props.navigation.navigate(this.state.addPage) }} />
      </View>
  );
};

const CertificatesScreen = () => {
  return(
    <ScrollView style={styles.container}>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    // backgroundColor: constants.APP_BACKGROUND_COLOR ,
    flex: 1,
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  containerContent: { 
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    alignItems: 'center',    
  },
  headerText: {
    color: '#909090',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addCardIcon: {
    color: constants.PRIMARY_COLOR,
    fontSize: 28,
    // flex: 0.2,
  },
});

export default HeaderComponent;