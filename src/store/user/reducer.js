import {extend} from '../../utils';

const ActionType = {

  USER_LOG_IN: `USER_LOG_IN`,
};

const ActionCreator = {

  singIn: (user) => ({
    type: ActionType.USER_LOG_IN,
    payload: user,
  }),
};

const initialState = {
  user: false,
  isLogin: false,

};


function reducer(state = initialState, action) {
  switch (action.type) {


    case ActionType.USER_LOG_IN:
      return extend(state, {
        user: action.payload,
      });
    default:
      return state;
  }
}

export {reducer, ActionType, ActionCreator};
