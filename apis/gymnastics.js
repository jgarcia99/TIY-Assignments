var events = require('../apis/github/users/jgarcia99/events.json');
var _ = require('lodash');

var totalEvents = _.pluck(events,"type");

var pushEvents = _.result(events, "type", "PushEvent");



//console.log(totalEvents.length);
console.log(pushEvents.length);
