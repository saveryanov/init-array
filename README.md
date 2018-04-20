# init-array

[![NPM version](https://img.shields.io/npm/v/init-array.svg)](https://www.npmjs.com/package/init-array)

Creates new array with defined size and initial value

## Install

```
npm install --save init-array
```

## Usage

Arguments:

* dimensions
* value to assign

```javascript
var newArray = require('init-array');

newArray(3);            // [ 0, 0, 0 ]
newArray(1, 256);       // [ 256 ]
newArray([3, 2]);       // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
newArray([2], 'test');  // [ 'test', 'test' ]
newArray([2, 3], 1);    // [ [ 1, 1, 1 ], [ 1, 1, 1 ] ]
// etc
```

If value argument is function then executes this function for each element.

```javascript
newArray(3, Math.random);  // [ 0.5508887629402555, 0.7256682864214947, 0.8916228685296357 ]
```