import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import withSmallPlayer from '../hocs/with-small-player/with-small-player';
const SmallMovieCardWrapped = withSmallPlayer(SmallMovieCard);
const CatalogList = (props) => {
  const {films, handlerFilmMouseMove, handlerFilmClick} = props;
  return (
    <div className="catalog__movies-list">
      {films &&
        films.map((film) => {
          return (
            <SmallMovieCardWrapped
              {...props}
              handlerFilmMouseMove={handlerFilmMouseMove}
              handlerFilmClick={handlerFilmClick}
              key={film.title}
              film={film}
            />
          );
        })}
    </div>
  );
};

CatalogList.propTypes = {
  films: PropTypes.array,
  handlerFilmMouseMove: PropTypes.func,
};

export default CatalogList;
