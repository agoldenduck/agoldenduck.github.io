import React from 'react';
import Headroom from 'react-headroom';
import CSSModules from 'react-css-modules';
import { Container } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Avatar from '../Avatar';
import styles from './Header.module.css';

const Header = () => (
  <Headroom
    wrapperStyle={{
      height: 121.75,
    }}
    style={{
      backgroundColor: '#FBFBF8',
      boxShadow: '0 1px 5px #CECECB',
    }}
  >
    <Container
      styleName="container"
      style={{
        maxWidth: 780,
      }}
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
    </Container>
  </Headroom>
);

export default CSSModules(Header, styles);
