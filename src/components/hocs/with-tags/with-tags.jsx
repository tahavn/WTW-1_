import React, {PureComponent} from 'react';
import {films} from '../../../../mocks/films';
import {tags} from '../../../../mocks/tags';
import {getRandomElement} from '../../../utils';
import {connect} from 'react-redux';
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
      this.handlerFilmMouseMove = this.handlerFilmMouseMove.bind(this);
      // this.handlerFilmClick = this.handlerFilmClick.bind(this);
    }

    componentDidMount() {
      this.setState({
        sortedFilms: films,
      });
    }
    componentDidUpdate() {
      // const newFilms = this.handlerSorted();
      // this.setState({
      //   sortedFilms: newFilms,
      // });
    }

    handlerFilmMouseMove(film) {
      // console.log(history);

      this.setState({
        activeFilm: film,
      });
    }

    // handlerSorted(activeTag) {
    //   this.setState({
    //     sortedTag: activeTag,
    //   });
    //   const newFilms = films.filter((item) => {
    //     if (this.state.sortedTag === `All genres`) {
    //       return item;
    //     }
    //     return item.genre === this.state.sortedTag;
    //   });
    //   this.setState({
    //     sortedFilms: newFilms,
    //   });
    // }
    render() {
      return (
        <Component
          {...this.props}
          randomFilm={getRandomElement(films)}
          handlerSorted={this.props.handlerSorted}
          tags={tags}
          activeTag={this.props.tag}
          films={this.props.films}
        />
      );
    }
  }
  const mapStateToProps = (state) => ({
    films: getFilmsByGenre(state),
    tag: getActiveTag(state),
  });
  const mapDispatchToProps = (dispatch) => ({
    handlerSorted(activeTag) {
      dispatch(ActionCreator.chooseGenre(activeTag));
    },
  });
  return connect(mapStateToProps, mapDispatchToProps)(WithTags);
};

export default withTags;
