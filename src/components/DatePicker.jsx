import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker';


import './react-calendar.scss'

const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  }
};

const start = new moment().add(12, 'days');
const end   = new moment().add(17, 'days')
const range = moment.range(start, end);



const DatePicker = React.createClass({
  getInitialState() {
    return {
      value: range,
    };
  },
  handleSelect(range, states) {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    });
  },

  render() {
    return (
      <DateRangePicker
        firstOfWeek={1}
        numberOfCalendars={2}
        selectionType='range'
        minimumDate={new Date()}
        maximumDate={moment(new Date()).add(331, 'days')}
        stateDefinitions={stateDefinitions}
        defaultState="available"
        showLegend={false}
        value={this.state.value}
        onSelect={this.handleSelect} />
    );
  },
});


export default DatePicker;