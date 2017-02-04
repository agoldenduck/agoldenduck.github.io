import React from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import ProjectStub from '../../components/ProjectStub';
import { filterPosts, getSortedPosts } from '../../utils';
import { config } from '../../config.toml';
import styles from './projects.module.css';

const Index = (props) => {
  const filterBy = filterPosts(/^projects\/.+\.md$/);
  const sortedPages = getSortedPosts(filterBy(props.route.pages));

  return (
    <div>
      <Helmet title={`${config.siteTitle} | Projects`} />

      {
        sortedPages.map((post, i) => (
          <ProjectStub
            key={i}
            even={i % 2 === 1}
            post={post}
          />
        ))
      }

      <div styleName="timeline" />

      <div styleName="clearfix" />
    </div>
  );
};

Index.propTypes = {
  route: React.PropTypes.objectOf(React.PropTypes.any),
};

export default CSSModules(Index, styles);
