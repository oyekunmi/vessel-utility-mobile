import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import constants from '../constants';

const Avatar = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: constants.AVATER_SIZE,
      height: constants.AVATER_SIZE,
      borderRadius: constants.AVATER_SIZE/2,
      backgroundColor: constants.PRIMARY_COLOR,
      // justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      color: 'white'
    }
  })

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Ionicons name="md-person" size={constants.AVATER_SIZE-8} style={[styles.image, props.imageStyle]}  />
    </View>
  )
};

export default Avatar;