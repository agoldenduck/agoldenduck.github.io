import React from 'react';
import Helmet from 'react-helmet';

import PostStub from '../../components/PostStub';
import { config } from '../../config.toml';
import { filterPosts, getSortedPosts } from '../../utils';

const Index = (props) => {
  const filterBy = filterPosts(/^blog\/.+\.md$/);
  const sortedPages = getSortedPosts(filterBy(props.route.pages));

  return (
    <div>
      <Helmet title={`${config.siteTitle} | Blog`} />

      {
        sortedPages.length > 0 ? sortedPages.map((post, i) => (
          <PostStub
            key={i}
            post={post}
          />
        )) : (
          <p>Blog coming soon</p>
        )
      }
    </div>
  );
};

Index.propTypes = {
  route: React.PropTypes.objectOf(React.PropTypes.any),
};

export default Index;
