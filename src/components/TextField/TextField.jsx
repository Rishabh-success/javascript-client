import React from 'react';
import PropTypes from 'prop-types';
import { Error, Input } from './style';

const TextField = (props) => {
  const {
    value, error, onChange,
  } = props;
  return (
    <>
      <Input type="text" value={value} onChange={onChange} />
      {
        (error) ? <Error>{error}</Error> : ''
      }
    </>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  // disabled: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
};
TextField.defaultProps = {
//  disabled: false,
  error: '',
  onChange: '',
};
export default TextField;
