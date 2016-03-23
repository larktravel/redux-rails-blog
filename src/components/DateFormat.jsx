import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

var moment = require('moment');

export default class DateFormat extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const stringFormatter = (value) => {
      switch(value){
        case 'short':
          return "MM/DD/YYYY"
        case 'short-time':
          return "MM/DD/YYYY h:mma"
        case 'medium':
          return "ddd, MMM Do YYYY"
        case 'medium-time':
          return "ddd, MMM Do YYYY h:mma"
        case 'post-time':
          return "ddd, MMM Do h:mma"
        case 'long':
          return "dddd, MMMM Do YYYY"
        case 'system':
          return "YYYY-MM-DD"
        default:
          return value
      }
    }
    return (
      <span>{moment(this.props.date).format(stringFormatter(this.props.format))}</span>
    )
  }
}

DateFormat.PropTypes= {
  date: React.PropTypes.instanceOf(Date),
  format: React.PropTypes.string,
}

//onClick={this.props.onRoomChoice}