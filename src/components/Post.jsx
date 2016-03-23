import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class Post extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    // console.log("loadPosts()",loadPosts());
    // this.props.loadPosts();
    console.log("PROPS",this.props);
    return (



      <li style={{marginTop:'25px',maxWidth:'800'}}>
        <h4>{this.props.title || "Untitled Post"}</h4>
        <p>{this.props.body || "Empty"}</p>
      </li>

    );
  }
};
