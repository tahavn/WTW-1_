import {extend} from '../../utils';

const ActionType = {
  CHOOSE_FILM: `CHOOSE_FILM`,
  SELECTED_FILMS: `SELECTED_FILMS`,
  DELETE_FILMS: `DELETE_FILMS`,
  CHOOSE_GENRE: `CHOOSE_GENRE`,
};

const ActionCreator = {
  chooseFilm: (film) => ({
    type: ActionType.CHOOSE_FILM,
    payload: film,
  }),
  chooseGenre: (genre) => ({
    type: ActionType.CHOOSE_GENRE,
    payload: genre,
  }),
  selectedFilm: (film) => ({
    type: ActionType.SELECTED_FILMS,
    payload: film,
  }),
  deleteFilm: (film) => ({
    type: ActionType.DELETE_FILMS,
    payload: film,
  }),
};

function deleteFilm(array, film) {
  const index = array.findIndex((f) => f.id === film.id);
  return array.slice(0, index).concat(array.slice(index + 1));
}

const initialState = {
  currentGenre: `All genres`,
  filmsByGenre: [],
  sameFilms: [],
  selectedFilm: false,
  favoriteFilms: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHOOSE_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });
    case ActionType.CHOOSE_FILM:
      return extend(state, {
        selectedFilm: action.payload,
      });
    case ActionType.SELECTED_FILMS:
      return extend(state, {
        favoriteFilms: [...state.favoriteFilms, action.payload],
      });

    case ActionType.DELETE_FILMS:
      return extend(state, {
        favoriteFilms: deleteFilm(state.favoriteFilms, action.payload),
      });
    default:
      return state;
  }
}

export {reducer, ActionType, ActionCreator};
