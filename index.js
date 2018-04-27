function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function newArray(shape = 0, value = null) {
    var arr = [];

    if (Array.isArray(shape) && shape.length == 1) {
        shape = shape[0];
    }

    if (Array.isArray(shape)) {
        let newShape = [];
        for (let i = 1; i < shape.length; i++) {
            newShape.push(shape[i]);
        }
        arr = new Array(shape[0]).fill(0);
        arr = arr.map(() => newArray(newShape, value));
    } else {
        arr = new Array(shape).fill(value);
        for (let i in arr) {
            arr[i] = isFunction(value) ? value() : value;
        }
    }
    return arr;
}
module.exports = newArray;