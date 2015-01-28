var assert = require('assert');

//
//
//function toEnglish(a) {
//    if(a == 1) {
//    return "one";
//    } else {
//        return "this is not number 1";
//    }
//                     
//};
//
//it ('should equal the english word "one" instead of "1"', function() {
//assert.equal(toEnglish(1), "one");
//});

//function toEnglish (a) {
//    if (a == 2) {
//        return "two"
//    } else {
//        return "this is not number 2";
//    }
//};
//
//it ('should equal the english word "two" instead of "2"', function (){
//    assert.equal(toEnglish(2), "two");
//});

//function toEnglish (a) {
//    if (a == 3) {
//        return "three"
//    } else {
//        return "this is not number 3";
//    }
//}
//
//it ('should equal the english word "three" instead of "3"', function () {
//    assert.equal(toEnglish(3), "three");
//});

//function toEnglish (a) {
//    if (a == 4) {
//        return "four"
//    }   else {
//        return "this is not numnber 4";
//    }
//}
//
//it ('should equal the english word "four" instead of "4"', function() {
//    assert.equal(toEnglish(4), "four");
//});
//
//function toEnglish (a) {
//    if (a==5) {
//        return "five"
//    } else {
//        return "this is not number 5";
//    }
//}
//
//it ('should equal the english word "five" instead of "5"', function() {
//    assert.equal(toEnglish(5), "five");
//});
//
//function toEnglish (a) {
//    if (a==6) {
//        return "six"
//    } else {
//        return "this is not number 6";
//    }
//}
//
//it ('should equal the english word "six" instead of "6"', function (){
//    assert.equal(toEnglish(6), "six");
//});

//function toEnglish (a) {
//    if (a==7) {
//        return "seven"
//    } else {
//        return "this is not number 7";
//    }
//}
//
//it ('should equal the english word "seven" instead of "seven"', function() {
//    assert.equal(toEnglish(7), "seven");
//});

//function toEnglish (a) {
//    if (a==8) {
//        return "eight"
//    } else {
//        return "this is not  number 8";
//    }
//}
//
//it ('should equal the english word "eight" instead of "8"', function () {
//    assert.equal(toEnglish(8), "eight");
//});
//
//function toEnglish (a) {
//    if (a==9) {
//        return "nine"
//    } else {
//        return "this is not a number 9";
//    }
//}
//
//it ('should equal the english word "nine" instead of "nine"', function () {
//    assert.equal(toEnglish(9), "nine");
//});

//function toEnglish (a) {
//    if (a==10) {
//        return "ten"
//    } else {
//        return "this is not number 10";
//    }
//} 
//
//it ('should equal the english word "ten" instead of "ten"', function () {
//    assert.equal(toEnglish(10), "ten");
//});


function toEnglish(a) {
    if (a == 1) {
        return "one";
    } else if (a== 2) {
        return "two";
    } else if (a==3) {
        return "three";
    } else if (a==4) {
        return "four";
    } else if (a==5) {
        return "five";
    } else if (a==6) {
        return "six";
    } else if (a==7){
        return "seven";
    } else if (a==8){
        return "eight";
    } else if (a==9) {
        return "nine"; 
    } else if (a==10) {
        return "ten";
    }
    
}

var toEnglish=["zero","one","two","three","four","five","six","seven","eight","nine","ten"]  

function print(n){
    return toEnglish[n];        
} 

it('should print numbers from string"', function (){
    assert.equal(print(4),"four");
})


it('should return 1 as string "one"', function() {
    assert.equal(toEnglish(1), "one");
})


it('should return "two" when 2 is entered and "not two" if any other number is entered', function () {
    assert.equal(toEnglish(2), "two");
    
} )


it('should return "three" when 3 is entered and "not the number 3" is any other number is entered', function() {
    assert.equal(toEnglish(3), "three");
}) 

it('should return 4 as string "four"', function(){
   assert.equal(toEnglish(4),"four");
})

it('should return 5 as string "five"', function(){
    assert.equal(toEnglish(5),"five");
})

it('should return 6 as string "six"', function (){
    assert.equal(toEnglish(6),"six");
})

it('should return 7 as string "seven"', function(){
    assert.equal(toEnglish(7),"seven");
})

it('should return 8 as string "eight"', function(){
    assert.equal(toEnglish(8),"eight");
})

it('should return 9 as string "nine"', function(){
    assert.equal(toEnglish(9),"nine");
})

it('should return 10 as strign "ten"', function () {
    assert.equal(toEnglish(10),"ten");
})