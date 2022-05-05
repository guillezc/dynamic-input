import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';

import DynamicInput from '../DynamicInput';

import {generateInputsByMask} from '../../Mocks/data';

const DynamicInputSimple = props => {
  const {onChange, mask} = props;
  const _inputs = generateInputsByMask(mask)

  const [inputs, setInputs] = useState(_inputs);

  useEffect(() => {
    onChange(getValue());
  }, [inputs]);

  const getValue = () => {
    const val = inputs.map(p => p.value);
    return val.join('');
  };

  const handleChangeDigit = useCallback(
    (value, inputId) => {
      const _inputs = [...inputs].map((input, index) => {
        return input.id === inputId ? {...input, value} : input;
      });

      setInputs(_inputs);
    },
    [inputs],
  );

  return <DynamicInput inputs={inputs} onChangeDigit={handleChangeDigit} />;
};

DynamicInputSimple.defaultProps = {
  inputs: [],
  mask: '',
  onChange: data => data,
};

DynamicInputSimple.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      digits: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      inputRef: PropTypes.object,
    }),
  ),
  mask: PropTypes.string,
  onChange: PropTypes.func,
};

export default DynamicInputSimple;
