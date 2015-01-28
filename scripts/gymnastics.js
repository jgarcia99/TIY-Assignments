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
    
    var pullRequests = events.filter(function(item){
        return item.type == 'PullRequestEvent';
     });   
    var issueComment = events.filter(function(item) {
        return item.type == 'IssueCommentEvent'
    });
       var createEvent = events.filter(function(item){
        return item.type == 'CreateEvent';
    });
    var deleteEvent = events.filter(function(item){
        return item.type == 'DeleteEvent';
    });
    var issuesEvent = events.filter(function(item){
        return item.type == 'IssuesEvent';
    });
    
    return { 
        'total': events.length,
        'PushEvent': {
            'total': pushEvents.length, 
        },
        'PullRequestEvent': {
            'total': pullRequests.length,
        },
        'IssueCommentEvent': {
        'total': issueComment.length,
        },
        'CreateEvent': {
            'total': createEvent.length,
        },
        'DeleteEvent': {
            'total': deleteEvent.length,
        },
        'IssuesEvent': {
            'total': issuesEvent.length,
        }
        
        };
   
}

console.log(answer(events.length));

var theAnswer = answer();

    it('should return that answer exists, and test for total events', function() {
        assert(events);
       
    });

    it('should return the length when calling answer function', 
function() {
        assert.equal(theAnswer.total, 30);
    });

    
    it('should have "pushEvent", and has a total count of push', function() {
        assert(theAnswer.PushEvent);
        assert.(theAnswer.PushEvent.total);
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
