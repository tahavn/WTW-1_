import React from 'react';
import MovieNavLink from './movie-nav-link';

const MovieNav = (props) => {
  const { navLink } = props;
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {navLink &&
          navLink.map((link) => {
            return <MovieNavLink key={link} link={link} />;
          })}
      </ul>
    </nav>
  );
};

export default MovieNav;
