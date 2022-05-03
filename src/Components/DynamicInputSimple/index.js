import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';

import DynamicInput from '../DynamicInput';

const DynamicInputSimple = props => {
  const {onChange, ...rest} = props;
  const [inputs, setInputs] = useState(rest.inputs);

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
  onChange: PropTypes.func,
};

export default DynamicInputSimple;
