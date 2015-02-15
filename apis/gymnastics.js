var events = require('../apis/github/users/jgarcia99/events.json');
var _ = require('lodash');

var totalEvents = _.pluck(events,"type");

var pushEvents = _.result(events, "type", "PushEvent");

var pushPerDay = _.result(pushEvents, "created_at", function() {
    if ("created_at" <= )
})

//console.log(totalEvents.length);
console.log(pushEvents.length);
