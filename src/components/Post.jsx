import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DateFormat from './DateFormat';

export class Post extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    // console.log("PROPS",this.props);
    return (
      <li style={{marginTop:'25px',maxWidth:'800',borderTop: '1px dashed #ccc'}}>
        <h4>{this.props.title || "Untitled Post"}
          <span className="small pull-right">
           <DateFormat date={this.props.created} format="post-time" />
           </span>
        </h4>
        <p>{this.props.body || "Empty"}</p>
      </li>

    );
  }
};
