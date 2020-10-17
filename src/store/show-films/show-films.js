import {extend} from '../../utils';


const ActionType = {
  CHOOSE_FILM: `CHOOSE_FILM`,
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
};

const initialState = {
  currentGenre: `All genres`,
  filmsByGenre: [],
  sameFilms: [],
  selectedFilm: false,
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
    default:
      return state;
  }
}

export {reducer, ActionType, ActionCreator};
