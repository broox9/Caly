var React = require("React");
var CalendarActions = require('../../actions/calendar_actions.js');
var CalendarStore = require('../../stores/calendar_main_store.js');

function _getAppState() {
  return CalendarStore.getAppState();
}

var Controls = React.createClass({
  handlePrevClick: function () {
    CalendarActions.prevMonth(this.state.month.index)
  },

  handleNextClick: function () {
    CalendarActions.nextMonth(this.state.month.index)
  },

  _onChange: function () {
    this.setState(CalendarStore.getAppState())
  },

  getInitialState: function () {
    return _getAppState();
  },

  componentWillMount: function () {
    //initial listenter set up
    CalendarStore.addChangeListener(this._onChange);
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
