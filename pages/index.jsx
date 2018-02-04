import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import CSSModules from 'react-css-modules';

import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import styles from './index.module.css';
import { config } from '../config.toml';

const Index = () => (
  <div styleName="wrapper">
    <Helmet
      title={config.siteTitle}
      meta={[
        { name: 'description', content: 'Sample' },
        {
          name: 'keywords',
          content: 'Alex, Dacre, React, JavaScript, ux, community, web, developer, Sydney,' +
          ' Australia',
        },
      ]}
    />

    <div styleName="container">
      <Avatar size={150} />

      <h1 styleName="title">
        Alex Dacre
      </h1>

      <p styleName="purpose">
        I write JavaScript to foster an inclusive and empowered community.
      </p>

      <p styleName="links">
        <Link styleName="link" to={prefixLink('about/')}>
          About Me
        </Link>

        <Link styleName="link" to={prefixLink('blog/')}>
          Blog
        </Link>

        <Link styleName="link" to={prefixLink('projects/')}>
          Projects
        </Link>
      </p>

      <Footer />
    </div>
  </div>
);

export default CSSModules(Index, styles);
