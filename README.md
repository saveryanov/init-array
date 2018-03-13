# init-array

Creates new array with defined size and initial value

## Install

```
npm install --save init-array
```

## Usage

```js
var newArray = require('init-array');

newArray(3);            // [ 0, 0, 0 ]
newArray(1, 256);       // [ 256 ]
newArray([3, 2]);       // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
newArray([2], 'test');  // [ 'test', 'test' ]
newArray([2, 3], 1);    // [ [ 1, 1, 1 ], [ 1, 1, 1 ] ]
// etc
```
