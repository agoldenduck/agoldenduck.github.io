import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Avatar.module.css';
import avatar from '../../img/alex_dacre.jpg';

const Avatar = () => (
  <div styleName="avatar">
    <img src={avatar} alt="Alex Dacre javascript developer" />
  </div>
);

export default CSSModules(Avatar, styles);
