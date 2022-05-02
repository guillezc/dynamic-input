import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Text from '../../Components/Text';
import PinComponent from '../../Components/Pin';

const mockInputs = [
  {id: 1, value: '', inputRef: React.createRef()},
  {id: 2, value: '', inputRef: React.createRef()},
  {id: 3, value: '', inputRef: React.createRef()},
  {id: 4, value: '', inputRef: React.createRef()},
];

const PinPassword = ({onChange}) => {
  const [inputs, setInputs] = useState(mockInputs);

  useEffect(() => {
    onChange(getPassword());
  }, [inputs]);

  const getPassword = () => {
    const pwd = inputs.map(p => p.value);
    return pwd.join('');
  };

  const handleChangeDigit = useCallback(
    (value, inputId) => {
      let inputIndex;
      const _inputs = [...inputs].map((input, index) => {
        if (input.id === inputId) {
          inputIndex = index;
          return {...input, value};
        }

        return input;
      });

      setInputs(_inputs);
    },
    [inputs],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text} bold size={18} align="center">
        Enter your new Pin
      </Text>
      <PinComponent inputs={inputs} onChangeDigit={handleChangeDigit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginBottom: 20,
  },
});

PinPassword.defaultProps = {
  onChange: data => data,
};

PinPassword.propTypes = {
  onChange: PropTypes.func,
};

export default PinPassword;
