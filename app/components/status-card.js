import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import constants from '../constants';

const StatusCard = (props) => {
  
  const styles = StyleSheet.create({
    container: {
      flex: props.size,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: constants.PRIMARY_COLOR,
      height: props.height,
      
    },
    text:{
      fontSize: 18,
      color: '#FFFFFF',

    },
    textValue: {
      fontSize: 38,
      color: '#FFFFFF',
      fontWeight: 'bold'
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textValue}>{props.value}</Text>
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
};
 
export default StatusCard;