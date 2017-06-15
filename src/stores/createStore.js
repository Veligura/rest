import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';


import {rootEpic} from './modules/index' ;
import rootReducer from './modules/index';


const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./modules/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;

}