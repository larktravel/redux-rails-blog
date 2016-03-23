import {List, Map, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function loadPosts(state, posts){
  // const posts = state.get('posts')
  return state.set('posts',posts);
}

function clearPosts(state){
  return state.set('posts',[]);
}


export default function(state = Map(), action) {
  console.log("REDUCER > " + action.type, action);
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.newState);
  case 'REQUEST':
    return state
  case 'SUCCESS':
    return loadPosts(state, action.payload);
  case 'FAILURE':
    return state;
  case 'CLEAR_POSTS':
    return clearPosts(state);
  }
  return state;
}