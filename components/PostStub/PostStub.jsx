import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import access from 'safe-access';
import moment from 'moment';

import styles from './PostStub.module.css';

const STUB_LENGTH = 200;

const getFirstParagraph = desc =>
  desc.slice(desc.indexOf('<p>') + 3, desc.indexOf('</p>'));



const generateDescription = (desc) => {
  const stub = getFirstParagraph(desc);
  return stub.length > STUB_LENGTH ? `${stub.substr(0, STUB_LENGTH)}...` : stub;
};

const PostStub = (props) => {
  const post = props.post;
  const title = access(post, 'data.title') || post.file.stem;
  const description = generateDescription(access(post, 'data.body'));
  const published = moment(access(post, 'data.date'));
  const path = post.path;

  return (
    <div styleName="container">
      <div styleName="heading">
        <Link to={path}>
          <h2>{title}</h2>
        </Link>

        <div styleName="date">
          <span styleName="day">
            {published.format('D')}
          </span>

          <span styleName="month">
            {published.format('MMM')}
          </span>

          <span styleName="year">
            {published.format('YYYY')}
          </span>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
};

PostStub.propTypes = {
  post: React.PropTypes.objectOf(React.PropTypes.any),
};

export default CSSModules(PostStub, styles);
