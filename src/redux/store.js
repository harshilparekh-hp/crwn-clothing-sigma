import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //used when debugging redux code.
import { persistStore } from 'redux-persist'; // It allow browser to cache the data depends upon configuration.

import rootReducer from './root.reducer';

const middlewares = [logger]; //this is array as the system might have multiple middlewares in future.

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //persisted version of the store, then it provides new store which persist the state (depends upon configuration)

export default { store, persistor };
