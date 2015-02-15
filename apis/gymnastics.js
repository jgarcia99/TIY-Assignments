var events = require('../apis/github/users/jgarcia99/events.json');
var _ = require('lodash');

var totalEvents = _.pluck(events,"type" )

console.log(totalEvents.length);