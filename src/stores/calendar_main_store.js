/* *** MOST LOGIC IS HERE *** */

var CalendarDispatcher = require('../dispatchers/flux_dispatcher.js');
var Constants = require('../components/constants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter; //node's event EventEmitter
var CalendarLib = require('calendar').Calendar; //Generate Dates
var moment = require('moment'); //momentjs




var _cal = new CalendarLib(0);
var _initDate = new Date();
var _mDate = moment(_initDate)
var _monthDates = _cal.monthDates(_mDate.year(), _mDate.month());
var _monthNames = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");
var _dayNames = "mon tues wed thurs fri sat sun".split(" ");
//console.log("Module HERE", CalendarLib, _cal.weekStartDate(_initDate));


var CHANGE_EVENT = 'change';

/* = STATE ------------------------------------------------------------------ */
var currentYear;
var currentMonthIndex;
var currentMonthName;
var currentMonthDates = [];
var currentWeek;
var currentWeekDates=[];
var selectedDay;
var currentView; //'month'|'week'|'day'


/* = My functions to get ajaxed data ---------------------------------------- */
function _getDayStateCounts (day) {
  console.log("STATE COUNTS FOR ", day)
}

function _getDayPosts (day) {
  console.log("POSTS FOR ", day)
}

function _setCurrentYear (year) {
  currentYear = (year != null)? year : _initDate.getFullYear();
}

function _getCurrentYear () {
  if (currentYear == null) {
      _setCurrentYear();
  }
  return currentYear;
}

function _setCurrentMonthData (index) {
  var i = (index != null)? index : _initDate.getMonth();
  var year = _getCurrentYear();

  //bcuz 0 - 11 indexes for monthz
  if (i < 0) {
    i = 11;
    _setCurrentYear(--year);
  }
  if (i > 11) {
    i = 0;
    _setCurrentYear(++year);
  }

  currentMonthIndex = i;
  currentMonthName = _monthNames[currentMonthIndex];
  currentMonthDates = _cal.monthDates(currentYear, currentMonthIndex);
}

function _getCurrentMonthData () {
  if (currentMonthIndex == null) {
    _setCurrentMonthData();
  }

  return {
    index: currentMonthIndex,
    name: currentMonthName,
    dates: currentMonthDates
  }
}



/* = Calendar Store --------------------------------------------------------- */
var CalendarMainStore = assign(EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getCurrentView: function () {
    var view = (currentView)?  currentView : Constants.MONTH_VIEW;
    return view;
  },

  getCurrentYear: function () {
    return _getCurrentYear;
  },

  getCurrentMonthData: function () {
    return _getCurrentMonthData();
  },

  getAppState: function () {
    return  {
      view: this.getCurrentView(),
      month: _getCurrentMonthData(),
      year: _getCurrentYear(),
      today: _mDate
    }
  },

  getDayStateCounts: function () {
    return _getDayStateCounts;
  },

  getMonth: function (index) {
    return _getMonthData;
  },

  dispatcherIndex: CalendarDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
      case Constants.GET_DAY_POSTS:
        _getDayPosts(action.day);
        break;
      case Constants.GET_DAY_STATE_COUNTS:
        _getDayStateCounts(action.day);
        break;
      case Constants.NEXT_MONTH:
        console.log("triggered Next Month", action);
        _setCurrentMonthData(++action.currentMonth);
        break;
      case Constants.PREV_MONTH:
        console.log("triggered Prev Month", action);
        _setCurrentMonthData(--action.currentMonth);
        break;
      default:
        console.log("action was ", action.actionType);
    }

    CalendarMainStore.emitChange();
    return true;
  })

});


module.exports = CalendarMainStore;
