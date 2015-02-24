### Format for _Reading JavaScript_

----

### [Primitive: Null-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null` 
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null 
x = null
null
```
### [Primitive: Boolean-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Boolean_literals)

* _symbol_: `true` `false`
* _pronunciation_: "true", "false"
* _examples_:
```javascript
5 === 5
true

"3" == 4
false
```
### [Primitive: Number-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

* _symbol_: `Number(value)` 
* _pronunciation_: "number", "value"
* _examples_:
```javascript
var biggestNum = Number.MAX_VALUE;
var notANum = Number.NaN;
var biggestInt = 9007199254740992;
var d = new Date('December 17, 1995 03:24:00')
```
### [Primitive: String-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

* _symbol_: `' '` `" "`
* _pronunciation_: "string"
* _examples_:
```javascript
'cool'
"5"
```
### [Constructor: Objects-Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

* _symbol_: `( )`
* _pronunciation_: "object", "constructor", "initialiser", "literal"
* _examples_:
```javascript
Object.assign(); new Object([value]); { [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }
```

### [Object Initializer: Array-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Array_literals)

* _symbol_: `[ ]`
* _pronunciation_: "Array literal", "Array"
* _examples_:
```javascript
var coffees = ["French Roast", "Colombian", "Kona"];
```
### [Constructor: RegExp-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

* _symbol_: `\` `^` `$` `*` `?` `.` `x(?!y)` `\xhh`
* _pronunciation_: "Reg Exp", "Regular Expression"
* _examples_:
```javascript
new RegExp('ab+c', 'i'); 
var re = /\w+/;
var re = new RegExp('\\w+');
```
### [Built In Value: Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

* _symbol_: `infinity`
* _pronunciation_: "infinity", "Positive Infinity", "Negative Infinity"
* _examples_:
```javascript
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
```
### [Built In Value: NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

* _symbol_: `Nan`
* _pronunciation_: "Nan", "Not a Number"
* _examples_:
```javascript
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
```
### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```
### [Operator: Subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction_(-))

* _symbol_: `-`
* _pronunciation_: "subtraction", "difference"
* _examples_:
```javascript
7 - 8
-1
3 - 2
1
```
### [Operator: Division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division_(.2F))

* _symbol_: `/`
* _pronunciation_: "division", "dividend", "quotient", "divisor"
* _examples_:
```javascript
1 / 2
0.5
```
### [Operator: Multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication_(*))

* _symbol_: `*`
* _pronunciation_: "multiplication", "product"
* _examples_:
```javascript
2 * 2
4
```
### [Operator: Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25))

* _symbol_: `%`
* _pronunciation_: "Remainder", "modulo"
* _examples_:
```javascript
12 % 5
2
```
### [Operator: Unary Negation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation_(-))

* _symbol_: `-`
* _pronunciation_: "Unary Negation", "Negates"
* _examples_:
```javascript
var x = 3;
y = -x;
y = -3,x = 3
```
### [Operator: Unary Plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_(.2B))

* _symbol_: `+`
* _pronunciation_: "Unary Plus", "Convert"
* _examples_:
```javascript
+3
3
+"3"
3
+true
1
```
### [Assignment-Operator: Left Shift Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Left_shift_assignment_2)

* _symbol_: `<<=`
* _pronunciation_: "Left shift", "Bits left"
* _examples_:
```javascript
Operator: x <<= y 
Meaning:  x   = x << y
var bar = 5; //  (00000000000000000000000000000101)
bar <<= 2; // 20 (00000000000000000000000000010100)
```

### [Assignment-Operator: Bitwise AND assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_AND_assignment_2)

* _symbol_: `&=`
* _pronunciation_: "Binary Representation", "bitwise AND operation"
* _examples_:
```javascript
Operator: x &= y 
Meaning:  x  = x & y
var bar = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
bar &= 2; // 0
```
### [Assignment-Operator: Bitwise XOR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_XOR_assignment_2)

* _symbol_: `^=`
* _pronunciation_: "Binary Representation", "bitwise XOR operation"
* _examples_:
```javascript
Operator: x ^= y 
Meaning:  x  = x ^ y
var bar = 5;
bar ^= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

### [Conditional Statement: If...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

* _symbol_: `if` `else`
* _pronunciation_: "if", "else", "condition",
* _examples_:
```javascript
if (condition)
   statement1
[else
   statement2]
   
if (cipher_char === from_char) {
   result = result + to_char;
   x++;
} else {
   result = result + clear_char;
}

if (x > 5) {

} else if (x > 50) {

} else {

}
```
### [Block Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#Block_Statement)

* _symbol_: `statement_1` `statement_2`
* _pronunciation_: "block", "group", "statement",
* _examples_:
```javascript
    while (x < 10) {
  x++;
}
```

### [Return Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

* _symbol_: `return` 
* _pronunciation_: "return", "statement"
* _examples_:
```javascript
    function square(x) {
        return x * x;
    }
    
    function magic (x) {
        return function calc(x) { return x * 42};
        
        }
    
    var answer = magic();
    answer(1337); // 56154
```


### [Conditional Statement: Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#switch_Statement)

* _symbol_: `switch` 
* _pronunciation_: "switch", "statement", "evaluate", "match"
* _examples_:
```javascript
    switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_def
      [break;]
}

