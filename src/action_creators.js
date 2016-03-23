import { CALL_API } from 'redux-api-middleware';

export function loadPosts() {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3000/posts',
      method: 'GET',
      types: ['LOAD_POSTS_REQUEST','LOAD_POSTS_SUCCESS','LOAD_POSTS_FAILURE']
    }
  }
}

export function clearPosts() {
  return {
    type: 'CLEAR_POSTS'
  }
}

export function createPost(){
  const formData = new FormData();
  formData.append('title', 'Posted Title 2');
  formData.append('category', 'Posted Category');
  formData.append('body', 'Posted Body');
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3000/posts',
      method: 'POST',
      body: formData,
      types: ['CREATE_POST_REQUEST', 'CREATE_POST_SUCCESS', 'CREATE_POST_FAILURE']
    }
  }
}