import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Err } from './style';

export default function RadioField(props) {
  const {
    errorMsg, onChange, options, onBlur,
  } = props;
  return (
    <>
      { options && options.length && options.map(({ value, label }) => (
        <Fragment key={label}>
          <Input type="radio" name="sport" value={value} onChange={onChange} error={errorMsg} onBlur={onBlur} />
          { label}
          <br />
        </Fragment>
      ))}
      <Err>{errorMsg}</Err>
    </>
  );
}
RadioField.defaultProps = {
  errorMsg: '',
  options: [],
};

RadioField.propTypes = {
  errorMsg: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  onBlur: PropTypes.func.isRequired,
};
