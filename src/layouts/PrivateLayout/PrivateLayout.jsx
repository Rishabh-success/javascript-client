/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from '../components';

const PrivateLayout = ({ children, ...rest }) => (
  <div>
    <NavBar />
    <br />
    <div>{children}</div>
    &nbsp;
  </div>
);
PrivateLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateLayout;
