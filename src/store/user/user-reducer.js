import {extend} from '../../utils';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  user: false,
  isLogin: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
  authorizationInProgress: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_ACTIVE_FILM: `CHANGE_ACTIVE_FILM`,
  CHECK_STATUS: `CHECK_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_USER_DATA: `SET_USER_DATA`,
  ERROR_AUTHORIZATION: `ERROR_AUTHORIZATION`,
  SET_PROGRESS_STATUS: `SET_PROGRESS_STATUS`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  errorAuthorization: (error) => ({
    type: ActionType.ERROR_AUTHORIZATION,
    payload: error,
  }),

  setProgressStatus: (status) => ({
    type: ActionType.SET_PROGRESS_STATUS,
    payload: status,
  }),

  setUserData: (userData) => ({
    type: ActionType.SET_USER_DATA,
    payload: userData,
  }),
};

const Operations = {
  checkAuth: () => (dispatch, _getState, api) => {
    dispatch(ActionCreator.setProgressStatus(true));

    return api
      .get(`/login`)
      .then((responce) => {
        dispatch(ActionCreator.errorAuthorization(false));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(responce.data));
        dispatch(ActionCreator.setProgressStatus(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setProgressStatus(false));
        throw err;
      });
  },
  login: (authData) => (dispatch, _getState, api) => {
    dispatch(ActionCreator.setProgressStatus(true));
    return api
      .post(`/login`, {
        email: authData.email,
        password: authData.password,
      })
      .then((responce) => {
        dispatch(ActionCreator.errorAuthorization(false));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(responce.data));
        dispatch(ActionCreator.setProgressStatus(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.errorAuthorization(true));
        dispatch(ActionCreator.setProgressStatus(false));
        throw err;
      });
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_USER_DATA:
      return extend(state, {
        user: action.payload,
      });
    case ActionType.ERROR_AUTHORIZATION:
      return extend(state, {
        authorizationError: action.payload,
      });
    case ActionType.SET_PROGRESS_STATUS:
      return extend(state, {
        authorizationInProgress: action.payload,
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
}

export {reducer, ActionType, ActionCreator, Operations, AuthorizationStatus};
