import React, {useRef} from 'react';
import {Alert} from 'react-native';

import SafeWrapper from '../../Components/SafeWrapper';
import Button from '../../Components/Button';
import PinPassword from '../../Components/PinPassword';

const Pin = ({ navigation }) => {
  let password = useRef();

  const handleChange = (newPassword) => {
    password = newPassword
  };

  const handleNext = () => {
    if (password.length !== 4) {
      Alert.alert('Please enter all digits');
      return
    }

    // navigation.navigate('UserInfo')
  };

  return (
    <SafeWrapper>
      <PinPassword onChange={handleChange} />
      <Button title="Next" onPress={handleNext} />
    </SafeWrapper>
  );
};

export default Pin;
