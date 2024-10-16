// const { describe } = require('yargs');
const { logoData } = require("../index");
const fs = require("fs");

jest.mock("fs");

// shape.test.js
const { Triangle, Circle, Square } = require("./shapes");

describe("Shape Classes", () => {
  test("Circle render method", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="100" fill="red"/>'
    );
  });

  test("Square render method", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="50" y="0" width="200" height="200" fill="green"/>'
    );
  });
  test("Triangle render method", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 0 275,200 25,200" fill="blue" />'
    );
  });
});
