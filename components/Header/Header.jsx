import React from 'react';
import Headroom from 'react-headroom';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Avatar from '../Avatar';
import styles from './Header.module.css';

const currentLink = (section, link) =>
  (section === link ? { color: '#FC9F5B' } : {});

const Header = props => (
  <Headroom
    style={{
      backgroundColor: '#fff',
      height: 130,
    }}
    disableInlineStyles
  >
    <div styleName="container">
      <Link
        to={prefixLink('/')}
        styleName="avatar-link"
      >
        <Avatar size={64} />
      </Link>

      <div styleName="link-container">
        <Link to={prefixLink('/')}>
          <h3 styleName="title">
            Alex Dacre
          </h3>
        </Link>

        <span styleName="links">
          <Link
            to={prefixLink('/about/')}
            style={currentLink(props.section, 'about')}
          >
            About Me
          </Link>

          <Link
            to={prefixLink('/blog/')}
            style={currentLink(props.section, 'blog')}
          >
            Blog
          </Link>

          <Link
            to={prefixLink('/projects/')}
            style={currentLink(props.section, 'projects')}
          >
            Projects
          </Link>
        </span>
      </div>
    </div>
  </Headroom>
);

Header.propTypes = {
  section: React.PropTypes.string,
};

export default CSSModules(Header, styles);
