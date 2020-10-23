import NameSpace from '../name-space';

const getUser = (state) => {
  return state[NameSpace.USER].user;
};


export {getUser};
