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
  console.log(state[`SHOW`].selectedFilm);
  console.log(selectedFilms);
  if (select && selectedFilms) {
    return selectedFilms.some((film) => film.id === select.id);
  }
  return false;
};
export {getUser, getSelectedFilms, hasSelectedFilms};
