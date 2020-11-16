import React, {PureComponent, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Operations as DataOperations} from '../../../store/data/data-reducer';
import {getCommetsStatus, getFilmComments} from '../../../store/data/data-selector';
import {connect} from 'react-redux';

const getDateTime = (time) => {
  const date = new Date(time);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
// const getDateTimeString = (time) => {
//   const date = new Date(time);
//   return `${FullMonth[date.getMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`;
// };

class MovieReview extends PureComponent {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadComments(this.props.film);
  }
  omponentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.comments !== prevProps.comments) {
      this.props.loadComments(this.props.film);
    }
  }
  render() {
    const {label, comments, activeTab, film, loadComments, selectedID} = this.props;
    const cheched = label === activeTab;
    let filmOnePart = [];
    let filmTwoPart = [];
    if (comments) {
      const halfReview = Math.ceil(comments.length / 2);
      filmOnePart = comments.slice(0, halfReview);
      filmTwoPart = comments.slice(halfReview);
    }
    /*
  const isLoadingComments = () => {
    if (loadingComments.commentsIsLoading && !loadingComments.loadingIsError) {
      return `reviews is loading...`;
    } else if (loadingComments.commentsIsLoading && loadingComments.loadingIsError) {
      return `server error, try later...`;
    }

    return false;
  };
  */
    return (
      <React.Fragment>
        {comments && cheched && (
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {filmOnePart.map((review) => {
                return (
                  <div className="review" key={review.id}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date">{getDateTime(review.date)}</time>
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
                  <div className="review" key={review.id}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date">{getDateTime(review.date)}</time>
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
  }
}
MovieReview.propTypes = {
  label: PropTypes.string,
  activeTab: PropTypes.string,
};

const mapStateToProps = (state) => ({
  comments: getFilmComments(state),
  loadingComments: getCommetsStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(film) {
    dispatch(DataOperations.loadComments(film.id));
  },
});

export {MovieReview};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReview);
