var React = require('react');
var MonthViewRow = require('./month_view_row.js');
var CalendarStore = require('../../stores/calendar_main_store.js');
// today={mDate} monthData={monthData} monthNames={monthNames} dayNames={dayNames}


var MonthView = React.createClass({
  getInitialState: function () {
    return CalendarStore.getAppState();
  },

  componentWillMount: function () {
    //initial listenter setup
    CalendarStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState( CalendarStore.getAppState() );
  },

  render: function () {
    //an array of arrays
    var today_prop = this.state.today
    var rows = this.state.month.dates.map(function (arr, i) {
      return <MonthViewRow today={today_prop} rowNumber={i} dates={arr} />
    });

    return (
      <table className="caly-month-view">
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
});

module.exports = MonthView;
