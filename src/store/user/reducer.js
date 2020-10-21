


import {extend} from '../../utils';


const ActionType = {
  SELECTED_FILMS: `SELECTED_FILMS`,
  USER_LOG_IN: `USER_LOG_IN`,
};

const ActionCreator = {
  selectedFilm: (film) => ({
    type: ActionType.SELECTED_FILMS,
    payload: film,
  }),
  singIn: (user) => ({
    type: ActionType.USER_LOG_IN,
    payload: user,
  }),
};

const initialState = {
  user: false,
  isLogin: false,
  selectedFilm: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SELECTED_FILMS:
      return extend(state, {
        selectedFilm: state.selectedFilm.push(action.payload),
      });
    case ActionType.USER_LOG_IN:
      return extend(state, {
        user: action.payload,
      });
    default:
      return state;
  }
}

export {reducer, ActionType, ActionCreator};
