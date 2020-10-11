import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import withSmallPlayer from '../hocs/with-small-player/with-small-player';
const SmallMovieCardWrapped = withSmallPlayer(SmallMovieCard);
const CatalogList = (props) => {
  const {films, history} = props;
  return (
    <div className="catalog__movies-list">
      {films &&
        films.map((film) => {
          return (
            <SmallMovieCardWrapped
              history={history}
              key={film.title}
              film={film}
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
};

export default CatalogList;
