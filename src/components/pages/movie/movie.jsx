import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import MovieTabBar from './movie-tab-bar-nav';
import MovieDetails from './movie-details';
import MovieReview from './movie-review';
import MovieOverview from './movie-overview';
const MoviePage = (props) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">Drama</span>
              <span className="movie-card__year">2014</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button
                className="btn btn--list movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">
                Add review
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <MovieTabBar>
            <MovieOverview label="Overview" />
            <MovieDetails label="Details" />
            <MovieReview label="Review" />
          </MovieTabBar>
        </div>
      </div>
    </section>
  );
};

MoviePage.propTypes = {
  id: PropTypes.number,
};

export default MoviePage;
