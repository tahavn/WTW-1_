import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Operations as DataOperations} from '../../store/data/data-reducer';
import {ActionCreator} from '../../store/show-films/show-films-reducer';
import {getSelectedFilms, hasSelectedFilms, getFavoriteFilms} from '../../store/show-films/show-films-selector';

class MyListButton extends PureComponent {
  constructor(props) {
    super(props);
    this._handleMyListClick = this._handleMyListClick.bind(this);
  }

  _handleMyListClick() {
    const {isFavorite, onChangeFavoriteFilm, film} = this.props;
    const status = isFavorite ? 0 : 1;
    onChangeFavoriteFilm(film.id, status);
  }
  render() {
    const {favoriteFilms, film, isFavorite} = this.props;
    // isFavorite={isFavorite}
    const mainInList = isFavorite ? (
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
export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
