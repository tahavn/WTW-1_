import React, {PureComponent} from 'react';
import {films} from '../../../../mocks/films';
import {tags} from '../../../../mocks/tags';
import {getRandomElement} from '../../../utils';

const withTags = (Component) => {
  class WithTags extends PureComponent {
    constructor(props) {
      super();
      this.state = {
        sortedFilms: null,
        sortedTag: `All genres`,
        activeFilm: null,
      };
      this.handlerSorted = this.handlerSorted.bind(this);
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

    handlerSorted(activeTag) {
      this.setState({
        sortedTag: activeTag,
      });
      const newFilms = films.filter((item) => {
        if (this.state.sortedTag === `All genres`) {
          return item;
        }
        return item.genre === this.state.sortedTag;
      });
      this.setState({
        sortedFilms: newFilms,
      });
    }
    render() {
      return (
        <Component
          {...this.props}
          randomFilm={getRandomElement(films)}
          handlerSorted={this.handlerSorted}
          tags={tags}
          activeTag={this.state.sortedTag}
          films={this.state.sortedFilms}
        />
      );
    }
  }

  return WithTags;
};

export default withTags;
