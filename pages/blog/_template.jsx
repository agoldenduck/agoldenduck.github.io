import React from 'react';
import { Container } from 'react-responsive-grid';
import Header from '../../components/Header';

import '../../css/markdown-styles.css';
import { rhythm } from '../../utils/typography';

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    return (
      <div>
        <Header />

        <Container
          style={{
            maxWidth: 780,
            padding: `${rhythm(1)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    );
  },
});
