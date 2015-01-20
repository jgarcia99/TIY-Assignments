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