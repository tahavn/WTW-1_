import NameSpace from '../name-space';
import {createSelector} from 'reselect';

const getIsLoading = (state) => {
  return state[NameSpace.DATA].isLoading;
};
const getFilmComments = (state) => state[NameSpace.DATA].comments;
const sendCommentStatus = (state) => ({
  commentsIsSending: state[NameSpace.DATA].sendingComment,
  sendingIsDone: state[NameSpace.DATA].sendCommentDone,
  sendingIsError: state[NameSpace.DATA].sendCommentError,
});

const getFilmById = (state, props) => {
  const film = getFilms(state).find((it) => it.id === props.selectedID);
  return film;
};

const getSimilarFilms = (state, id) => {
  const filmById = getFilmById(state, {selectedID: id});
  const films = getFilms(state).filter((film) => {
    return film.genre === filmById.genre && film.id !== id;
  });
  return films;
};

const getFilms = (state, props) => {
  return state[NameSpace.DATA].films;
};

// const getTags = (state) => {
//   const films = state[NameSpace.DATA].films;
//   const tags = films.map((f) => {
//     return f.genre;
//   });
//   return [...new Set(tags)];
// };
const getTags = createSelector(
  getFilms,
  (films) => {
    return [
      ...new Set(
        films.map((f) => {
          return f.genre;
        })
      ),
    ];
  }

  // return ;
);
const getSelectFilm = (state, id) => {
  return state.find((it) => it.id === id);
};

const getCommetsStatus = (state) => ({
  commentsIsLoading: state[NameSpace.DATA].loadingComments,
  loadingIsError: state[NameSpace.DATA].loadCommentsError,
});

export {
  getIsLoading,
  getCommetsStatus,
  getFilmComments,
  getFilms,
  getTags,
  getSelectFilm,
  getFilmById,
  getSimilarFilms,
  sendCommentStatus,
};
