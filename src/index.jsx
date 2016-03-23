import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './utils/configureStore'
import {List, Map, fromJS} from 'immutable';

import App from './components/App';


const initialState = Map({
  posts: [] ,
  isLoading: false
})

const store = configureStore(initialState);

store.dispatch({type: 'SET_STATE', newState: initialState});


ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <App />
    </div>
  </Provider>,
  document.getElementById('app')
);