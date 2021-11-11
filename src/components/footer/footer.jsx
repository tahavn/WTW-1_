import React from 'react';
import footerIcon from './two.svg';

console.log('footer', footerIcon);

const Footer = () => {
  return (
    <footer className="page-footer">
      <svg viewBox={footerIcon.viewBox}>
        <use xlinkHref={footerIcon.url} />
      </svg>
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
