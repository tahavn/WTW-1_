import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function CatalogItem(props) {
  const {film, handlerFilmMouseMove, handlerFilmClick} = props;

  return (
    <article
      onMouseMove={() => handlerFilmMouseMove(film)}
      onClick={() => handlerFilmClick(props.history)}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={film.src} alt={`${film.title}`} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <NavLink
          to={`/player/${film.id}`}
          className="small-movie-card__link"
          href="#"
        >
          {film.title}
        </NavLink>
      </h3>
    </article>
  );
}

CatalogItem.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
  handlerFilmMouseMove: PropTypes.func,
};

export default CatalogItem;
