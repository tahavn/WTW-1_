import {films} from '../../../mocks/films';
import {ActionType, reducer} from './show-films-reducer.js';

describe(`Reducer show-film`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentGenre: `All genres`,
      favoriteFilms: [],
      filmsByGenre: [],
      sameFilms: [],
      selectedFilm: false
    });
  });

  it(`Return selectedFilm after change`, () => {
    expect(reducer({
      selectedFilm: false,
    }, {
      type: ActionType.CHOOSE_FILM,
      payload: films,
    })).toEqual({
      selectedFilm: films,
    });
  });

  it(`Return currentGenre after change`, () => {
    expect(reducer({
      currentGenre: `All genres`,
    }, {
      type: ActionType.CHOOSE_GENRE,
      payload: (`Drama`),
    })).toEqual({
      currentGenre: `Drama`,
    });
  });
});
