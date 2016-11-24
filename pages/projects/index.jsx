import React from 'react';
import Helmet from 'react-helmet';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';

import PostStub from '../../components/PostStub';
import { config } from '../../config.toml';

const filterPosts = pages =>
  pages.filter(page => /^blog.+\.md$/.test(access(page, 'requirePath')));

const getSortedBlogPosts = pages =>
  sortBy(filterPosts(pages), page => access(page, 'data.date')).reverse();

const Index = (props) => {
  const sortedPages = getSortedBlogPosts(props.route.pages);

  return (
    <div>
      <Helmet title={`${config.siteTitle} | Projects`} />

      {
        sortedPages.map((post, i) => (
          <PostStub
            key={i}
            post={post}
          />
        ))
      }
    </div>
  );
};

Index.propTypes = {
  route: React.PropTypes.objectOf(React.PropTypes.any),
};

export default Index;
