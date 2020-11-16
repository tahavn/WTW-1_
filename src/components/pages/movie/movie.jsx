import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser} from '../../../store/user/user-selector';
import {getSelectFilm, getFilms, getSimilarFilms, getFilmById} from '../../../store/data/data-selector';
import {getSelectedFilms, hasSelectedFilms} from '../../../store/show-films/show-films-selector';
import {ActionCreator} from '../../../store/show-films/show-films-reducer';

import Header from '../../header/header';
import MovieTabBar from './movie-tab-bar-nav';
import MovieDetails from './movie-details';
import MovieReview from './movie-review';
import MovieOverview from './movie-overview';
import Footer from '../../footer/footer';
import MyListButton from '../../my-list-button/my-list-button';
// import SmallMovieCard from '../../small-movie-card/small-movie-card';
import CatalogList from '../../catalog-list/catalog-list';

const MoviePage = (props) => {
  const {film, history, selectedID, isSelect, similarFilms} = props;

  return (
    <>
      <section className="movie-card movie-card--full" style={{background: `${film.background_color}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.background_image} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={() => history.push(`/player/${selectedID}`)}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton isFavorite={film.isFavorite} film={film} />

                <a
                  onClick={(event) => {
                    event.preventDefault();
                    history.push(`/films/${selectedID}/review`);
                  }}
                  href="add-review.html"
                  className="btn movie-card__button"
                >
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.poster_image} alt={film.title} width="218" height="327" />
            </div>

            <MovieTabBar film={film}>
              <MovieOverview label="Overview" />
              <MovieDetails label="Details" />
              <MovieReview label="Review" />
            </MovieTabBar>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CatalogList history={history} films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
};

MoviePage.propTypes = {
  id: PropTypes.number,
};
const mapStateToProps = (state, props) => ({
  user: getUser(state),
  selectedFilms: getSelectedFilms(state),
  isSelect: hasSelectedFilms(state),
  film: getFilmById(state, props),
  similarFilms: getSimilarFilms(state, props.selectedID),
});
const mapDispatchToProps = (dispaptch) => ({
  addFilm: (film) => {
    dispaptch(ActionCreator.selectedFilm(film));
  },
  removeFilm: (film) => {
    dispaptch(ActionCreator.deleteFilm(film));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
