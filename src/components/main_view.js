var React = require('react');
var MonthView = require('./month/month_view.js');
var DayHeader = require('./day_header.js');
var Controls = require('./controls/control_header.js');

var MainView = React.createClass({
  getInitialState: function () {
    return {}
  },
  render: function () {
    //an array of arrays
    return (
      <div id="caly">
        <Controls />
        <DayHeader />
        <MonthView />
      </div>
    )
  }
});

module.exports = MainView;
