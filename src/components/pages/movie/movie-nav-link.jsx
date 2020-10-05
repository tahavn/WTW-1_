import React from 'react';

const MovieNavLink = ({link}) => {

  return (
    <li className="movie-nav__item">
      <button href="#" className="movie-nav__link">
        {link}
      </button>
    </li>
  );
};

export default MovieNavLink;
