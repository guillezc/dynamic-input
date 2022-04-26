import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Text from '../Text';
import {COLORS} from '../../Theme';

const Button = ({title, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text bold align="center" color={COLORS.primary.contrastText}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: '#1227E2',
    borderRadius: 20,
  },
});

Button.defaultProps = {
  title: '',
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default Button;
