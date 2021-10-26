import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../../store/user/user-selector';
import headerIcon from './one.svg';

console.log('header', headerIcon);

const Header = (props) => {
  const {className, Breadcrumbs, id} = props;
  return (
    <header className={`page-header movie-card__head ${className || ``}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {Breadcrumbs && <Breadcrumbs id={id} />}
      <div className="user-block">
        {props.user && (
          <div className="user-block__avatar">
            <Link to="/mylist">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        )}
        {!props.user && (
          <Link to="/singin" className="user-block__link">
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  Breadcrumbs: PropTypes.func,
  id: PropTypes.number,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(Header);
