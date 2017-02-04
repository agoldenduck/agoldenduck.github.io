import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import access from 'safe-access';
import moment from 'moment';
import curry from 'lodash/curry';
import flow from 'lodash/flow';

import styles from './ProjectStub.module.css';

const STUB_LENGTH = 200;

const getFirstParagraph = desc =>
  desc.slice(desc.indexOf('<p>') + 3, desc.indexOf('</p>'));

const limitStringLength = curry((LIMIT, string) =>
  (string.length > LIMIT ? `${string.substr(0, LIMIT)}...` : string),
);

const generateDescription = flow(getFirstParagraph, limitStringLength(STUB_LENGTH));

const ProjectStub = (props) => {
  const { post } = props;
  const title = access(post, 'data.title') || post.file.stem;
  const description = generateDescription(access(post, 'data.body'));
  const published = moment(access(post, 'data.date'));
  const img = access(post, 'data.img') || false;
  const { path } = post;

  return (
    <div styleName={props.even ? 'even' : 'odd'}>
      <div styleName="date">
        <span styleName="month">
          {published.format('MMM')}
        </span>

        <span styleName="year">
          {published.format('YYYY')}
        </span>
      </div>

      { img && (
        <div styleName="img-container">
          <img styleName="img" alt={title} src={`/${img}`} />
        </div>
      )}

      <div styleName="heading">
        <Link to={path}>
          <h2>{title}</h2>
        </Link>
      </div>

      <p>
        {description}

        <Link
          styleName="more"
          to={path}
        >
          Read more
        </Link>
      </p>
    </div>
  );
};

ProjectStub.propTypes = {
  post: React.PropTypes.objectOf(React.PropTypes.any),
  even: React.PropTypes.bool,
};

export default CSSModules(ProjectStub, styles);
