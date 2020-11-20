import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Operations as DataOperations} from '../../store/data/data-reducer';
import {ActionCreator} from '../../store/show-films/show-films-reducer';
import {getSelectedFilms, hasSelectedFilms, getFavoriteFilms} from '../../store/show-films/show-films-selector';
import {getAuthStatus} from '../../store/user/user-selector';
import {AuthorizationStatus} from '../../store/user/user-reducer';
import history from '../../history';

class MyListButton extends PureComponent {
  constructor(props) {
    super(props);
    this._handleMyListClick = this._handleMyListClick.bind(this);
  }

  _handleMyListClick() {
    const {isFavorite, onChangeFavoriteFilm, auth, film} = this.props;
    const isAuth = auth.status === AuthorizationStatus.AUTH;
    if (!isAuth) {
      history.push(`/singin`);
      return;
    }
    const status = isFavorite ? 0 : 1;
    onChangeFavoriteFilm(film.id, status);
  }
  render() {
    const {film, auth} = this.props;
    const isAuth = auth.status === AuthorizationStatus.AUTH;
    const isFavorite = film.isFavorite;
    const mainInList =
      isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      );

    return (
      <button className="btn btn--list movie-card__button" type="button" onClick={this._handleMyListClick}>
        {mainInList}
        <span>My list</span>
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedFilms: getSelectedFilms(state),
  isSelect: hasSelectedFilms(state),
  favoriteFilms: getFavoriteFilms(state),
  auth: getAuthStatus(state),
});
const mapDispatchToProps = (dispaptch) => ({
  onChangeFavoriteFilm(id, status) {
    dispaptch(DataOperations.changeFavorite(id, status));
  },
  addFilm: (film) => {
    dispaptch(ActionCreator.selectedFilm(film));
  },
  removeFilm: (film) => {
    dispaptch(ActionCreator.deleteFilm(film));
  },
});

MyListButton.propTypes = {
  isFavorite: PropTypes.bool,
  onChangeFavoriteFilm: PropTypes.func,
  film: PropTypes.object,
  auth: PropTypes.shape({
    status: PropTypes.string,
    error: PropTypes.bool,
    isProgress: PropTypes.bool,
  }),
};
export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
