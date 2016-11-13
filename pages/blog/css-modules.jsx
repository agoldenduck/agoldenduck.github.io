import React from 'react';
import Helmet from 'react-helmet';
import { config } from '../../config.toml';
import styles from './example.module.css';

const PostCSS = () => (
  <div>
    <Helmet
      title={`${config.siteTitle} | Hi PostCSSy friends`}
    />
    <h1 className={styles['the-css-module-class']}>
      Hi CSS Modules friends
    </h1>
    <p>You can use CSS Modules in Gatsby with Postcss, Less, and Sass. They
      are enabled for any file in the format *.module.*
    </p>
    <div className={styles['css-modules-nav-example']}>
      <h2>Nav example</h2>
      <ul>
        <li>
          <button>Store</button>
        </li>
        <li>
          <button>Help</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  </div>
);

export default PostCSS;
