import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const PinInput = ({inputRef, value, onChangeText}) => {
  return (
    <TextInput
      keyboardType="number-pad"
      ref={inputRef}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      // onEndEditing={Keyboard.dismiss}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#1227E2',
    borderRadius: 3,
    color: '#000',
    textAlign: 'center',
  },
});

PinInput.defaultProps = {
  value: '',
};

PinInput.propTypes = {
  inputRef: PropTypes.object,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export const PinInputProps = {}

export default PinInput;
