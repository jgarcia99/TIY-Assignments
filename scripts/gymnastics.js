var events = 
require('../apis/github/users/jgarcia99/events.json');
var assert = require('assert');

    it('should tell us that events has an input', function () {
        assert(events);
    });

function answer() {
    var pushEvents = events.filter(function(item){
        return item.type == 'PushEvent';
    });
    var days = events.filter(function() {
        return item.type == 'updated_at';
    });
    return { 
        'total': events.length,
        'PushEvent': {
            'total': pushEvents.length 
        }
            
    };
    console.log(pushEvents.length);
}

console.log(answer());
var theAnswer = answer();

    it('should return that answer exists, and test for total events', function() {
        assert(answer);
        assert(events.length === 30);
    });

    it('should return the length when calling answer function', 
function() {
        assert.equal(theAnswer.total, 30);
    });

    
    it('should have "pushEvent", and has a total count of push', function() {
        assert(theAnswer.PushEvents);
        assert.equal(theAnswer.PushEvents.total);
    });




//var assert = require('assert');
//
//var events = 
//require('../apis/github/users/jgarcia99/events.json');
//
//function answer () {
//    return {
//        'total': events.length 
//    }
//} // END answer
//
//assert(events);
//assert(events);
//assert(typeof answer == 'function');
//
//var theAnswer = answer ();
//
//assert.equal(theAnswer.total, 30);
//assert.(theAnswer.PushEvents);
//assert(theAnswer.PushEvents.total); 
