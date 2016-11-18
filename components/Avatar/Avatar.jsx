import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Avatar.module.css';
import avatar from '../../img/alex_dacre.jpg';

const Avatar = props => (
  <div
    styleName="avatar"
    style={{
      width: props.size,
      height: props.size,
    }}
  >
    <img src={avatar} alt="Alex Dacre javascript developer" />
  </div>
);

Avatar.propTypes = {
  size: React.PropTypes.number.isRequired,
}

export default CSSModules(Avatar, styles);
