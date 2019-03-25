import React from 'react';
import {StyleSheet} from 'react-native';
import Button from './button';
import PropTypes from 'prop-types';
import constants from './../../constants';

const PrimaryButton = (props) => {
  return (
    <Button
      onPress={props.onPress}
      title={props.title}
      backColor={constants.PRIMARY_COLOR}
      color={"#FFFFFF"}
    />
  );
}

PrimaryButton.propTypes = ({
  onPress: PropTypes.func.isRequired,
});

export default PrimaryButton;