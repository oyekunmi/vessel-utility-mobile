import React from 'react';
import {StyleSheet} from 'react-native';
import Button from './button';
import PropTypes from 'prop-types';
import constants from './../../constants';

const WhiteButton = (props) => {
  return (
    <Button
      onPress={props.onPress}
      title={props.title}
      backColor="#FFFFFF"
      color={constants.PRIMARY_COLOR}
    />
  );
}

WhiteButton.propTypes = ({
  onPress: PropTypes.func.isRequired,
});

export default WhiteButton;