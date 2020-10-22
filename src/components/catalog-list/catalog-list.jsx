import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {getFilms} from '../../store/data/selector'
import withPlayer from '../hocs/withPlayer/withPlayer';
import {ActionCreator} from '../../store/show-films/show-films';
const SmallMovieCardWrapped = withPlayer(SmallMovieCard);

const CatalogList = (props) => {
  const {films, history, onSelectedFilm} = props;
  console.log(onSelectedFilm)
  return (
    <div className="catalog__movies-list">
      {films &&
        films.map((film) => {
          return (
            <SmallMovieCardWrapped
              history={history}
              key={film.title}
              film={film}
              poster={film.src}
              src={film.srcMovie}
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
const mapStateToProps = (state) => ({
  films: getFilms(state)
})
export default connect(mapStateToProps)(CatalogList);
