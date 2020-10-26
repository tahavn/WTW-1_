import React from 'react';
import PropTypes from 'prop-types';

const CatalogMore = (props) => {
  const {addMovies} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={addMovies}>
        Show more
      </button>
    </div>
  );
};

CatalogMore.propTypes = {
  addMovies: PropTypes.func.isRequired,
};

export default CatalogMore;
