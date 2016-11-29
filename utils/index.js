import sortBy from 'lodash/sortBy';
import curry from 'lodash/curry';
import access from 'safe-access';

const filterPosts = curry((regex, pages) =>
  pages.filter(page => regex.test(access(page, 'requirePath'))),
);

const getSortedPosts = pages =>
  sortBy(pages, page => access(page, 'data.date')).reverse();

export { filterPosts, getSortedPosts };
