import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

export default createStore(
    rootReducer,
    compose(applyMiddleware(createLogger()))
);