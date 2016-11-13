import ReactDOM from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
import { GoogleFont } from 'react-typography';
import CodePlugin from 'typography-plugin-code';

// import styles from '../pages/styles.css';

const options = {
  googleFonts: [
    {
      name: 'Julius Sans One',
      styles: [
        '400',
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
      name: 'Archivo Narrow',
      styles: [
        '700',
      ],
    },
  ],
  headerFontFamily: ['Julius Sans One', 'sans-serif'],
  headerWeight: '400',
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  baseFontSize: '20px',
  baseLineHeight: 1.65,
  scale: 2.25,
  plugins: [
    new CodePlugin(),
  ],
  overrideStyles: () => ({
    'h2, h3, h4, h5, h6': {
      fontFamily: ['Archivo Narrow', 'sans-serif'].join(','),
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  }),
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
