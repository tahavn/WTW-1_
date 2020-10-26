import React, {PureComponent} from 'react';
const COUNT_OF_FILMS = 4;

const withCountFilms = (Component) => {
  class WithCountFilms extends PureComponent {
    constructor(props) {
      super();
      this.state = {
        numberOfmovie: COUNT_OF_FILMS,
      };
      this._handlerCountFilmAdd = this._handlerCountFilmAdd.bind(this);
      this._handlerCountFilmReset = this._handlerCountFilmReset.bind(this);
    }

    _handlerCountFilmAdd() {
      this.setState((state) => {
        return {numberOfmovie: state.numberOfmovie + COUNT_OF_FILMS};
      });
    }
    _handlerCountFilmReset() {
      this.setState({numberOfmovie: COUNT_OF_FILMS});
    }
    render() {
      return (
        <Component
          {...this.props}
          numberOfmovie={this.state.numberOfmovie}
          addMovies={this._handlerCountFilmAdd}
          resetMovies={this._handlerCountFilmReset}
        />
      );
    }
  }
  return WithCountFilms;
};

export default withCountFilms;
