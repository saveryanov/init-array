function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function newArray(shape, value = 0) {
    var arr = [];

    if (Array.isArray(shape) && shape.length == 1) {
        shape = shape[0];
    }

    if (Array.isArray(shape)) {
        let newShape = [];
        for (let i = 1; i < shape.length; i++) {
            newShape.push(shape[i]);
        }
        arr = new Array(shape[0]).fill(isFunction(value) ? value() : value);
        arr = arr.map(() => newArray(newShape, isFunction(value) ? value() : value));
    } else {
        arr = new Array(shape).fill(isFunction(value) ? value() : value);
    }
    return arr;
}
module.exports = newArray;