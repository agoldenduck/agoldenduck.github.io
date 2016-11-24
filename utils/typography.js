import ReactDOM from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
import { GoogleFont } from 'react-typography';
import CodePlugin from 'typography-plugin-code';

// import styles from '../pages/styles.css';

const options = {
  googleFonts: [
    {
      name: 'Source Code Pro',
      styles: [
        '300',
      ],
    },
    {
      name: 'Source Sans Pro',
      styles: [
        '400',
        '400i',
        '700',
      ],
    },
    {
      name: 'Raleway',
      styles: [
        '400',
      ],
    },
  ],
  headerFontFamily: ['Raleway', 'sans-serif'],
  headerWeight: '400',
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyWeight: '400',
  baseFontSize: '20px',
  baseLineHeight: 1.65,
  scaleRatio: 3,
  plugins: [
    new CodePlugin(),
  ],
};

const typography = new Typography(options);

export const rhythm = typography.rhythm;

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    );
    const head = document.getElementsByTagName('head')[0];
    head.insertAdjacentHTML('beforeend', googleFonts);
  }
}

export default typography;
