import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Avatar from './avatar';
import { Constants as ExpoConstants } from 'expo';

const ProfileRow = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Avatar />
      <Text style={styles.profileName}> Hi, {props.profileName} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 10,
  }
});

export default ProfileRow;