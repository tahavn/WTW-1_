import {extend} from '../../utils';
import {films as allfilms} from '../../../mocks/films';
import {adaptiveFilms} from '../../adapter';
const ActionType = {
  GET_FILMS: `GET_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  IS_LOAD_FILMS: `IS_LOAD_FILMS`,
};
const initialState = {
  films: [],
  isLoading: false,
};

const ActionCreator = {
  isLoadingFilm: () => ({
    type: ActionType.IS_LOAD_FILMS,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
};
const Operations = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api
      .get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data.map((film) => adaptiveFilms(film))));
        dispatch(ActionCreator.isLoadingFilm(true));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return state;
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload, isLoading: true});
    default:
      return state;
  }
};

export {reducer, ActionCreator, Operations};
