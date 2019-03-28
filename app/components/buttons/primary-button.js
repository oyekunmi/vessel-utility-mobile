import React from 'react';
import {StyleSheet} from 'react-native';
import Button from './button';
import PropTypes from 'prop-types';
import constants from './../../constants';

const PrimaryButton = (props) => {
  return (
    <Button
      onPress={props.onPress}
      title={props.title ? props.title: props.children}
      backColor={constants.PRIMARY_COLOR}
      color={"#FFFFFF"}
      disabled={props.disabled}
      loading={props.loading}
    />
  );
}

PrimaryButton.propTypes = ({
  onPress: PropTypes.func.isRequired,
});

export default PrimaryButton;