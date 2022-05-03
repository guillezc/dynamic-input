import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Text from '../../Components/Text';

const PinFormGroup = ({children, label}) => (
  <View style={styles.container}>
    <Text style={styles.label} size={14}>
      {label}
    </Text>
    <View>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
  },
});

PinFormGroup.defaultProps = {
  children: null,
  label: '',
};

PinFormGroup.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export default PinFormGroup;
