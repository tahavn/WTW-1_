import React from 'react';
import PropTypes from 'prop-types';

function CatalogItem(props) {
  const {film} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={`img/${film.src}.jpg`}
          alt={`${film.title}`}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {film.title}
        </a>
      </h3>
    </article>
  );
}

CatalogItem.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
};

export default CatalogItem;
