var events = require('../apis/github/users/jgarcia99/events.json');
var _ = require('lodash');

var totalEvents = events._.pluck(function(key) {
    return key.type == 'Events'
});

console.log(totalEvents);