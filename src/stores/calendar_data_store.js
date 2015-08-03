var CalendarDispatcher = require('../dispatchers/flux_dispatcher.js');
var Constants = require('../components/constants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter; //node's event EventEmitter
//var CalendarLib = require('calendar').Calendar; //Generate Dates
//var moment = require('moment'); //momentjs



var CalendarDataStore = assign(EventEmitter.prototype, {
  dispatcherIndex: CalendarDispatcher.register(function(payload) {
    var action = payload.action;

  //   switch (action.actionType) {
  //     case Constants.GET_DAY_POSTS:
  //       _getDayPosts(action.day);
  //       break;
  //     case Constants.GET_DAY_STATE_COUNTS:
  //       _getDayStateCounts(action.day);
  //       break;
  //     case Constants.NEXT_MONTH:
  //       console.log("triggered Next Month", action);
  //       _setCurrentMonthData(++action.currentMonth);
  //       break;
  //     case Constants.PREV_MONTH:
  //       console.log("triggered Prev Month", action);
  //       _setCurrentMonthData(--action.currentMonth);
  //       break;
  //     default:
  //       console.log("action was ", action.actionType);
  //   }
  //
  //   CalendarMainStore.emitChange();
  //   return true;
  })

});

module.exports = CalendarDataStore;
