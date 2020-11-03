import {combineReducers} from 'redux';
import NameSpace from './name-space';
import {reducer as show} from './show-films/show-films-reducer';
import {reducer as data} from './data/data-reducer';
import {reducer as user} from './user/user-reducer';

export default combineReducers({
  [NameSpace.SHOW]: show,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
