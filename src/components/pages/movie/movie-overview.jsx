import React from 'react';
import PropTypes from 'prop-types';

const MovieOverview = (props) => {
  const {label, activeTab,film} = props;
  const cheched = label === activeTab;
  return (
    <React.Fragment>
      {cheched && (
        <React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{film.rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">Very good</span>
              <span className="movie-rating__count">{film.run_time} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>
              {film.description}
            </p>

            <p className="movie-card__director">
              <strong>Director: {film.director}</strong>
            </p>

            <p className="movie-card__starring">
            <strong>Starring: {film.starring.map((it,index,array) => it + `${index === array.length - 1 ? `` : `, `}`)}</strong>
            </p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  label: PropTypes.string,
  activeTab: PropTypes.string,
};

export default MovieOverview;
