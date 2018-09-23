import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Header = props => (
  <div className="header">
    <h1 className="title">{props.title} {props.description} </h1>
    <p className="description"></p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Header.defaultProps = {
  description: '',
};

export default Header;
