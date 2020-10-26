import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withCountFilm from './with-count-films';

const COUNT_OF_FILMS = 4;

Enzyme.configure({
  adapter: new Adapter(),
});

const mockComponent = () => {
  return <div></div>;
};

describe('HOC withCountFilm', () => {
  const numberOfmovie = COUNT_OF_FILMS;
  const handlerCountFilmAdd = jest.fn();
  const handlerCountFilmReset = jest.fn();

  it('should be with component addShowMovies', () => {
    const ComponentWrapped = withCountFilm(mockComponent);
    const wrapped = mount(
      <ComponentWrapped
        numberOfmovie={numberOfmovie}
        addMovies={handlerCountFilmAdd}
        resetMovies={handlerCountFilmReset}
      />
    );
    wrapped.instance()._handlerCountFilmAdd();
    expect(wrapped.state().numberOfmovie).toEqual(
      numberOfmovie + COUNT_OF_FILMS
    );
  });

  it('should be with reset showMovies', () => {
    const ComponentWrapped = withCountFilm(mockComponent);
    const wrapped = mount(
      <ComponentWrapped
        numberOfmovie={numberOfmovie}
        addMovies={handlerCountFilmAdd}
        resetMovies={handlerCountFilmReset}
      />
    );
    wrapped.instance()._handlerCountFilmAdd();
    wrapped.instance()._handlerCountFilmReset();
    expect(wrapped.state().numberOfmovie).toEqual(COUNT_OF_FILMS)
    
  });
});
