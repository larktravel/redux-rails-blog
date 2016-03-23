import {List, Map, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function loadPosts(state, posts){
  return state.set('posts',fromJS(posts));
}

function clearPosts(state){
  return state.set('posts',[]);
}

function appendPost(state, post){
  return state.set('posts', state.get('posts').push(fromJS(post)));
}

export default function(state = Map(), action) {
  console.log("REDUCER > " + action.type, action);
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.newState);
  case 'LOAD_POSTS_REQUEST':
    return state
  case 'LOAD_POSTS_SUCCESS':
    return loadPosts(state, action.payload);
  case 'LOAD_POSTS_FAILURE':
    console.log("LOAD POSTS FAIL!")
    return state;
  case 'CLEAR_POSTS':
    return clearPosts(state);
  case 'CREATE_POST_REQUEST':
    return state;
  case 'CREATE_POST_SUCCESS':
    return appendPost(state, action.payload);
  case 'CREATE_POST_FAILURE':
    console.log("CREATE POST FAIL!")
    return state;
  }
  return state;
}