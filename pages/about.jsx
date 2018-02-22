import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import CSSModules from 'react-css-modules';
import { Icon as FontAwesome } from 'react-fa';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './about.module.css';
import { config } from '../config.toml';

const About = () => (
  <div styleName="wrapper">
    <Helmet
      title={`${config.siteTitle} | About me`}
      meta={[
        { name: 'description', content: 'Sample' },
        {
          name: 'keywords',
          content: 'Alex, Dacre, React, JavaScript, ux, community, web, developer, Sydney,' +
          ' Australia',
        },
      ]}
    />

    <Header section="about" />

    <div styleName="container">
      <h2>
        Sydney Web Developer
      </h2>

      <p>
        I build fast websites and web applications.
      </p>

      <p>
        I build mobile first, user friendly, and fast web applications. My work empowers your business to tap into the
        power of the internet to connect with your customers and other services. I work with you to find out your needs
        and the needs of your customers. I work with you throughout the process until you are happy with the result.
      </p>

      <p>
        <a href="mailto:alex@alexdacre.com">
         <FontAwesome name="envelope-open-o" /> Get in touch
        </a> with me if you have a project or think I'd be a good fit for your business.
      </p>
    </div>

    <Footer />
  </div>
);

export default CSSModules(About, styles);
