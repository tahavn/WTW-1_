import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getFilmById, getIsLoading} from '../../store/data/data-selector';
import {Operations as DataOperations} from '../../store/data/data-reducer';
import Loading from '../../components/loading/loading';
const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: false,
        comment: false,
      };
      this.ratingArray = [1, 2, 3, 4, 5];
      this._handleChangeRating = this._handleChangeRating.bind(this);
      this._handleChangeComment = this._handleChangeComment.bind(this);
      this._handleSubmitReview = this._handleSubmitReview.bind(this);
    }

    _handleChangeRating(event) {
      event.preventDefault();
      const rating = event.target.value;
      this.setState({
        rating,
      });
    }

    _handleChangeComment(event) {
      event.preventDefault();
      const comment = event.target.value;
      this.setState({
        comment,
      });
    }

    _handleSubmitReview(event) {
      const {selectedFilm, handleSubmitReview} = this.props;
      const {comment, rating} = this.state;
      event.preventDefault();
      handleSubmitReview(selectedFilm.id, {
        rating,
        comment,
      });
    }

    componentDidMount() {
      const {loadFilms} = this.props;
      loadFilms();
    }

    render() {
      const {comment, rating} = this.state;
      const {selectedFilm, iSLoading} = this.props;
      if (!iSLoading) {
        return <Loading />;
      }
      return (
        <Component
          {...this.props}
          comment={comment}
          rating={rating}
          selectedFilm={selectedFilm}
          onChangeComment={this._handleChangeComment}
          onChangeReview={this._handleChangeRating}
          onSubmitReview={this._handleSubmitReview}
        />
      );
    }
  }
  WithComment.propTypes = {
    selectedFilm: PropTypes.object,
    iSLoading: PropTypes.bool,
    handleSubmitReview: PropTypes.func,
    loadFilms: PropTypes.func,
  };
  return WithComment;
};

const mapStateToProps = (state, props) => ({
  selectedFilm: getFilmById(state, props),
  iSLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitReview(review, id) {
    dispatch(DataOperations.sendComment(review, id));
  },
  loadFilms() {
    dispatch(DataOperations.loadFilms());
  },
});

export {withComment};
export default (Component) => connect(mapStateToProps, mapDispatchToProps)(withComment(Component));
