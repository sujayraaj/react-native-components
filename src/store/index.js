import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
 
const appHistory = createHistory();


// import the root reducer
import rootReducer from '../reducers';


// create an object for the default data
const defaultState = {
};

// CREATE STORE
const store = createStore(rootReducer, defaultState

// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export const history = syncHistoryWithStore(appHistory, store);
export default store;
