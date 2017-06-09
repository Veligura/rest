import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';


import {rootEpic} from './modules/index' ;
import rootReducer from './modules/index';


const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
    return store;
}