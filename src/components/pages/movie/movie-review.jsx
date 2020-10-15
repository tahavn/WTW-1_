import React from 'react';
import PropTypes from 'prop-types';

const MovieReview = (props) => {
  const {label, activeTab, film} = props;
  const cheched = label === activeTab;
  const halfReview = Math.floor(film.reviews.length / 2);
  const filmOnePart = film.reviews.slice(0, halfReview);
  const filmTwoPart = film.reviews.slice(halfReview);
  return (
    <React.Fragment>
      {cheched && (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {filmOnePart.map((review) => {
              return (
                <div className="review" key={review.author}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.description}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date">{review.date}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              );
            })}
          </div>
          <div className="movie-card__reviews-col">
            {filmTwoPart.map((review) => {
              return (
                <div className="review" key={review.author}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.description}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date">{review.date}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
MovieReview.propTypes = {
  label: PropTypes.string,
  activeTab: PropTypes.string,
};
export default MovieReview;
