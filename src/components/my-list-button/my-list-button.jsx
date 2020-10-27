import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/show-films/show-films';
import {
  getSelectedFilms,
  hasSelectedFilms,
  getFavoriteFilms,
} from '../../store/show-films/selector';

class MyListButton extends PureComponent {
  constructor(props) {
    super(props);
    this._handleMyListClick = this._handleMyListClick.bind(this);
  }

  _handleMyListClick() {
    const {favoriteFilms, film} = this.props;
    if (favoriteFilms.includes(film)) {
      this.props.removeFilm(film);
      return;
    } else {
      this.props.addFilm(film);
      return;
    }
  }
  render() {
    const {favoriteFilms, film} = this.props;
    const isSelect = favoriteFilms.includes(film);
    const mainInList = isSelect ? (
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
    ) : (
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
    );

    return (
      <button
        className="btn btn--list movie-card__button"
        type="button"
        onClick={this._handleMyListClick}
      >
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
  addFilm: (film) => {
    dispaptch(ActionCreator.selectedFilm(film));
  },
  removeFilm: (film) => {
    dispaptch(ActionCreator.deleteFilm(film));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
