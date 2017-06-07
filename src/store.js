import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

export default createStore(
    rootReducer,
    applyMiddleware(createLogger()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);