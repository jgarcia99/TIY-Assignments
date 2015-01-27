var assert = require('assert');

var events = require('../apis/github/users/jgarcia99/events.json')

assert(events.length);

function answer () {
    return {
        'total" : events.length
    }
} //END answer

describe('the setup', function() {
    it('should have events', function() {
        assert(events);
});
    
it('should have events', function() {
    assert(events);
    assert(typeof answer == 'function');
    });
});

describe('the answer', function () {
var theAnswer = answer();

    it('should have 30 total events', function() {
        assert(answer().total === 30);
    });
    
    it('should have some "PushEvent' entries', function() {
       as
       }
