import NameSpace from '../name-space';
import {films as allfilms} from '../../../mocks/films';

const ActionType = {
  GET_FILMS: `GET_FILMS`,
};
const initialState = {
  films: allfilms,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return state;
    default:
      return state;
  }
};

export {reducer};
