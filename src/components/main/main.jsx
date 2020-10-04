import React from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';
const Main = (props) => {
  const {src, title, genre, year, id} = props.randomFilm;
  const years = year.getFullYear();

  const isInMyLyst = !id ? (
    <React.Fragment>
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
    </React.Fragment>
  );
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img
          src="img/bg-the-grand-budapest-hotel.jpg"
          alt="The Grand Budapest Hotel"
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={`img/${src}.jpg`}
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{years}</span>
            </p>

            <div className="movie-card__buttons">
              <Link
                to={`player/${id}`}
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <button
                className="btn btn--list movie-card__button"
                type="button"
              >
                {isInMyLyst}
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
