import React from 'react';
import PropTypes from 'prop-types';
const MovieNavLink = (props) => {
  const {link, onChangeActiveTab, className} = props;
  const {active} = className;
  const clazz = active ? ` movie-nav__item--active` : ``;
  return (
    <li
      onClick={(event) => onChangeActiveTab(link, event)}
      className={`movie-nav__item${clazz}`}
    >
      <a href="#" className="movie-nav__link">
        {link}
      </a>
    </li>
  );
};

MovieNavLink.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.any,
  onChangeActiveTab: PropTypes.func.isRequired,
};
export default MovieNavLink;
