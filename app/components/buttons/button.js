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
  const {disabled} = props;

  const styles = StyleSheet.create({
    text: {
      textTransform: 'uppercase',
      fontSize: props.fontSize ?  props.fontSize : 15,
      color: props.color,
      fontWeight: 'bold'
    },
    textDisabled: {
      color: '#a1a1a1',
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
    buttonDisabled: {
      elevation: 0,
      backgroundColor: '#dfdfdf',
    },

  });

  let buttonStyles = [styles.button];
  let textStyles = [styles.text];
  let accessibilityStates = [];

  if (disabled) {
    buttonStyles.push(styles.buttonDisabled);
    textStyles.push(styles.textDisabled);
    accessibilityStates.push('disabled');
  }

  const formattedTitle = props.title.toUpperCase();
  
  return (
    
    <Touchable
      accessibilityStates={accessibilityStates}
      accessibilityRole='button'
      onPress = {props.onPress}
      background = {Touchable.Ripple('#000000')}
      disabled={disabled}
      style={buttonStyles} 
    >
      <View style={styles.button}>

        {!props.loading && (
          <Text 
           style={textStyles}
           disabled={disabled}>
             {formattedTitle}
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