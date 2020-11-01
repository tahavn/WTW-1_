import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../loading/loading';
import Header from '../header/header';
import Content from '../content/content';
import withCountFilms from '../../hocs/with-count-films/with-count-films';

const ContentWithCount = withCountFilms(Content);

const Main = (props) => {
  const {history, handlerSorted, handleSelectedFilms, tags, activeTag, films, isLoading, mainFilm} = props;

  if (!isLoading) {
    return (
      <div style={{background: 'black', height: '100vh'}}>
        <Loading />
      </div>
    );
  }
  const {src, id, title, genre, year, background_image} = mainFilm;
  // const years = year.getFullYear();
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
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={`${background_image}`} alt={`${title}`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={src} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`player/${id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  {isInMyLyst}
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentWithCount
        history={history}
        handlerSorted={handlerSorted}
        tags={tags}
        handleSelectedFilms={handleSelectedFilms}
        activeTag={activeTag}
        films={films}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};

Main.propTypes = {
  randomFilm: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    id: PropTypes.number,
  }),
  history: PropTypes.object,
  handlerSorted: PropTypes.func,
  handleSelectedFilms: PropTypes.func,
  tags: PropTypes.array,
  activeTag: PropTypes.string,
  films: PropTypes.array,
};

export default Main;
