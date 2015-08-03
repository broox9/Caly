var React = require("React");
var Reflux = require("reflux");
var CalendarControlActions = require('../../actions/calendar_control_actions.js');
var CalendarStore = require('../../stores/calendar_main_store.js');



var Controls = React.createClass({
  mixins: [Reflux.connect(CalendarStore)],

  handlePrevClick: function () {
    CalendarControlActions.prevMonth()
  },

  handleNextClick: function () {
    CalendarControlActions.nextMonth();
  },

  _onChange: function () {
    this.setState(CalendarStore.getAppState())
  },

  componentWillMount: function () {
    //initial listenter set up
    //CalendarStore.addChangeListener(this._onChange);
  },
  render: function () {
    return (
      <div className="caly-controls-header">
        <div className="caly-controls-header-left">
            M | W | D
        </div>

        <div className="caly-controls-header-center">
            <button className="caly-controls-prev" onClick={this.handlePrevClick}>prev</button>
            <strong>{this.state.month.name} {this.state.year}</strong>
            <button className="caly-controls-next" onClick={this.handleNextClick}>next</button>
        </div>

        <div className="caly-controls-header-right">
            Counts and Such
        </div>


      </div>
    )
  }
})



module.exports = Controls;
