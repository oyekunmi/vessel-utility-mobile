import React from 'react';
import { View, Text } from "react-native";
import constants from '../constants';

// const 
const styles = ({
  background: {
    backgroundColor: constants.APP_BACKGROUND_COLOR,
    flex: 1,
  }
});
const HomeScreen  = (props) => {
  const {navigate} = props.navigation;

  return (
    <View style={styles.background}>
      <Text>Home</Text>
    </View>
  );
};


 
export default HomeScreen;