import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import TextInput from '../TextInput';

const DynamicInput = ({inputs, onChangeDigit}) => {
  const handleChangeDigit = (value, inputIndex, inputId) => {
    const { digits, mask } = inputs[inputIndex]
    if (value.length === digits) {
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
          <TextInput
            key={input.id}
            keyboardType={input.keyboardType}
            maxLength={input.digits}
            value={input.value}
            inputRef={input.inputRef}
            onChangeText={value => handleChangeDigit(value, index, input.id)}
            validation={input.validation}
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

DynamicInput.defaultProps = {
  inputs: [],
};

DynamicInput.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      digits: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      inputRef: PropTypes.object,
      validation: PropTypes.func,
    }),
  ),
  onChangeDigit: PropTypes.func.isRequired,
};

export default DynamicInput;
