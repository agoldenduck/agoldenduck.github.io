import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../css/markdown-styles.css';
import styles from './blog.module.css';

const Template = props => (
  <div>
    <Header />

    <div
      styleName="container"
    >
      {props.children}
    </div>

    <Footer />
  </div>
);

Template.propTypes = {
  children: React.PropTypes.node,
};

export default CSSModules(Template, styles);
