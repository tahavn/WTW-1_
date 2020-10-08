import React, {PureComponent} from 'react';
import Header from '../header/header';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {render} from 'react-dom';

class AddReview extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      rating: 0,
      'review-text': ``,
    };
    this.rating = [1, 2, 3, 4, 5];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }
  render() {
    const {id} = this.props.match.params;
    console.log(`рендер`);

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header Breadcrumbs={Breadcrumbs} id={id} />

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src="/img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <div className="rating">
              <div className="rating__stars">
                {this.rating.map((item, index) => {
                  const checked = +this.state.rating === item ? true : false;
                  return (
                    <React.Fragment key={item + index}>
                      <input
                        onChange={(event) => {
                          event.preventDefault();
                          this.handleChange(event);
                        }}
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
                onChange={(event) => {
                  this.handleChange(event);
                }}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
              ></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default AddReview;
