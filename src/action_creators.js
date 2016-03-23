import { CALL_API } from 'redux-api-middleware';

// export const POSTS_REQUEST = 'POSTS_REQUEST'
// export const POSTS_SUCCESS = 'POSTS_SUCCESS'
// export const POSTS_FAILURE = 'POSTS_FAILURE'

export function loadPosts() {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3000/posts',
      method: 'GET',
      types: ['REQUEST','SUCCESS','FAILURE']
    }
  }
}

export function clearPosts() {
  return {
    type: 'CLEAR_POSTS'
  }
}