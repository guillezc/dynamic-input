import React from 'react';

const equalTo = (value, toCompare) => value?.length === toCompare

export const mockPinInputs = [
  {
    id: 1,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
  {
    id: 2,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
  {
    id: 3,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
  {
    id: 4,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
];

export const mockZipInputs = [
  {
    id: 1,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
  {
    id: 2,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
  {
    id: 3,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
  {
    id: 4,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
  {
    id: 5,
    value: '',
    digits: 1,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 1),
  },
];

export const mockSsnInputs = [
  {
    id: 1,
    value: '',
    digits: 3,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 3),
  },
  {
    id: 2,
    value: '',
    digits: 2,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 2),
  },
  {
    id: 3,
    value: '',
    digits: 4,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 4),
  },
];

export const mockPhoneInputs = [
  {
    id: 1,
    value: '',
    digits: 3,
    mask: '+',
    keyboardType: 'numeric',
    inputRef: React.createRef(),
    validation: value => value.length > 2,
  },
  {
    id: 2,
    value: '',
    digits: 10,
    keyboardType: 'number-pad',
    inputRef: React.createRef(),
    validation: (v) => equalTo(v, 10),
  },
];
