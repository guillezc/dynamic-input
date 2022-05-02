import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import PinInput from '../PinInput';

const Pin = ({data, onChangeDigit}) => {
  return (
    <View style={styles.container}>
      {data.map(input => {
        return (
          <PinInput
            key={input.id}
            value={input.value}
            inputRef={input.inputRef}
            onChangeText={value => onChangeDigit(value, input.id)}
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
  data: [],
};

Pin.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      inputRef: PropTypes.object,
    }),
  ),
  onChangeDigit: PropTypes.func.isRequired,
};

export default Pin;
