import todoApp from './reducers';
import { createStore } from 'redux';

export default createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());