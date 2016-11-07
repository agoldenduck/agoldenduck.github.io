import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from '../config.toml';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <h1>
          Hi people
        </h1>

        <p>
          Welcome to your new Gatsby site. This site is fully amazing to the extreme factor of
          awesomeness. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elit enim,
          tincidunt quis tempor ac, placerat venenatis felis. Nullam purus ipsum, commodo nec ornare
          scelerisque, tincidunt quis purus. Nunc ullamcorper, eros sit amet vehicula volutpat,
          libero nisi interdum augue, id ornare est eros non sem. Donec ac pretium nisi. Quisque vel
          arcu risus. Aliquam nec massa aliquam, sollicitudin lacus a, lacinia massa. Nulla ut ipsum
          quis ligula mattis mattis. Ut vestibulum tempor erat a dignissim. Nullam laoreet elit in
          vestibulum rhoncus. Sed faucibus lectus quis pellentesque maximus. Quisque ultricies odio
          eget leo egestas porttitor. Vestibulum sagittis euismod sagittis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

        <p>
          Nam facilisis metus id sagittis consectetur. Maecenas dictum ornare ipsum vitae porta. In
          nec vestibulum felis. Nam pretium consequat dolor, eu dignissim sapien egestas et. Etiam
          ex arcu, luctus quis elementum nec, semper a neque. Praesent nec orci finibus, rhoncus
          velit ut, molestie leo. Maecenas tellus nisl, tincidunt sit amet vulputate eget, euismod
          eget nunc. Nunc laoreet tristique massa, id molestie magna volutpat in. Vivamus sed
          aliquam lorem, nec euismod velit. Maecenas facilisis accumsan ex at ultricies. Duis at
          arcu id nunc tempus tristique.
        </p>

        <p>
          Nunc vehicula ipsum quis augue volutpat consequat. Aenean et lobortis purus. Phasellus
          pulvinar faucibus risus, sed eleifend nibh efficitur quis. Ut aliquam metus diam, eu
          fermentum metus laoreet sit amet. Nam lacinia fringilla lacus vitae laoreet. Nullam non
          eros tellus. Vestibulum facilisis non dui nec dictum. Quisque dignissim lacus ut pulvinar
          bibendum. Sed in lectus eget lacus auctor fermentum eu ut sem.
        </p>

        <p>
          Morbi eget hendrerit sapien. Aliquam maximus, mauris eget mattis viverra, dui tellus
          rutrum augue, et varius velit tellus ac arcu. Praesent eu consectetur leo. Curabitur
          tincidunt aliquam erat non sodales. Aliquam in condimentum velit. Cras et sagittis erat.
          Vivamus mi purus, ultricies vel nunc a, rhoncus dapibus dui. Nunc scelerisque quam quis
          turpis vehicula, sit amet tristique massa accumsan. Etiam vitae ex at diam fringilla
          commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>

        <h2>Below are some pages showing different capabilities built-in to Gatsby</h2>

        <h3>Supported file types</h3>

        <ul>
          <li>
            <Link to={prefixLink('/markdown/')}>Markdown</Link>
          </li>

          <li>
            <Link to={prefixLink('/react/')}>JSX (React components)</Link>
          </li>
        </ul>

        <h3>Supported CSS processors</h3>

        <ul>
          <li>
            <Link to={prefixLink('/postcss/')}>PostCSS</Link>
          </li>

          <li>
            <Link to={prefixLink('/css-modules/')}>CSS Modules</Link>
          </li>
        </ul>
      </div>
    );
  }
}
