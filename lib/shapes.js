class Shape {
  constructor(color = "") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Render method must be implemented by subclasses.");
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
  }
}
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 0 275,200 25,200" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
