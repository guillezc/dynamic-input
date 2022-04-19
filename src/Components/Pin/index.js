import React from 'react';
import {View, StyleSheet} from 'react-native';
import PinInput from '../PinInput';

const Pin = ({data, onChangeDigit}) => {
  const {cell_1, cell_2, cell_3, cell_4} = data;
  return (
    <View style={styles.container}>
      {
        /**
         * @TODO
         * Implement map when data being an array to make PinComponent dynamic
         */
      }
      {/* {data.map((input, index) => {
        return (
          <PinInput
            key={input.id}
            value={input.value}
            inputRef={input.inputRef}
            onChangeText={value => onChangeDigit(value, index)}
          />
        )
      })} */}
      <PinInput
        value={cell_1.value}
        inputRef={cell_1.inputRef}
        onChangeText={value => onChangeDigit(value, 'cell_1')}
      />
      <PinInput
        value={cell_2.value}
        inputRef={cell_2.inputRef}
        onChangeText={value => onChangeDigit(value, 'cell_2')}
      />
      <PinInput
        value={cell_3.value}
        inputRef={cell_3.inputRef}
        onChangeText={value => onChangeDigit(value, 'cell_3')}
      />
      <PinInput
        value={cell_4.value}
        inputRef={cell_4.inputRef}
        onChangeText={value => onChangeDigit(value, 'cell_4')}
      />
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

export default Pin;
