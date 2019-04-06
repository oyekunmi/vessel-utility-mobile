import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
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
    <TouchableOpacity onPress={props.onPress} style={styles.container} activeOpacity={0.8}>
      <Text style={styles.textValue}>{props.value}</Text>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};
 
export default StatusCard;