switch (fruittype) {
    case "Oranges":
        document.write("oranges are $0.59 a pound.<br>");
        break;
   case "Apples":
      document.write("Apples are $0.32 a pound.<br>");
      break;
   case "Bananas":
      document.write("Bananas are $0.48 a pound.<br>");
      break;
   case "Cherries":
      document.write("Cherries are $3.00 a pound.<br>");
      break;
   case "Mangoes":
      document.write("Mangoes are $0.56 a pound.<br>");
       break;
   case "Papayas":
      document.write("Mangoes and papayas are $2.79 a pound.<br>");
      break;
   default:
      document.write("Sorry, we are out of " + fruittype + ".<br>");
}
document.write("Is there anything else you'd like?<br>");


```

### [Loop Statement: for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#for_Statement)

* _symbol_: `for` 
* _pronunciation_: "for", "loop", 
* _examples_:
```javascript
    

function howMany(selectObject) {
   var numberSelected = 0;
   for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected)
         numberSelected++;
   }
   return numberSelected;
}


 ```
 
### [Loop Statement: do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#do...while_Statement)

* _symbol_: `do` `while` 
* _pronunciation_: "do", "while", "false"
* _examples_:
```javascript
   do {
   i += 1;
   document.write(i);
} while (i < 5); 
```

### [Loop Statement: while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#while_Statement)

* _symbol_: `while` 
* _pronunciation_:"while", "true"
* _examples_:
```javascript
  n = 0;
x = 0;
while (n < 3) {
   n++;
   x += n;
}
  
```

### [Loop Statement: Label Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#label_Statement)

* _symbol_: `label` 
* _pronunciation_:"label", "statement"
* _examples_:
```javascript
markLoop:
while (theMark == true) {
   doSomething();
}
  
```

### [Loop Statement: Break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#break_Statement)

* _symbol_: `break` 
* _pronunciation_:"break", break label"
* _examples_:
```javascript
for (i = 0; i < a.length; i++) {
   if (a[i] == theValue)
      break;
} 
```

### [Loop Statement: Continue Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#continue_Statement)

* _symbol_: `Continue` 
* _pronunciation_:"Continue","Continue Label", "Restart"
* _examples_:
```javascript
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}
```

### [Literal: Array] 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Array_literals)

* *symbol:* `[ ]`
* *pronunciation:* "array", "new array"
* *examples:*
```javascript
var name = ["element1", "element2","element3"];
var employers = ["Sam","Sway","Jared"];
var obj ={prop:["element0","element1","element2"]};
var fish = ["Lion", , "Angel"];
var myList = [ , 'home', , 'school'];
```
### [Property: Array.length] 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

* *symbol:* `arr.length`
* *pronunciation:* "length", "property", "32-bit integer",
* *examples:*
```javascript
var numbers = [1,2,3,4,5];

for (var i = 0; i < numbers.length; i++) {
    numbers[i] *=2;
};
// numbers is now [2, 4, 6, 8, 10]

if (statesUS.length > 50) {
    statesUS.length = 50;
}

```

#### [`Array.prototype.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* *result:* removes the LAST element from an array and returns that element/caller. arr.pop()
* *parameters:* No you call it at the end of a object.
* *returns:* Back to the caller; 
```javascript
var myFish = ['angel', 'clown', 'mandarin', 'stureon'];
console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']
var popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin']
console.log(popped); // 'sturgeon'
```
#### [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

* *result:* Splice() method changes the content of an array by removing existing elements and or adding new elements.
* *parameters:* start-to start changing array, deleteCount-number indicating the number of old array elements to remove, itemN-the elements to add to the array.
* *returns:* An array containing the deleted elements. 
```javascript
var myFish = ['angel', 'clown', 'madarin', 'surgeon'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2,0, 'drum');
//myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed

//removes 1 element from index 3
removed = myFish.splice (3,1);
// myFish is ['angel', 'clown', 'drum', 'surgeon']
// removed is ['mandarin']

// removes 1 element from index 2, and inserts 'trumpet'
removed = myFish.splice(2,1, 'trumpet');
// myFish is ['angel', 'clown', 'trumpet', 'surgeon']
// removed is ['drum']
```

