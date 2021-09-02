import React from 'react';
import PropTypes from 'prop-types';
import { Error, Input } from './style';

const TextField = (props) => {
  const {
    value, error, onChange, onBlur,
  } = props;

  return (
    <div>
      <Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
      <Error>{error}</Error>
    </div>
  );
};
TextField.defaultProps = {
  error: '',
  onChange: () => {},

};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.string.isRequired,
};
export default TextField;
