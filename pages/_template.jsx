import React from 'react';
import '../css/global-styles.css';

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    return this.props.children;
  },
});
