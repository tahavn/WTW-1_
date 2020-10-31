import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import withSmallPlayer from '../../hocs/with-small-player/with-small-player';
import {ActionCreator} from '../../store/show-films/show-films';

const SmallMovieCardWrapped = withSmallPlayer(SmallMovieCard);

const CatalogList = (props) => {
  const {films, history, onSelectedFilm} = props;
  return (
    <div className="catalog__movies-list">
      {films &&
        films.map((film) => {
          return (
            <SmallMovieCardWrapped
              history={history}
              key={film.title}
              film={film}
              onSelectedFilm={onSelectedFilm}
            />
          );
        })}
    </div>
  );
};

CatalogList.propTypes = {
  history: PropTypes.object,
  films: PropTypes.array,
  handlerFilmMouseMove: PropTypes.func,
  handleSelectedFilms: PropTypes.func,
};

export default CatalogList;
