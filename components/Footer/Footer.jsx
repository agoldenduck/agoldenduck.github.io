import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { Icon as FontAwesome } from 'react-fa';
import Mailto from 'react-mailto';

import styles from './Footer.module.css';

const Footer = () => (
  <p
    styleName="footer"
  >
    <Link
      to="http://stackoverflow.com/users/story/5283066"
      target="_blank"
    >
      <FontAwesome
        name="stack-overflow"
      />
    </Link>

    <Link
      to="https://github.com/agoldenduck"
      target="_blank"
    >
      <FontAwesome
        name="github"
      />
    </Link>

    <Mailto
      email="alex@alexdacre.com"
      obfuscate
    >
      <FontAwesome
        name="envelope-open-o"
      />
    </Mailto>

    <Link
      to="https://au.linkedin.com/in/alexdacre"
      target="_blank"
    >
      <FontAwesome
        name="linkedin"
      />
    </Link>

    <Link
      to="https://twitter.com/alex_dacre"
      target="_blank"
    >
      <FontAwesome
        name="twitter"
      />
    </Link>
  </p>
);

export default CSSModules(Footer, styles);
