import { combineReducers } from 'redux'
import {List, Map, fromJS} from 'immutable';

// import {
//   SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
//   REQUEST_POSTS, RECEIVE_POSTS
// } from './actions'

function users(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) {
  return state
}

function posts(state = fromJS({
  isFetching: false,
  didInvalidate: false,
  items: []
}), action) {
  console.log(`POSTS REDUCER > ${action.type} : action`,action);
  switch (action.type) {
    case 'REQUEST':
      // return Object.assign({}, state, {
      //   didInvalidate: true
      // })
      return state;
    case 'SUCCESS':
      // state = fromJS(state);
      const items = fromJS(action.payload);
      console.log("state",state);
      console.log("posts",items);
      state.set('items',items);
      // return Object.assign({}, state, {
      //   isFetching: true,
      //   didInvalidate: false
      // })
      // console.log("POSTS REDUCER > SUCCESS : action",action);
      return state;
    case 'FAILURE':
      // console.log("POSTS REDUCER > FAILURE : action",action);
      // return Object.assign({}, state, {
      //   isFetching: false,
      //   didInvalidate: false,
      //   items: action.posts,
      //   lastUpdated: action.receivedAt
      // })
      return state;
    default:
      return state
  }
}

// const reducers = combineReducers({
//   posts,
//   users
// })

// export default reducers
export default posts