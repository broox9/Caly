// var React = require('react/addons');
var React = require('react');
//var Calendar = require('calendar').Calendar; //Generate Dates
//var CalendarActions = require('./actions/calendar_actions.js');
var Constants = require('./components/constants.js');
var MainView = require('./components/main_view.js');


Constants.MONTH_NAMES = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");
Constants.DAY_NAMES = "sun mon tues wed thurs fri sat".split(" ");



//TODO: set up stores
React.render(<MainView />, document.getElementById('container'));
