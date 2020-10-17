import {combineReducers} from 'redux';
import NameSpace from './name-space';
import {reducer as show} from './show-films/show-films';
import {reducer as data} from './data/reducer';

export default combineReducers({
  [NameSpace.SHOW]: show,
  [NameSpace.DATA]: data,
});
