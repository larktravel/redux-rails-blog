import { createStore, applyMiddleware, combineReducers } from 'redux';
import {Map, Iterable} from 'immutable';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';
import reducers from '../postReducer';

const stateTransformer = (state) => {
  // if (Iterable.isIterable(state)) return state.toJS();
  // else return state;
  return Map(state).toJS();
};

const loggerMiddleware = createLogger({

  stateTransformer
})

const reducer = reducers;
const createStoreWithMiddleware = applyMiddleware(apiMiddleware, loggerMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}