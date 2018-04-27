var newArray = require('../index'),
    chai = require('chai');

describe("Init array", function () {
    it(`Creates empty array`, function () {
        chai.expect([]).to.deep.equal(newArray());
    });
    it(`Creates empty array with one dimensional shape`, function () {
        chai.expect([null,null,null]).to.deep.equal(newArray(3));
        chai.expect([null,null,null]).to.deep.equal(newArray([3]));
    });
    it(`Creates empty array with two dimensional shape`, function () {
        chai.expect([[null,null,null]]).to.deep.equal(newArray([1,3]));
        chai.expect([[null],[null],[null]]).to.deep.equal(newArray([3,1]));
        chai.expect([[null]]).to.deep.equal(newArray([1,1]));
    });
    it(`Creates empty array with three dimensional shape`, function () {
        chai.expect([ [ [ null, null ] ], [ [ null, null ] ], [ [ null, null ] ] ]).to.deep.equal(newArray([3,1,2]));
    });


    it(`Creates empty array with one dimensional shape with init value`, function () {
        chai.expect([3,3,3]).to.deep.equal(newArray(3, 3));
        chai.expect([1,1,1]).to.deep.equal(newArray([3], 1));
    });
    it(`Creates empty array with two dimensional shape with init value`, function () {
        chai.expect([[2,2,2]]).to.deep.equal(newArray([1,3], 2));
        chai.expect([[1],[1],[1]]).to.deep.equal(newArray([3,1], 1));
        chai.expect([[3]]).to.deep.equal(newArray([1,1], 3));
    });
    it(`Creates empty array with three dimensional shape with init value`, function () {
        chai.expect([ [ [ 1, 1 ] ], [ [ 1, 1 ] ], [ [ 1, 1 ] ] ]).to.deep.equal(newArray([3,1,2], 1));
    });

    it(`Creates empty array with three dimensional shape with init function`, function () {
        var i = 0;
        chai.expect([ [ [ 0, 1 ] ], [ [ 2, 3 ] ], [ [ 4, 5 ] ] ]).to.deep.equal(newArray([3,1,2], () => i++));
    });


});
