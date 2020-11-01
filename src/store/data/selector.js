import NameSpace from '../name-space';
import {createSelector} from 'reselect';
const getIsLoading = (state) => {
  return state[NameSpace.DATA].isLoading;
};

const getFilmById = (state, props) => {
  const film = state[NameSpace.DATA].films.find((it) => it.id === props.selectedID);
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

export {getIsLoading, getFilms, getTags, getSelectFilm, getFilmById, getSimilarFilms};
