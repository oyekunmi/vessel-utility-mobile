import React from 'react';
import {StyleSheet} from 'react-native';
import Button from './button';
import PropTypes from 'prop-types';
import constants from './../../constants';

const TransparentButton = (props) => {
  return (
    <Button
      onPress={props.onPress}
      title={props.title} 
      backColor="transparent"
      color="#FFFFFF"
      borderWidth={1}
      borderColor="#FFFFFF"
      disabled={props.disabled}

    />
  );
}

TransparentButton.propTypes = ({
  onPress: PropTypes.func.isRequired,
});

export default TransparentButton;