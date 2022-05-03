import React, {useRef} from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';

import SafeWrapper from '../../Components/SafeWrapper';
import SectionTitle from '../../Components/SectionTitle';
import Button from '../../Components/Button';
import DynamicInputSimple from '../../Components/DynamicInputSimple';

import {mockPinInputs} from '../../Mocks/data';

const Pin = ({navigation}) => {
  let password = useRef();

  const handleChange = newPassword => {
    password = newPassword;
  };

  const handleNext = () => {
    if (password.length !== 4) {
      Alert.alert('Please enter all digits');
      return
    }

    navigation.navigate('UserInfo');
  };

  return (
    <SafeWrapper>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SectionTitle text="Enter your new Pin" />
        <DynamicInputSimple inputs={mockPinInputs} onChange={handleChange} />
      </ScrollView>
      <Button title="Next" onPress={handleNext} />
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Pin;
