import React from 'react';
import PropTypes from 'prop-types';

function CatalogItem(props) {
  const {article} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={`img/${article.src}.jpg`}
          alt={`${article.title}`}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {article.title}
        </a>
      </h3>
    </article>
  );
}

CatalogItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default CatalogItem;
