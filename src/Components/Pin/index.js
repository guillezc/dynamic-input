import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import PinInput from '../PinInput';

const Pin = ({inputs, onChangeDigit}) => {
  const handleChangeDigit = (value, inputIndex, inputId) => {
    if (value !== '') {
      const nextInput = getNextInput(inputIndex);
      if (nextInput) {
        nextInput.current.focus();
      }
    }

    if (value === '') {
      const prevInput = getPrevInput(inputIndex);
      if (prevInput) {
        prevInput.current.focus();
      }
    }

    onChangeDigit(value, inputId);
  };

  const getNextInput = inputIndex => {
    const nextInputIndex = parseInt(inputIndex) + 1;

    if (inputs[nextInputIndex]) {
      return inputs[nextInputIndex].inputRef;
    }

    return null;
  };

  const getPrevInput = inputIndex => {
    const prevInputIndex = parseInt(inputIndex) - 1;

    if (inputs[prevInputIndex]) {
      return inputs[prevInputIndex].inputRef;
    }

    return null;
  };

  return (
    <View style={styles.container}>
      {inputs.map((input, index) => {
        return (
          <PinInput
            key={input.id}
            value={input.value}
            inputRef={input.inputRef}
            onChangeText={value => handleChangeDigit(value, index, input.id)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#000',
  },
});

Pin.defaultProps = {
  inputs: [],
};

Pin.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      inputRef: PropTypes.object,
    }),
  ),
  onChangeDigit: PropTypes.func.isRequired,
};

export default Pin;
