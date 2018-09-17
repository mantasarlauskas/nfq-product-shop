import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger';
import { enableBatching } from 'redux-batched-actions';
import { loadState, saveState } from './localStorage';
import storeGenerator from './storeGenerator';
import thunk from 'redux-thunk';

const logger = createLogger({
  predicate: (getState, action) => !action.type.includes('@@redux-form'),
});
const persistedState = loadState();
const store = createStore(enableBatching(rootReducer), persistedState, applyMiddleware(thunk, logger));

store.subscribe(() => {
  saveState({
    categories: store.getState().categories,
    orders: store.getState().orders,
    products: store.getState().products
  });
});

if(persistedState === undefined) {
  storeGenerator(store);
}

export default store;