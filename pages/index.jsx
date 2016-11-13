import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Container } from 'react-responsive-grid';
import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';
import { config } from '../config.toml';
import styles from './index.module.css';
import avatar from '../img/alex_dacre.jpg';

const Index = () => (
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'Alex, Dacre, React, javascript, ux' },
      ]}
    />

    <Container
      style={{
        maxWidth: 780,
        paddingTop: 0,
        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
      }}
    >
      <div className="avatar">
        <img src={avatar} alt="Alex Dacre avatar" />
      </div>

      <h1>
        Alex Dacre
      </h1>

      <ul>
        <li>
          <Link to={prefixLink('/blog/markdown/')}>Markdown</Link>
        </li>

        <li>
          <Link to={prefixLink('/blog/react/')}>JSX (React components)</Link>
        </li>
      </ul>

      <h3>Supported CSS processors</h3>

      <ul>
        <li>
          <Link to={prefixLink('/blog/postcss/')}>PostCSS</Link>
        </li>

        <li>
          <Link to={prefixLink('/blog/css-modules/')}>CSS Modules</Link>
        </li>
      </ul>
    </Container>
  </div>
);

export default Index;
