var Constants = require('../components/constants.js');
//var CalendarDispatcher = require('../dispatchers/flux_dispatcher.js')
//var React = require("React");
var Reflux = require("reflux");

var CalendarControlActions = Reflux.createActions(
  ["nextMonth", "prevMonth"]
)

// var CalendarActions = {
//     getDayStateCounts: function (day) {
//       CalendarDispatcher.handleViewAction({
//         actionType: Constants.GET_DAY_STATE_COUNTS,
//         day: day
//       })
//     },
//
//     getDayPosts: function (day) {
//       CalendarDispatcher.handleViewAction({
//         actionType: Constants.GET_DAY_POSTS,
//         day: day
//       })
//     },
//
//     nextMonth: function (currentMonth) {
//       CalendarDispatcher.handleViewAction({
//         actionType: Constants.NEXT_MONTH,
//         currentMonth: currentMonth
//       })
//     },
//
//     prevMonth: function (currentMonth) {
//       CalendarDispatcher.handleViewAction({
//         actionType: Constants.PREV_MONTH,
//         currentMonth: currentMonth
//       })
//     }
// }

module.exports = CalendarControlActions;
