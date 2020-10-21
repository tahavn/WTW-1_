import React, {PureComponent} from 'react';
import {films} from '../../../../mocks/films';
import {tags} from '../../../../mocks/tags';
import {getRandomElement} from '../../../utils';
import {connect} from 'react-redux';
import {getIsLoading} from '../../../store/data/selector';

import {
  getFilmsByGenre,
  getActiveTag,
} from '../../../store/show-films/selector';
import {ActionCreator} from '../../../store/show-films/show-films';
const withTags = (Component) => {
  class WithTags extends PureComponent {
    constructor(props) {
      super();
      this.state = {
        sortedFilms: null,
        sortedTag: `All genres`,
        activeFilm: null,
      };
      // this.handlerSorted = this.handlerSorted.bind(this);
      // this.handlerFilmClick = this.handlerFilmClick.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          randomFilm={getRandomElement(films)}
          handlerSorted={this.props.handlerSorted}
          handleSelectedFilms={this.props.handleSelectedFilms}
          tags={tags}
          activeTag={this.props.tag}
          films={this.props.films}
          isLoading={this.props.isLoading}
        />
      );
    }
  }
  const mapStateToProps = (state) => ({
    films: getFilmsByGenre(state),
    tag: getActiveTag(state),
    isLoading: getIsLoading(state),
  });
  const mapDispatchToProps = (dispatch) => ({
    handlerSorted(activeTag) {
      dispatch(ActionCreator.chooseGenre(activeTag));
    },
    handleSelectedFilms(film) {
      dispatch(ActionCreator.chooseFilm(film));
    },
  });
  return connect(mapStateToProps, mapDispatchToProps)(WithTags);
};

export default withTags;
