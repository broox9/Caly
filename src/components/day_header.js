var React = require('react');
var Constants = require('./constants.js');
var DayHeader = React.createClass({
  render: function () {
    //an array of arrays
    var days = Constants.DAY_NAMES.map(function (day, i) {
      return (
        <td>
          {day}
        </td>
      )
    });

    return (
      <table className="caly-day-header">
        <tr>
          {days}
        </tr>
      </table>
    )
  }
});

module.exports = DayHeader;
