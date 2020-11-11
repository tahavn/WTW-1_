import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import withSmallPlayer from '../../hocs/with-small-player/with-small-player';
import {ActionCreator} from '../../store/show-films/show-films-reducer';
import history from '../../history'
const SmallMovieCardWrapped = withSmallPlayer(SmallMovieCard);

const CatalogList = (props) => {
  const {films, handleSelectedFilms} = props;
  return (
    <div className="catalog__movies-list">
      {films &&
        films.map((film) => {
          return (
            <SmallMovieCardWrapped
              history={history}
              key={film.title}
              film={film}
              handleSelectedFilms={handleSelectedFilms}
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

const mapDispatchToProps = (dispatch) => ({
  handleSelectedFilms: (film) => {
    dispatch(ActionCreator.chooseFilm(film));
  },
});
export default connect(null, mapDispatchToProps)(CatalogList);
