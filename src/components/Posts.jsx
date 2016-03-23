import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {Post} from './Post'

export class Posts extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <ul className="list-unstyled">
      {this.props.posts.map( post =>
        <Post key={post.id} title={post.title}
              body={post.body} />
      )}
      </ul>
    );
  }
};
