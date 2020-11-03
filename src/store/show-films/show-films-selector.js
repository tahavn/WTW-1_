import NameSpace from '../name-space';
import {createSelector} from 'reselect';

const getActiveTag = (state) => {
  return state[NameSpace.SHOW].currentGenre;
};
const getFilms = (state) => state[NameSpace.DATA].films;
// const getFilmsByGenre = (state) => {
//   const films = state[NameSpace.DATA].films;
//   const tag = state[NameSpace.SHOW].currentGenre;
//   if (tag === `All genres`) {
//     return films;
//   }
//   return films.filter((item) => {
//     return item.genre === tag;
//   });
// };

const getFilmsByGenre = (state) => {
  const films = getFilms(state);
  const tag = state[NameSpace.SHOW].currentGenre;

  if (tag === `All genres`) {
    return films;
  }

  const filmsByGenre = createSelector(getFilms, (items) => {
    return items.filter((item) => {
      return item.genre === tag;
    });
  });

  return filmsByGenre(state);
};
const getSelectedFilms = (state) => {
  return state[NameSpace.SHOW].favoriteFilms;
};

const hasSelectedFilms = (state) => {
  const favoriteFilms = state[NameSpace.SHOW].favoriteFilms;
  const select = state[NameSpace.SHOW].selectedFilm;
  return favoriteFilms.some((film) => film.id === select.id);
};
const getFavoriteFilms = (state) => {
  return state[NameSpace.SHOW].favoriteFilms;
};

export {getFilmsByGenre, getActiveTag, getSelectedFilms, hasSelectedFilms, getFavoriteFilms};
