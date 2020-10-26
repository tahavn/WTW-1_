import {extend} from '../../utils';
import {films as allfilms} from '../../../mocks/films';

const ActionType = {
  GET_FILMS: `GET_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
};
const initialState = {
  films: allfilms,
  isLoading: false,
};

const ActionCreator = {
  loadFilms: () => ({
    type: ActionType.LOAD_FILMS,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return state;
    case ActionType.LOAD_FILMS:
      return extend(state, {isLoading: true});
    default:
      return state;
  }
};

export {reducer, ActionCreator};
