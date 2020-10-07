import React from 'react';
import PropTypes from 'prop-types';
import CatalogItem from '../catalog-item/catalog-item';

const CatalogList = (props) => {
  const {films, handlerFilmMouseMove, handlerFilmClick} = props;
  return (
    <div className="catalog__movies-list">
      {films &&
        films.map((film) => {
          return (
            <CatalogItem
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
