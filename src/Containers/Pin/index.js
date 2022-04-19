import React, {useState, useCallback, useRef} from 'react';
import {Alert, View, Text, StyleSheet} from 'react-native';
import Button from '../../Components/Button';
import PinComponent from '../../Components/Pin';

const mockPassword = {
  cell_1: {id: '1', value: '', inputRef: React.createRef()},
  cell_2: {id: '2', value: '', inputRef: React.createRef()},
  cell_3: {id: '3', value: '', inputRef: React.createRef()},
  cell_4: {id: '4', value: '', inputRef: React.createRef()},
};

/**
 * @TODO
 * Implement mock as an array to make PinComponent dynamic
 */
// const mockPassword = [
//   {id: '1', value: '', inputRef: React.createRef()},
//   {id: '2',value: '', inputRef: React.createRef()},
//   {id: '3',value: '', inputRef: React.createRef()},
//   {id: '4',value: '', inputRef: React.createRef()},
// ];

const Pin = () => {
  const [password, setPassword] = useState(mockPassword);

  const handleChangeDigit = useCallback(
    (value, passwordIndex) => {
      setPassword({
        ...password,
        [passwordIndex]: {
          ...password[passwordIndex],
          value,
        },
      });

      /**
       * @TODO
       * Implement setPassword with map to make PinComponent dynamic
       */
      // const _password = [...password].map((input, index) => {
      //   return index === passwordIndex ? { ...input, value } : input
      // })
      // setPassword(_password)

      if (value !== '') {
        const nextInput = getNextInput(passwordIndex);
        if (nextInput) {
          nextInput.current.focus();
        }
      }

      if (value === '') {
        const prevInput = getPrevInput(passwordIndex);
        if (prevInput) {
          prevInput.current.focus();
        }
      }
    },
    [password],
  );

  getNextInput = passwordKey => {
    const [_, currentCellIndex] = passwordKey.split('_');
    const nextCellIndex = parseInt(currentCellIndex) + 1;

    if (password[`cell_${nextCellIndex}`]) {
      return password[`cell_${nextCellIndex}`].inputRef;
    }

    return null;
  };

  getPrevInput = passwordKey => {
    const [_, currentCellIndex] = passwordKey.split('_');
    const prevCellIndex = parseInt(currentCellIndex) - 1;

    if (password[`cell_${prevCellIndex}`]) {
      return password[`cell_${prevCellIndex}`].inputRef;
    }

    return null;
  };

  const validate = () => {
    const {cell_1, cell_2, cell_3, cell_4} = password;
    return (
      cell_1.value !== '' &&
      cell_2.value !== '' &&
      cell_3.value !== '' &&
      cell_4.value !== ''
    );
  };

  const handleNext = () => {
    if (!validate()) {
      Alert.alert('Please enter all digits');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Enter your new Pin</Text>
        <PinComponent data={password} onChangeDigit={handleChangeDigit} />
      </View>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 5,
    paddingBottom: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
});

export default Pin;
