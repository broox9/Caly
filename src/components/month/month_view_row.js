var moment = require('moment');
var React = require('react');
var MonthViewCell = require('./month_view_cell.js');

var MonthViewRow = React.createClass({
  render: function () {
    var _row = this.props.rowNumber;
    var today_prop = this.props.today;
    var days = this.props.dates.map(function(date, i) {
        return <MonthViewCell date={date} today={today_prop} key={_row + "_" + i} rowNumber={_row} />
    });

    return (<tr data-row={_row} key={_row}>{days}</tr>)
  }
});


module.exports = MonthViewRow;
