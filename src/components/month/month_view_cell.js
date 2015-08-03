var React = require('react');
var CalendarActions = require('../../actions/calendar_actions.js');

var MonthViewCell = React.createClass({
  getDayData: function () {
    console.log("cell clicked", this.props.date)
    CalendarActions.getDayStateCounts(this.props.date);
  },

  _timeClass: function (d) {
    var timeclass =  'calendar-past-date';
    var today = this.props.today;
    if (today.isBefore(d)) {
      timeclass="calendar-future-date"
    } else if (today.isSame(d, 'day')) {
      timeclass="calendar-today"
    }
    return timeclass
  },

  render: function () {
    var this_date = this.props.date.getDate();
    var timeClass = this._timeClass(this.props.date);
    return (
      <td data-date={this_date} data-row={this.props.rowNumber} className={timeClass} key={this.props.key} onClick={this.getDayData}>
        <span className="date-number">{this_date}</span>
      </td>
    )
  }
});

module.exports = MonthViewCell;
