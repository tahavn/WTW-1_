import NameSpace from '../name-space';

const getUser = (state) => {
  return state[NameSpace.USER].user;
};
const getAuthStatus = (state) =>{
  return {
    status: state[NameSpace.USER].authorizationStatus,
    error: state[NameSpace.USER].authorizationError,
    isProgress: state[NameSpace.USER].authorizationInProgress,
  }
}

export {getUser,getAuthStatus};