#### [`Array.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

* *result:* The slice() method returns a shallow copy of a portion of an array into a new array object.
* *parameters:* arr.slice([begin[, end]])
* *returns:* A shallow copy of elements from the original array; 
```javascript
//Return a portion of an existing array
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1,3);

// citrus contains ['Orange', 'Lemon']

//Using slice, create newCar from myCar.
var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2} }
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0,2);

function list() {
    return Array.prototype.slice.call(arguments, 0);
}
var list1 = list (1, 2, 3); //[1,2,3]
```

#### [`Array.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

* *result:* The push() method adds one or more elements to the end of an array and returns the new length of the array.
* *parameters:* arr.push(element1, ..., elementsN) "elementN The elements to add to the end of the array.
* *returns:* The new length property of the object upon which the method was called; 
```javascript
//Adding elements to an array
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming'];
console.log(total); // 4

//Merging two arrays
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
//Merge the second array into the first one
//Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables); //['parsnip;, 'potato', 'celery', 'beetroot'];
```

#### [`Array.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

* *result:* reverse() method reverses an array in place. last becomes first and vice versa.
* *parameters:* NONE.
* *returns:* a reference to the array. 
```javascript
var myArray = ['one', 'two', 'three'];
myArray.reverse();

console.log(myArray) // ['three', 'two', 'one']
```

#### [`Array.prototype.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

* *result:* removes the first element from an array and returns that element.
* *parameters:* NONE.
* *returns:* that elements also changes the length of the array. 
```javascript
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

myFish.shift();

//removes angel
```

#### [`Array.prototype.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

* *result:* Adds one or more elements to the beginning of an array and returns the new length of the array.
* *parameters:* elementN: The elements to add to the front of the array.
* *returns:* The new length property of the object upon which the method was called. 
```javascript
var arr = [1,2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0,1,2]

arr.unshift(-2, -1): // = 5
// arr is [-2, -1, -, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

#### [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

* *result:* sorts the elements of an array in  place and returns the array. The sort is not necessarily stable. The default sort order is according to string unicode code points.
* *parameters:* compareFunction: Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode point value according to the string conversion of each element.
* *returns:* The new length property of the object upon which the method was called. 
```javascript
var arr = [1,2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0,1,2]

arr.unshift(-2, -1): // = 5
// arr is [-2, -1, -, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

#### [`Array.prototype.forEach()`]
* *result:* `executes a provided function once per array element.`
* *parameters:* `callback(currentValue,index,array),thisArg.`
* *returns:* 
* *example:*
```
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Note ellision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

#### [`Array.prototype.every()`]
* _params:_
* `callback`: `Function` to test each element against * _params:_
* `item`: element to process
* `index`: index of processed element
* `all`: array instance
* _returns:_ `Boolean`
* `thisArg`: `Object` to which to bind `callback`
* _returns:_ `Boolean` whether `callback` returns `true` for _every_ element
* _example:_
```javascript
function every(anArray, callback){
  var hasFailed = false; // it hasn't has it?

  // iterate...
  anArray.foreach(function(item, index, all){
    if ( hasFailed ) return; // one failure ruins everything...

    hasFailed = !callback(item, index, all); // why invert here?
  });

  return !hasFailed; // Another inverse?
  // What if `anArray` is empty?
}
```

#### [`Array.prototype.some()`]

 *result:* `tests whether some element in the array passes the test implemented by the provided function.`
* *parameters:* `callback(currentValue,index,array),thisArg.`
* *returns:* `True or False`
* *example:*
```
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```
#### [`Array.prototype.filter()`]

 *result:* `Creates a new array with all of the elements of this array for which the provided filtering function returns true.`
* *parameters:* `callback(currentValue,index,array),thisArg.`
* *returns:* `True or False`
* *example:*
```
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

#### [`Array.prototype.map()`]

 *result:* `Creates a new array with the results of calling a provided function on every element in this array.`
* *parameters:* `callback(currentValue,index,array),thisArg.`
* *returns:* 
* *example:*
```
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]
```

#### [`Array.prototype.reduce()`]

 *result:* `Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.`
* *parameters:* `previousValue, currentValue, index, array, initialValue.`
* *returns:* `number(value)`
* *example:*
```
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10);

Example: Sum up all values within an array

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
Example: Flatten an array of arrays

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]
```

#### [`Array.prototype.reduceRight()`]

 *result:* `Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.`
* *parameters:* `previousValue, currentValue, index, array, initialValue.`
* *returns:* `number(value)`
* *example:*
```
"[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10);
```