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

  IS_LOADING_FAVORITE_FILM: `IS_LOADING_FAVORITE_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  LOAD_FAVORITE_FILMS_ERROR: `LOAD_FAVORITE_FILMS_ERROR`,

  IS_LOADING_PROMO_FILM: `IS_LOADING_PROMO_FILM`,
  LOAD_PROMO_FILMS: `LOAD_PROMO_FILMS`,
  LOAD_PROMO_FILMS_ERROR: `LOAD_PROMO_FILMS_ERROR`,
  SEND_FAVORITE_FILM: `SEND_FAVORITE_FILM`,
  SEND_FAVORITE_FILM_DONE: `SEND_FAVORITE_FILM_DONE`,
  SEND_FAVORITE_FILM_ERROR: `SEND_FAVORITE_FILM_ERROR`,
};

const initialState = {
  films: [],
  isLoading: false,
  isError: false,

  isLoadingPromo: true,
  filmPromo: false,
  isErrorPromo: false,

  comments: false,
  loadingComments: true,
  loadCommentsError: false,

  sendingComment: false,
  sendCommentDone: false,
  sendCommentError: false,

  isLoadingFavoriteFilms: true,
  favoriteFilms: [],
  isFavoriteFilmsError: false,
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

  isLoadingPromo: (load) => ({
    type: ActionType.IS_LOADING_PROMO_FILM,
    payload: load,
  }),

  loadPromo: (promoFilm) => ({
    type: ActionType.LOAD_PROMO_FILMS,
    payload: promoFilm,
  }),

  loadPromoError: (error) => ({
    type: ActionType.LOAD_PROMO_FILMS_ERROR,
    payload: error,
  }),

  isSendingFavoriteFilm: (review) => ({
    type: ActionType.SEND_FAVORITE_FILM,
    payload: review,
  }),
  sendFavoriteFilmDone: (done) => ({
    type: ActionType.SEND_FAVORITE_FILM_DONE,
    payload: done,
  }),
  sendFavoriteFilmError: (error) => ({
    type: ActionType.SEND_FAVORITE_FILM_ERROR,
    payload: error,
  }),

  isLoadingFavoriteFilm: (load) => ({
    type: ActionType.IS_LOADING_FAVORITE_FILM,
    payload: load,
  }),
  loadFavoriteFilms: (favoritsFilms) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: favoritsFilms,
  }),
  loadingFavoriteFilmsError: (error) => ({
    type: ActionType.LOAD_FAVORITE_FILMS_ERROR,
    payload: error,
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
  loadFavoriteFilms: () => (dispatch, _getState, api) => {
    return api
      .get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.isLoadingFavoriteFilm(false));
        dispatch(ActionCreator.loadingFavoriteFilmsError(false));
        dispatch(ActionCreator.loadFavoriteFilms(response.data.map((film) => adaptiveFilms(film))));
      })
      .catch((err) => {
        dispatch(ActionCreator.loadingFavoriteFilmsError(true));
        throw err;
      });
  },

  loadFilmPromo: () => (dispatch, _getState, api) => {
    return api
      .get(`/films/promo`)
      .then((response) => {
        console.log(response.data);
        dispatch(ActionCreator.isLoadingPromo(false));
        dispatch(ActionCreator.loadPromoError(false));
        dispatch(ActionCreator.loadPromo(response.data));
        // dispatch(ActionCreator.loadPromo(response.data((film) => adaptiveFilms(film))));
      })
      .catch((err) => {
        dispatch(ActionCreator.loadPromoError(false));
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

    case ActionType.IS_LOADING_PROMO_FILM:
      return extend(state, {
        isLoadingPromo: action.payload,
      });
    case ActionType.LOAD_PROMO_FILMS:
      return extend(state, {
        filmPromo: action.payload,
      });
    case ActionType.LOAD_PROMO_FILMS_ERROR:
      return extend(state, {
        isErrorPromo: action.payload,
      });

    case ActionType.IS_LOADING_FAVORITE_FILM:
      return extend(state, {isLoadingFavoriteFilms: action.payload});
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {favoriteFilms: action.payload});
    case ActionType.LOAD_FAVORITE_FILMS_ERROR:
      return extend(state, {isFavoriteFilmsError: action.payload});
    case ActionType.GET_FILMS:
      return state;
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload, isLoading: true});
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operations};
