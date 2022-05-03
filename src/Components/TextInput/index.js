import React from 'react';
import {TextInput as TextInputRN, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {COLORS} from '../../Theme'

const INPUT_BASE_WIDTH = 50;

const TextInput = ({
  fullWidth,
  inputRef,
  keyboardType,
  maxLength,
  value,
  validation,
  onChangeText,
}) => {
  const getInputWidth = () => {
    if (maxLength <= 2) {
      return INPUT_BASE_WIDTH;
    }

    if (maxLength <= 7) {
      return INPUT_BASE_WIDTH + maxLength * 5;
    }

    return INPUT_BASE_WIDTH + maxLength * 8;
  };

  return (
    <TextInputRN
      keyboardType={keyboardType}
      ref={inputRef}
      maxLength={maxLength}
      style={[
        styles.input,
        {width: getInputWidth()},
        fullWidth && styles.inputFullWidth,
        validation(value) && {borderColor: COLORS.primary.button},
      ]}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primary.input,
    borderRadius: 3,
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  inputFullWidth: {
    width: 'auto',
    textAlign: 'left',
  },
});

TextInput.defaultProps = {
  fullWidth: false,
  keyboardType: 'default',
  value: '',
  validation: () => null,
};

TextInput.propTypes = {
  fullWidth: PropTypes.bool,
  inputRef: PropTypes.object,
  maxLength: PropTypes.number,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  validation: PropTypes.func,
};

export default TextInput;
