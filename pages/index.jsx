import React from 'react';
import { Container } from 'react-responsive-grid';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import CSSModules from 'react-css-modules';

import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import styles from './index.module.css';
import { config } from '../config.toml';

const Index = () => (
  <div
    styleName="wrapper"
  >
    <Helmet
      title={config.siteTitle}
      meta={[
        { name: 'description', content: 'Sample' },
        {
          name: 'keywords',
          content: 'Alex, Dacre, React, JavaScript, ux, community, web, developer',
        },
      ]}
    />

    <Container
      styleName="container"
    >
      <Avatar />

      <h1
        styleName="title"
      >
        Alex Dacre
      </h1>

      <p
        styleName="purpose"
      >
        I write JavaScript to foster an inclusive and empowered community.
      </p>

      <p
        styleName="links"
      >
        <Link
          to={prefixLink('about/')}
        >
          About Me
        </Link>

        <Link
          to={prefixLink('blog/')}
        >
          Blog
        </Link>

        <Link
          to={prefixLink('projects/')}
        >
          Projects
        </Link>
      </p>

      <Footer />
    </Container>
  </div>
);

export default CSSModules(Index, styles);
