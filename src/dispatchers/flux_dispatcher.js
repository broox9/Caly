var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign'); //basically "extend"


var CalendarDispatcher = assign(new Dispatcher(), {
  handleViewAction: function (action) {
    console.log("Dispatched Action: ", action);
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    })
  }
})

module.exports = CalendarDispatcher;
