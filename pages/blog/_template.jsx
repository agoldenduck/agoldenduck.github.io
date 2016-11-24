import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../css/markdown-styles.css';
import styles from './blog.module.css';

class Template extends React.Component {
  render() {
    return (
      <div styleName="wrapper">
        <Header section="blog" />

        <div styleName="container">
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.node,
};

export default CSSModules(Template, styles);
