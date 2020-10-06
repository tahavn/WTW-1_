import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const {className} = props;
  return (
    <header className={`page-header movie-card__head ${className || ``}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <Link to="/singin">
            <img
              src="/img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
export default Header;
