import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Platform, 
  View, 
  TouchableNativeFeedback, 
  TouchableOpacity, 
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

const Button = (props) => {
  const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  const styles = StyleSheet.create({
    text: {
      textTransform: 'uppercase',
      fontSize: props.fontSize ?  props.fontSize : 15,
      color: props.color,
      fontWeight: 'bold'
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      width: props.width ? props.width : '100%',
      marginBottom: 15,
      height: 60,
      borderRadius: 5,
      backgroundColor: props.backColor,
      borderWidth: props.borderWidth ? props.borderWidth: 0,
      borderColor: props.borderColor ? props.borderColor: 'transparent'
    },

  });
  
  return (
    
    <Touchable
      onPress = {props.onPress}
      background = {Touchable.Ripple('#000000')}
      disabled={props.disabled}
    >
      <View style={styles.button}>

        {!props.loading && (
          <Text 
           style={styles.text}
           disabled={props.disabled}>
             {props.title}
          </Text>
        )}
       {props.loading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
       


      </View>
    </Touchable>

  )

}


Button.propTypes = ({
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  backColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
});

export default Button;