import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';

import ui from './ui';
import map  from './map';

import {mapEpic}  from './map';

export const rootEpic = combineEpics(
    mapEpic
);

export default  rootReducer = combineReducers({
     map
});

