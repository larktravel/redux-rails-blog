import React from 'react';
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {loadPosts, clearPosts, createPost} from '../action_creators'
import {Posts} from './Posts'

export class App extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div style={{maxWidth:'800'}}>
        <h2 className="well">Skylark Blog <span className="small">({this.props.posts.size} Posts Loaded)</span>
          <a className="btn btn-default pull-right"
             disabled={this.props.posts.size != 0}
             onClick={this.props.loadPosts}>
             Load Posts
          </a>
          <a style={{marginRight:10}}
             className="btn btn-danger pull-right"
             disabled={this.props.posts.size == 0}
             onClick={this.props.clearPosts}>
             Clear Posts
          </a>
          <a style={{marginRight:10}}
             className="btn btn-primary pull-right"
             onClick={this.props.createPost}>
             Create Post
          </a>
        </h2>
        <Posts posts={this.props.posts} />
      </div>

    );
  }
};

function mapStateToProps(state) {
  // console.log("mapStateToProps > state",state)
  return {
    posts: state.get('posts').sort(post => post.created).reverse()
  };
}

export default App = connect(
  mapStateToProps,
  {loadPosts, clearPosts, createPost}
)(App)