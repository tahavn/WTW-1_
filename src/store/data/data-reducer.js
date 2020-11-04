import {extend} from '../../utils';
import {adaptiveFilms} from '../../adapter';

const EntryPoints = {
  COMMENTS: `/comments/`,
  FAVORITE: `/favorite`,
  FILMS: `/films`,
  PROMO: `/films/promo`,
};

const ActionType = {
  GET_FILMS: `GET_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  IS_LOAD_FILMS: `IS_LOAD_FILMS`,
  IS_LOADING_COMMENTS: `IS_LOADING_COMMENTS`,
  SEND_COMMENT_DONE: `SEND_COMMENT_DONE`,
  SEND_COMMENT_ERROR: `SEND_COMMENT_ERROR`,
  LOAD_COMMENTS_ERROR: `LOAD_COMMENTS_ERROR`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const initialState = {
  films: [],
  isLoading: false,
  isError: false,
  comments: false,
  loadingComments: true,
  loadCommentsError: false,

  sendingComment: false,
  sendCommentDone: false,
  sendCommentError: false,
};

const ActionCreator = {
  isLoadingFilm: () => ({
    type: ActionType.IS_LOAD_FILMS,
  }),
  isloadingComments: (load) => ({
    type: ActionType.IS_LOADING_COMMENTS,
    payload: load,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  sendCommentError: (error) => ({
    type: ActionType.SEND_COMMENT_ERROR,
    payload: error,
  }),
  sendCommentDone: (done) => ({
    type: ActionType.SEND_COMMENT_DONE,
    payload: done,
  }),
  isSendingComment: (flag) => ({
    type: ActionType.IS_LOADING_COMMENTS,
    payload: flag,
  }),
  loadCommentsError: (error) => ({
    type: ActionType.LOAD_COMMENTS_ERROR,
    payload: error,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
};
const Operations = {
  loadComments: (filmID) => (dispatch, _getState, api) => {
    return api
      .get(`${EntryPoints.COMMENTS}${filmID}`)
      .then((responce) => {
        dispatch(ActionCreator.loadComments(responce.data));
        dispatch(ActionCreator.isloadingComments(false));
        dispatch(ActionCreator.loadCommentsError(false));
        dispatch(ActionCreator.sendCommentDone(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.loadCommentsError(true));
        throw err;
      });
  },
  sendComment: (filmID, review) => (dispatch, _getState, api) => {
    dispatch(ActionCreator.isSendingComment(true));
    return api
      .post(`${EntryPoints.COMMENTS}${filmID}`, {
        rating: review.rating,
        comment: review.comment,
      })
      .then(() => {
        dispatch(ActionCreator.isSendingComment(false));
        dispatch(ActionCreator.sendCommentError(false));
        dispatch(ActionCreator.sendCommentDone(true));
      })
      .catch((err) => {
        dispatch(ActionCreator.isSendingComment(false));
        dispatch(ActionCreator.sendCommentError(true));
        dispatch(ActionCreator.sendCommentDone(false));
        throw err;
      });
  },
  loadFilms: () => (dispatch, _getState, api) => {
    return api
      .get(`${EntryPoints.FILMS}`)
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
    case ActionType.IS_LOADING_COMMENTS:
      return extend(state, {
        loadingComments: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.LOAD_COMMENTS_ERROR:
      return extend(state, {
        loadCommentsError: action.payload,
      });
    case ActionType.SEND_COMMENT_DONE:
      return extend(state, {
        sendCommentDone: action.payload,
      });
    case ActionType.SEND_COMMENT_ERROR:
      return extend(state, {
        sendCommentError: action.payload,
      });

    case ActionType.GET_FILMS:
      return state;
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload, isLoading: true});
    default:
      return state;
  }
};

export {reducer, ActionCreator, Operations};
