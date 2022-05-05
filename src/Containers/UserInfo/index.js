import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import SafeWrapper from '../../Components/SafeWrapper';
import SectionTitle from '../../Components/SectionTitle';
import Button from '../../Components/Button';
import DynamicInputSimple from '../../Components/DynamicInputSimple';
import PinFormGroup from '../../Components/PinFormGroup';
import TextInput from '../../Components/TextInput';

import {initUserInfoValues} from '../../Mocks/form';

const UserInfo = () => {
  let zipCode = useRef();
  let ssn = useRef();
  let phoneNumber = useRef();
  const [form, setForm] = useState(initUserInfoValues);

  const platformBehavior = Platform.OS == 'ios' ? 'padding' : 'height';
  const platformOffset = Platform.OS === 'ios' ? 100 : 0;

  const handleChangeText = useCallback(
    (value, field) => {
      setForm({
        ...form,
        [field]: value,
      });
    },
    [form],
  );

  const validate = () => {
    let valid = true;
    if (zipCode.length !== 5) {
      valid = false;
    }

    if (ssn.length !== 9) {
      valid = false;
    }

    if (phoneNumber.length < 12) {
      valid = false;
    }

    if (
      form.street.length === 0 ||
      form.city.length === 0 ||
      form.state.length === 0
    ) {
      valid = false;
    }

    return valid;
  };

  const handleNext = () => {
    if (!validate()) {
      Alert.alert('Please enter all values');
      return;
    }

    Alert.alert(
      'Your information has been sent',
      `
      ::::: Address :::::
      Street: ${form.street}
      City: ${form.city}
      State: ${form.state}
      Zip Code: ${zipCode}

      ::::: Personal Info :::::
      SSN: ${ssn}
      Phone Number: ${phoneNumber}
      `,
    );
  };

  return (
    <SafeWrapper>
      <KeyboardAvoidingView
        style={styles.avoiding}
        behavior={platformBehavior}
        keyboardVerticalOffset={platformOffset}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <SectionTitle text="Enter your address" />
          <PinFormGroup label="Street">
            <TextInput
              validation={v => v?.length > 0}
              value={form.street}
              fullWidth
              onChangeText={value => handleChangeText(value, 'street')}
            />
          </PinFormGroup>
          <PinFormGroup label="City">
            <TextInput
              validation={v => v?.length > 0}
              value={form.city}
              fullWidth
              onChangeText={value => handleChangeText(value, 'city')}
            />
          </PinFormGroup>
          <PinFormGroup label="State">
            <TextInput
              validation={v => v?.length > 0}
              value={form.state}
              fullWidth
              onChangeText={value => handleChangeText(value, 'state')}
            />
          </PinFormGroup>
          <PinFormGroup label="ZIP Code">
            <DynamicInputSimple
              mask="#-#-#-#-#"
              onChange={value => (zipCode = value)}
            />
          </PinFormGroup>
          <SectionTitle text="Personal Info" />
          <PinFormGroup label="SSN">
            <DynamicInputSimple
              mask="###-##-####"
              onChange={value => (ssn = value)}
            />
          </PinFormGroup>
          <PinFormGroup label="Phone Number">
            <DynamicInputSimple
              mask="##-##########"
              onChange={value => (phoneNumber = value)}
            />
          </PinFormGroup>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button title="Next" onPress={handleNext} />
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  avoiding: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 50
  },
});

export default UserInfo;
