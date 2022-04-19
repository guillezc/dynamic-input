import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const PinInput = ({inputRef, value, onChangeText}) => {
  return (
    <TextInput ref={inputRef} style={styles.input} value={value} onChangeText={onChangeText} />
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

export default PinInput;
