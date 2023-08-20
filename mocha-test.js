const { assert } = require("chai");

describe("Mathematical operations - Test suite", function () {
  it("Sum of two numbers", function () {
    let a = 10;
    let b = 10;
    let c = a + b;
    assert.equal(c, 20);
  });
  it("Substraction of two numbers", function () {
    let a = 10;
    let b = 10;
    let c = a - b;
    assert.equal(c, 0);
  });
  it("Multiplication of two numbers", function () {
    let a = 10;
    let b = 10;
    let c = a * b;
    assert.equal(c, 100);
  });
  it("Division of two numbers", function () {
    let a = 10;
    let b = 10;
    let c = a / b;
    assert.equal(c, 1);
  });
});
