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
        arr = new Array(shape[0]).fill(value);
        arr = arr.map(() => newArray(newShape, value));
    } else {
        arr = new Array(shape).fill(value);
    }
    return arr;
}
module.exports = newArray;