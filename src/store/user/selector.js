import NameSpace from '../name-space';

const getUser = (state) => {
  return state[NameSpace.USER].user;
};

const getSelectedFilms = (state) => {
  return state[NameSpace.USER].selectedFilms;
};

const hasSelectedFilms = (state) => {
  const selectedFilms = state[NameSpace.USER].selectedFilms;
  const select = state[NameSpace.SHOW].selectedFilm;
  return selectedFilms.some((film) => film.id === select.id);
};

export {getUser, getSelectedFilms, hasSelectedFilms};
