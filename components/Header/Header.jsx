import React from 'react';
import Headroom from 'react-headroom';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Avatar from '../Avatar';
import styles from './Header.module.css';

const Header = () => (
  <Headroom
    style={{
      backgroundColor: '#FBFBF8',
      boxShadow: '0 1px 5px #CECECB',
      height: 130,
    }}
  >
    <div
      styleName="container"
    >
      <Link
        to={prefixLink('/')}
        styleName="title-link"
      >
        <Avatar
          size={64}
        />

        <h2
          styleName="title"
        >
          Alex Dacre
        </h2>
      </Link>
    </div>
  </Headroom>
);

export default CSSModules(Header, styles);
