import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Text from '../../Components/Text';

const SectionTitle = ({text}) => (
  <Text style={styles.text} bold size={18} align="center">
    {text}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    marginVertical: 12,
  },
});

SectionTitle.defaultProps = {
  text: '',
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;
