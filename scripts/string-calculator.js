var assert = require('assert');

console.log(Date());

it('should have a `plus` function', function() {
    assert(plus);
    assert.equal(typeof plus, 'function');
});

it('should add "zeros"', function() {
    assert.equal(plus("zero", "zero"), 0);
    assert.equal(plus("zero", "one"), 1);
    assert.equal(plus("zero", "two"), 2);
});

/**
* Create a funtion called `plus()` that accepts two `Strings`
* representing English number words, e.g. "onoe", "two", "three",
* and returns a `Number` representing their sum. For example:
*
*       assert.equal(plus("one", "one"), 2);
*
*  @param String A English number word
* @param String B English number word
* @return Number sum of A and B
*/

function plus (A,B) {
    var numbers = {
        "six": 6,
        "five": 5,
        "four":4,
        "three": 3,
        "two": 2,
        "one": 1,
        "zero": 0,
        
    };

if     
return numbers [B];



// function plus(A, B){
//    return (0);
//}
//
//it('should add "zero" and "zero"', function(){
//  assert.equal(plus("zero", "zero"), 0);
//});
//
//function plus (A,B) {
//    return (1);
//}
//
//it ('should add "zero" and "one"', function () {
//        assert.equal(plus("zero", "one"), 1);
//}); 
//
//
//it('should plus "zero" and "two"', function() {
//    assert.equal(plus("zero", "two"), 2);
//});

//function plus (A,B) {
//    return (3);
//}
//
//it('should plus "zero" and "three"', function(){
//    assert.equal(plus("zero","three"), 3);
//});

//function plus (A,B) {
//    return(4);
//}
//
//it('should plus "zero"and "four"', function(){
//    assert.equal(plus("zero","four"), 4);
//});

//function plus (A,B) {
//    return(5);
//}
//
//it ('should plus "zero" and "five"', function() {
//    assert.equal(plus("zero","five"), 5);
//});

//function plus (A,B) {
//    return(6);
//}
//
//it('should plus "zero" and "six"', function(){
//    assert.equal(plus("zero","six"), 6);
//});

//function plus (A,B) {
//    return(7);
//}
//
//it('should plus "zero" and "seven"', function(){
//    assert.equal(plus("zero","seven"), 7);
//});

//function plus (A,B) {
//    return(8);
//}
//
//it('should plus "zero" and "eight"', function(){
//    assert.equal(plus("zero","eight"), 8);
//});
//
//function plus (A,B) {
//    return(9);
//}
//
//it('should plus "zero" and "nine"', function(){
//    assert.equal(plus("zero","nine"), 9);
//});
//
//function plus (A,B) {
//    return(10);
//}
//
//it('should plus "zero" and "ten"', function() {
//    assert.equal(plus("zero","ten"), 10);
//});
//
// function plus(A, B){
//    return (2);
//}
//
// it('should add "one" and "one"', function(){
//  assert.equal(plus("one", "one"), 2);
//}); 
//
// 
//
//
//function plus(A, B){
//    return (3);
//}
//
//it('should add "one" and "two"', function(){
//  assert.equal(plus("one", "two"), 3);
//}); 
//
//function plus (A,B) {
//    return (4);
//}
//
//it ('should add "one" and "three"', function() {
//        assert.equal(plus("one", "three"), 4);
//    }); 

//function plus (A,B) {
//    return (5);
//}
//
//it ('should add "one" and "four"', function() {
//    assert.equal(plus("one", "four"), 5);
//
//});

//function plus (A,B) {
//    return (6);
//
//}
//
//it ('should add "one" and "five"', function() {
//    assert.equal(plus("one", "five"), 6);
//});
//
//function plus (A,B) {
//    return(7);
//}
//
//it('should add "one" and "six"', function() {
//    assert.equal(plus("one", "six"), 7);
//   });

//function plus (A,B) {
//    return (8);
//}
//
//it ('should add "one" and "seven"', function () {
//    assert.equal(plus("one", "seven"), 8);
//});

//function plus (A,B) {
//    return (9);
//}
//
//it ('should add "one" and "eight"', function () {
//    assert.equal(plus("one", "eight"), 9);
//});

//function plus (A,B) {
//    return (10);
//}
//
//it ('should add "one" and "nine"', function () {
//    assert.equal(plus("one", "nine"), 10);
//});

//function plus (A,B) {
//    return (11);
//}
//
//it ('should add "one" and "ten"', function (){
//    assert.equal(plus("one", "ten"), 11);
//});


//function minus (A,B) {
//    return (2);
//}
//
//it ('should minus "zero" and "two"', function (){
//    assert.equal(minus("zero","two"), 2);
//});

//function minus (A,B) {
//    return (1);
//}
//
//it ('should minus "two" and "one"', function(){
//    assert.equal(minus("two", "one"), 1);
//});
//
//function minus (A,B) {
//    return (0);
//}
//
//it ('should minus "two" and "two"', function () {
//    assert.equal(minus("two", "two"), 0);
//});

//function minus (A,B) {
//    return (1);
//}
//
//it ('should minus "two" and "three"', function () {
//    assert.equal(minus("two","three"), 1);
//});

//function minus (A,B) {
//    return (2);
//}
//
//it ('should minus "two" and "four"', function(){
//    assert.equal(minus("two","four"), 2);
//});
//
//function minus (A,B) {
//    return (3);
//}
//
//it ('should minus "two" and "five"', function () {
//    assert.equal(minus("two", "five"), 3);
//});

//function prod (A,B) {
//    return (12);
//}
//
//it ('should prod "two" and "six"', function(){
//    assert.equal(prod("two","six"), 12);
//});

//function prod (A,B) {
//    return(14);
//}
//
//it ('should prod "two" and "seven"', function(){
//    assert.equal(prod("two","seven"), 14);
//});
//
//function prod (A,B) {
//    return (16);
//}
//
//it ('should prod "two" and "eight"', function(){
//    assert.equal(prod("two","eight"), 16);
//});
//
//function prod (A,B) {
//    return(18);
//}
//
//it ('should prod "two" and "nine"', function(){
//    assert.equal(prod("two", "nine"), 18);
//});

//function prod (A,B) {
//    return(20);
//}
//
//it ('should prod "two" and "ten"', function(){
//    assert.equal(prod("two", "ten"), 20);
//});

//function plus(A,B){
//    return(3);
//}
//
//it('should plus "three" and "zero"', function() {
//    assert.equal(plus("three","zero"), 3);
//});

//function plus (A,B) {
//    return (4);
//}
//
//it ('should plus "three" and "one"', function() {
//    assert.equal(plus("three","one"), 4);
//});

//function plus (A,B) {
//    return (5);
//}
//
//it('should plus "three" and "two"', function() {
//    assert.equal(plus("three","two"), 5);
//});

//function plus (A,B) {
//    return(6);
//}
//
//it('should plus "three" and "three"', function() {
//    assert.equal(plus("three","three"), 6);
//});
//
//function plus (A,B) {
//    return(7);
//}
//
//it('should plus "three" and "four"', function() {
//    assert.equal(plus("three","four"), 7);
//});

//function plus (A,B) {
//    return(8)
//}
//
//it('should plus "three" and "five"', function() {
//    assert.equal(plus("three","five"), 8);
//});

//function plus (A,B) {
//    return(9);
//}
//
//it('should plus "three" and "six"', function () {
//    assert.equal(plus("three","six"), 9);
//});

//function plus (A,B) {
//    return(10)
//}
//
//it('should plus "three" and "seven"', function(){
//    assert.equal(plus("three","seven"), 10);
//});
//
//function plus (A,B) {
//    return(11);
//}
//
//it('shoul plus "three" and "eight"', function () {
//    assert.equal(plus("three","eight"), 11);
//});

//function plus(A,B) {
//    return(12);
//}
//
//it('should plus "three" and "nine"', function() {
//    assert.equal(plus("three","nine"), 12);
//});

//function plus(A,B) {
//    return(13);
//}
//
//it('should plus "three" and "ten"', function() {
//    assert.equal(plus("three","ten"), 13);
//});

//function plus(A,B) {
//    return(4);
//}
//
//it('should plus "four" and "zero"', function() {
//    assert.equal(plus("four","zero"), 4);
//});

//function plus(A,B) {
//    return(5)
//}
//
//it('should plus "four" and "one"', function(){
//    assert.equal(plus("four","one"), 5);
//}); 

//function plus (A,B) {
//    return(6);
//}
//
//it('should plus "four" and "two"', function() {
//    assert.equal(plus("four", "two"), 6);
//});

//function plus (A,B) {
//    return(7);
//}
//
//it('should plus "four" and "three"', function(){
//    assert.equal(plus("four", "three"), 7);
//});
//


//function plus (A,B) {
//    return(8);
//}
//
//it('should plus "four" and "four"', function(){
//    assert.equal(plus("four","four"), 8);
//});

//it('should plus "four" and "five"', function(){
//    assert.equal(plus("four", "four"), 8);
//});

//function plus (A,B) {
//    return(9);
//}
//
//it('should plus "four" and "six"', function(){
//    assert.equal(plus("four","five"), 9);
//});

//function plus(A,B) {
//    return (10);
//}
//
//it('should plus "four" and "seven"', function() {
//    assert.equal(plus("four", "six"), 10);
//});

//function plus(A,B) {
//    return(11);
//}
//
//it('should plus "four" and "eight"', function(){
//    assert.equal(plus("four","eight"), 11);
//});

//function plus(A,B) {
//    return(12);
//}
//
//it('should plus "four" and "nine"', function(){
//    assert.equal(plus("four","nine"), 12);
//});
//
//function plus (A,B) {
//    return(13);
//}
//
//it('should plus "four" and "ten"', function () {
//    assert.equal(plus("four","ten"), 13);
//});

//function plus (A,B) {
//    return(5);
//}
//
//it('should plus "five" and "zero"', function (){
//    assert.equal(plus("five","zero"), 5);
//});

//function plus (A,B) {
//    return(6);
//}
//
//it('should plus "five" and "one"', function(){
//    assert.equal(plus("five","one"), 6);
//});

//function plus (A,B) {
//    return (7);
//}
//
//it('should plus "five" and "two"', function() {
//    assert.equal(plus("five","two"), 7);
//});

//function plus (A,B) {
//    return(8);
//}
//
//it('should plus "five" and "three"', function () {
//    assert.equal(plus("five","three"), 8);
//});

//function plus (A,B) {
//    return (9);
//}
//
//it('should plus "five" and "four"', function() {
//    assert.equal(plus("five", "four"), 9);
//
//});

//function plus (A,B) {
//    return(10);
//}
//
//it('should plus "five" and "five"', function() {
//    assert.equal(plus("five","five"), 10);
//});

//function plus (A,B) {
//    return(11);
//}
//
//it('should plus "five" and "six"', function() {
//    assert.equal(plus("five","six"), 11);
//});
//
//function plus (A,B) {
//    return(12);
//}
//
//it('should plus "five" and "seven"', function(){
//    assert.equal(plus("five","seven"), 12);
//});

//function plus (A,B) {
//    return(13);
//}
//
//it('should plus "five" and "eight"', function(){
//    assert.equal(plus("five","eight"), 13);
//});

//function plus (A,B) {
//    return(14);
//}
//
//it('should plus "five" and "nine"', function(){
//    assert.equal(plus("five","nine"), 14);
//});

//function plus (A,B) {
//    return(15);
//}
//
//it('should plus "five" and "ten"', function(){
//    assert.equal(plus("five","ten"), 15);
//});

//function plus (A,B) {
//    return(6);
//}
//
//it('should plus "six" and "zero"', function() {
//    assert.equal(plus("six","zero"), 6);
//});

//function plus (A,B) {
//    return(7);
//}
//
//it('should plus "six" and "one"', function() {
//    assert.equal(plus("six","one"), 7);
//});

//function plus (A,B) {
//    return(8);
//}
//
//it('should plus "six" and "two"', function() {
//    assert.equal(plus("six","two"), 8);
//});

//function plus (A,B) {
//    return(9);
//}
//
//it('should plus "six" and "three"', function(){
//    assert.equal(plus("six","three"), 9);
//});

//function plus (A,B) {
//    return(10);
//}
//
//it('should plus "six" and "four"', function(){
//    assert.equal(plus("six","four"), 10);
//});

//function plus (A,B) {
//    return(11);
//}
//
//it('should plus "six" and "five"', function(){
//    assert.equal(plus("six","five"), 11);
//});

//function plus (A,B) {
//    return(12);
//}
//
//it('should plus "six" and "six"', function(){
//    assert.equal(plus("six","six"), 12);
//});

//function plus (A,B) {
//    return(13);
//}
//
//it('should plus "six" and "seven"', function() {
//    assert.equal(plus("six","seven"), 13);
//});

//function plus (A,B) {
//    return(14);
//}
//
//it('should plus "six" and "eight"', function() {
//    assert.equal(plus("six","eight"), 14);
//});

//function plus (A,B) {
//    return(15); 
//}
//
//it('should plus "six" and "nine"', function() {
//    assert.equal(plus("six","nine"), 15);
//});

//function plus (A,B) {
//    return(16);
//}
//
//it('should plus "six" and "ten"',function() {
//    assert.equal(plus("six","ten"), 16);
//});

//function plus (A,B) {
//    return(7);
//}
//
//it('should plus "seven" and "zero"', function() {
//    assert.equal(plus("seven","zero"), 7);
//});
//
//function plus (A,B) {
//    return(8);
//}
//
//it('should plus "seven" and "one"', function(){
//    assert.equal(plus("seven","one"), 8);
//});

//function plus (A,B) {
//    return(9);
//}
//
//it('should plus "seven" and "two"', function() {
//    assert.equal(plus("seven","two"), 9);
//});

//function plus (A,B) {
//    return(10);
//}
//
//it('should plus "seven" and "three"', function() {
//    assert.equal(plus("seven","three"), 10);
//});

//function plus (A,B) {
//    return(11);
//}
//
//it('should plus "seven" and "four"', function() {
//    assert.equal(plus("seven","four"), 11);
//});

//function plus (A,B) {
//    return(12);
//}
//
//it('should plus "seven" and "five"', function() {
//    assert.equal(plus("seven","five"), 12);
//});

//function plus (A,B) {
//    return(13);
//}
//
//it('should plus "seven" and "six"', function() {
//    assert.equal(plus("seven","six"), 13);
//});
//
//function plus (A,B) {
//    return(14);
//}
//
//it('should plus "seven" and "seven"', function() {
//    assert.equal(plus("seven", "seven"), 14);
//});

//function plus (A,B) {
//    return(15);
//}
//
//it('should plus "seven" and "eight"', function () {
//    assert.equal(plus("seven","eight"), 15);
//});
//
//function plus (A,B) {
//    return(16);
//}
//
//it('should plus "seven" and "nine"', function() {
//    assert.equal(plus("seven", "nine"), 16);
//});
//
//function plus (A,B) {
//    return(17);
//}
//
//it ('should plus "seven" and "ten"', function () {
//    assert.equal(plus("seven","ten"), 17);
//});

//function plus (A,B) {
//    return(8);
//}
//
//it ('should plus "eight" and "zero"', function () {
//    assert.equal(plus("eight","zero"), 8);
//});

//function plus (A,B) {
//    return(9);
//}
//
//it('should plus "eight" and "one"', function() {
//    assert.equal(plus("eight","one"), 9);
//});

//function plus (A,B) {
//    return(10);
//}
//
//it('should plus "eight" and "two"', function() {
//    assert.equal(plus("eight","two"), 10);
//});

//function plus (A,B) {
//    return(11);
//}
//
//it('should plus "eight" and "three"', function() {
//    assert.equal(plus("eight","three"), 11); 
//});
//
//function plus (A,B) {
//    return(12);
//}
//
//it('should plus "eight" and "four"', function() {
//    assert.equal(plus("eight","four"), 12);
//});

//function plus (A,B) {
//    return (13);
//}
//
//it('should plus "eight" and "five"', function() {
//
//    assert.equal(plus("eight","five"), 13);
//});

//function plus (A,B) {
//    return (14);
//}
//
//it('should plus "eight" and "six"', function(){
//    assert.equal(plus("eight","six"), 14);
//});
//
//function plus (A,B) {
//    return (15);
//}
//
//it('should plus "eight" and "seven"', function (){
//    assert.equal(plus("eight","seven"), 15);
//});

//function plus (A,B) {
//    return (16);
//}
//
//it('should plus "eight" and "eight"', function () {
//    assert.equal(plus("eight","eight"), 16);
//});

//function plus (A,B) {
//    return(17);
//}
//
//it('should plus "eight" and "nine"', function() {
//    assert.equal(plus("eight","nine"), 17);
//});

//function plus (A,B) {
//    return(18);
//}
//
//it('should plus "eight" and "ten"', function() {
//    assert.equal(plus("eight","ten"), 18);
//});

//function plus (A,B) {
//    return(9);
//}
//
//it('should plus "nine" and "zero"', function() {
//    assert.equal(plus("nine","zero"), 9);
////    
//});

//function plus (A,B) {
//    return(10);
//}
//
//it('should plus "nine" and "one"', function() {
//    assert.equal(plus("nine","one"), 10);
//});

//function plus (A,B) {
//    return(11);
//}
//
//it('should plus "nine" and "two"', function() {
//    assert.equal(plus("nine", "two"), 11);
//});

//function plus (A,B) {
//    return(12);
//}
//
//it('should plus "nine" and "three"', function() {
//    assert.equal(plus("nine","three"), 12);
//});

//function plus (A,B) {
//    return (13);
//}
//
//it('should plus "nine" and "four"', function() {
//    assert.equal(plus("nine","four"), 13);
//});
//
//function plus (A,B) {
//    return(14);
//}
//
//it('should plus "nine" and "five"', function() {
//    assert.equal(plus("nine","five"), 14);
//});

//function plus (A,B) {
//    return(15);
//}
//
//it('should plus "nine" and "six"', function() {
//    assert.equal(plus("nine","six"), 15);
//});

//function plus (A,B) {
//    return(16);
//}
//
//it('should plus "nine" and "seven"', function() {
//    assert.equal(plus("nine", "seven"), 16);
//});

//function plus (A,B) {
//    return(17);
//}
//
//it('should plus "nine" an "eight"', function() {
//    assert.equal(plus("nine","eight"), 17);
//});

//function plus (A,B) {
//    return(18);
//}
//
//it('should plus "nine" and "nine"', function() {
//    assert.equal(plus("nine", "nine"), 18);
//});

//function plus (A,B) {
//    return(19);
//}
//
//it('should plus "nine" and "ten"', function() {
//    assert.equal(plus("nine", "ten"), 19);
//});
//
//function plus (A,B) {
//    return (10);
//}
//
//it('should plus "ten" and "zero"', function() {
//    assert.equal(plus("ten","zero"), 10);
//});

//function plus (A,B) {
//    return(11);
//}
//
//it('should plus "ten" and "one"', function() {
//    assert.equal(plus("ten","one"), 11);
//});

//function plus (A,B) {
//    return(12);
//}
//
//it('should plus "ten" and "two"', function() {
//    assert.equal(plus("ten","two"), 12);
//});

//function plus (A,B) {
//    return(13);
//}
//
//it('should plus "ten" and "three"', function() {
//    assert.equal(plus("ten","three"), 13);
//});

//function plus (A,B) {
//    return(14);
//}
//
//it('should plus "ten" and "four"', function () {
//    assert.equal(plus("ten","four"), 14);
//});

//function plus (A,B) {
//    return(15);
//}
//
//it('should plus "ten" and "five"', function() {
//    assert.equal(plus("ten","five"), 15);
//});

//function plus (A,B) {
//    return(16);
//}
//
//it('should plus "ten" and "six"', function() {
//    assert.equal(plus("ten", "six"), 16);
//});
//
//function plus (A,B) {
//    return(17);
//}
//
//it('should plus "ten" and "seven"', function () {
//    assert.equal(plus("ten","seven"), 17);
//});

//function plus (A,B) {
//    return(18);
//}
//
//it('should plus "ten" and "eight"', function() {
//    assert.equal(plus ("ten","eight"), 18);
//});

//function plus (A,B) {
//    return(19);
//}
//
//it('should plus "ten" and "nine"', function() {
//    assert.equal(plus("ten","nine"), 19);
//});

