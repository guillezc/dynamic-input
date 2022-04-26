import React from 'react';
import {Text as TextRN} from 'react-native';
import PropTypes from 'prop-types';

import {COLORS, FONTS} from '../../Theme';

const Text = ({children, style, bold, align, size, color, ...rest}) => (
  <TextRN
    {...rest}
    style={[
      style,
      {textAlign: align, fontSize: size, color},
      bold ? {...FONTS.text.bold} : {...FONTS.text.regular},
    ]}>
    {children}
  </TextRN>
);

Text.defaultProps = {
  children: '',
  bold: false,
  align: 'left',
  color: COLORS.primary.text,
  size: 16,
};

Text.propTypes = {
  children: PropTypes.string,
  bold: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Text;
