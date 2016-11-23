import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { Icon as FontAwesome } from 'react-fa';
import Mailto from 'react-mailto';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import styles from './Footer.module.css';

const Footer = () => (
  <p
    styleName="footer"
  >
    <Tooltip
      placement="top"
      overlay={<span>See my Stack Overflow story</span>}
    >
      <Link
        to="http://stackoverflow.com/users/story/5283066"
        target="_blank"
      >
        <FontAwesome
          name="stack-overflow"
        />
      </Link>
    </Tooltip>

    <Tooltip
      placement="top"
      overlay={<span>See my Github profile</span>}
    >
      <Link
        to="https://github.com/agoldenduck"
        target="_blank"
      >
        <FontAwesome
          name="github"
        />
      </Link>
    </Tooltip>

    <Tooltip
      placement="top"
      overlay={<span>Email me</span>}
    >
      <Mailto
        email="alex@alexdacre.com"
        obfuscate
      >
        <FontAwesome
          name="envelope-open-o"
        />
      </Mailto>
    </Tooltip>

    <Tooltip
      placement="top"
      overlay={<span>See my Linkedin profile</span>}
    >
      <Link
        to="https://au.linkedin.com/in/alexdacre"
        target="_blank"
      >
        <FontAwesome
          name="linkedin"
        />
      </Link>
    </Tooltip>

    <Tooltip
      placement="top"
      overlay={<span>Follow me on Twitter</span>}
    >
      <Link
        to="https://twitter.com/alex_dacre"
        target="_blank"
      >
        <FontAwesome
          name="twitter"
        />
      </Link>
    </Tooltip>
  </p>
);

export default CSSModules(Footer, styles);
