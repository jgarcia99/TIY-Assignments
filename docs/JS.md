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

### [Primitive: Boolean-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Boolean_literals)

* _symbol_: `true` `false`
* _pronunciation_: "true", "false"
* _examples_:
```javascript
5 === 5
true

"3" == 4
false

### [Primitive: Number-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

* _symbol_: `Number(value)` 
* _pronunciation_: "number", "value"
* _examples_:
```javascript
var biggestNum = Number.MAX_VALUE;
var notANum = Number.NaN;
var biggestInt = 9007199254740992;
var d = new Date('December 17, 1995 03:24:00');

### [Primitive: String-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

* _symbol_: `' '` `" "`
* _pronunciation_: "string"
* _examples_:
```javascript
'cool'
"5"

### [Constructor: Objects-Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

* _symbol_: `( )`
* _pronunciation_: "object", "constructor", "initialiser", "literal"
* _examples_:
```javascript
Object.assign(); new Object([value]); { [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }


### [Object Initializer: Array-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Array_literals)

* _symbol_: `[ ]`
* _pronunciation_: "Array literal", "Array"
* _examples_:
```javascript
var coffees = ["French Roast", "Colombian", "Kona"];

### [Constructor: RegExp-Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

* _symbol_: `\` `^` `$` `*` `?` `.` `x(?!y)` `\xhh`
* _pronunciation_: "Reg Exp", "Regular Expression"
* _examples_:
```javascript
new RegExp('ab+c', 'i'); 
var re = /\w+/;
var re = new RegExp('\\w+');

### [Built In Value: Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

* _symbol_: `infinity`
* _pronunciation_: "infinity", "Positive Infinity", "Negative Infinity"
* _examples_:
```javascript
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

### [Built In Value: NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

* _symbol_: `Nan`
* _pronunciation_: "Nan", "Not a Number"
* _examples_:
```javascript
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?

### [Operator: Subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction_(-))

* _symbol_: `-`
* _pronunciation_: "subtraction", "difference"
* _examples_:
```javascript
7 - 8
-1
3 - 2
1

### [Operator: Division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division_(.2F))

* _symbol_: `/`
* _pronunciation_: "division", "dividend", "quotient", "divisor"
* _examples_:
```javascript
1 / 2
0.5

### [Operator: Multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication_(*))

* _symbol_: `*`
* _pronunciation_: "multiplication", "product"
* _examples_:
```javascript
2 * 2
4

### [Operator: Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25))

* _symbol_: `%`
* _pronunciation_: "Remainder", "modulo"
* _examples_:
```javascript
12 % 5
2

### [Operator: Unary Negation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation_(-))

* _symbol_: `-`
* _pronunciation_: "Unary Negation", "Negates"
* _examples_:
```javascript
var x = 3;
y = -x;
y = -3,x = 3

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

### [Assignment-Operator: Left Shift Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Left_shift_assignment_2)

* _symbol_: `<<=`
* _pronunciation_: "Left shift", "Bits left"
* _examples_:
```javascript
Operator: x <<= y 
Meaning:  x   = x << y
var bar = 5; //  (00000000000000000000000000000101)
bar <<= 2; // 20 (00000000000000000000000000010100)


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

