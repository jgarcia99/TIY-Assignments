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
