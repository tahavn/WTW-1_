import React, {PureComponent} from 'react';
import Header from '../header/header';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {render} from 'react-dom';
import {sendCommentStatus} from '../../store/data/data-selector';
import {connect} from 'react-redux';

const ReviewLength = {
  MIN: 50,
  MAX: 400,
};

const AddReview = (props) => {
  const {
    selectedID,
    selectedFilm,
    Breadcrumbs,
    comment,
    history,
    rating,
    onChangeComment,
    onChangeReview,
    onSubmitReview,
    sendingComment,
  } = props;

  const ratingArray = [1, 2, 3, 4, 5];

  const isValidReview = rating && comment ? false : true;
  const isSendingReview = () => {
    if (sendingComment.sendingIsDone) {
      history.goBack();
    }
    if (sendingComment.commentIsSinding && !sendingComment.sendingIsError) {
      return ``;
    } else if (sendingComment.commentIsSinding && sendingComment.sendingIsError) {
      return `Sending review can't be done ,Something went wrong`;
    }
    return null;
  };
  const isBlocked = sendingComment.commentIsSinding && !sendingComment.sendingIsError ? true : false;
  return (
    <section style={{backgroundColor: selectedFilm.background_color}} className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={`${selectedFilm.background_image}`} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header Breadcrumbs={Breadcrumbs} id={+selectedID} />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={`${selectedFilm.poster_image}`} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" disabled={isBlocked} className="add-review__form" onSubmit={onSubmitReview}>
          <div className="rating">
            <div key={rating} className="rating__stars">
              {ratingArray.map((item) => {
                const checked = +rating === item ? true : false;
                return (
                  <React.Fragment key={item}>
                    <input
                      onChange={onChangeReview}
                      className="rating__input"
                      id={`star-${item}`}
                      type="radio"
                      name="rating"
                      value={`${item}`}
                      checked={checked}
                    />
                    <label className="rating__label" htmlFor={`star-${item}`}>
                      Rating {item}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              disabled={isBlocked}
              onChange={onChangeComment}
              minLength={ReviewLength.MIN}
              maxLength={ReviewLength.MAX}
              className="add-review__textarea"
              name="comment"
              id="review-text"
              placeholder="Review text"
            ></textarea>
            <div className="add-review__submit">
              <button disabled={isValidReview} className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
          {isSendingReview()}
        </form>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  sendingComment: sendCommentStatus(state),
});
export default connect(mapStateToProps)(AddReview);
