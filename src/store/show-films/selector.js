import NameSpace from '../name-space';

const getActiveTag = (state) => {
  return state[NameSpace.SHOW].currentGenre;
};

const getFilmsByGenre = (state) => {
  const films = state[NameSpace.DATA].films;
  const tag = state[NameSpace.SHOW].currentGenre;
  if (tag === `All genres`) {
    return films;
  }
  return films.filter((item) => {
    return item.genre === tag;
  });
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

export {
  getFilmsByGenre,
  getActiveTag,
  getSelectedFilms,
  hasSelectedFilms,
  getFavoriteFilms,
};
