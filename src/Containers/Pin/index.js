import React, {useState, useCallback, useRef} from 'react';
import {Alert, View, StyleSheet} from 'react-native';

import SafeWrapper from '../../Components/SafeWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import PinComponent from '../../Components/Pin';

const mockPassword = [
  {id: 1, value: '', inputRef: React.createRef()},
  {id: 2, value: '', inputRef: React.createRef()},
  {id: 3, value: '', inputRef: React.createRef()},
  {id: 4, value: '', inputRef: React.createRef()},
];

const Pin = () => {
  const [password, setPassword] = useState(mockPassword);

  const handleChangeDigit = useCallback(
    (value, inputId) => {
      let passwordIndex;
      const _password = [...password].map((input, index) => {
        if (input.id === inputId) {
          passwordIndex = index;
          return {...input, value};
        }

        return input;
      });

      setPassword(_password);

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

  getNextInput = passwordIndex => {
    const nextCellIndex = parseInt(passwordIndex) + 1;

    if (password[nextCellIndex]) {
      return password[nextCellIndex].inputRef;
    }

    return null;
  };

  getPrevInput = passwordIndex => {
    const prevCellIndex = parseInt(passwordIndex) - 1;

    if (password[prevCellIndex]) {
      return password[prevCellIndex].inputRef;
    }

    return null;
  };

  const validate = () => {
    const errors = password.filter(p => p.value === '');
    return errors.length === 0;
  };

  const handleNext = () => {
    if (!validate()) {
      Alert.alert('Please enter all digits');
    }
  };

  return (
    <SafeWrapper>
      <View style={styles.content}>
        <Text style={styles.text} bold size={18} align="center">
          Enter your new Pin
        </Text>
        <PinComponent data={password} onChangeDigit={handleChangeDigit} />
      </View>
      <Button title="Next" onPress={handleNext} />
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginBottom: 20,
  },
});

export default Pin;
