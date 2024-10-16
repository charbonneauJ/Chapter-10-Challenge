const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle  } = require("./lib/shapes");

// question prompts
const questions = [
  {
    message: "Enter a 3 character message",
    type: "input",
    name: "Message",
  },
  {
    message: "Enter your choice of color for text",
    type: "input",
    name: "textcolor",
  },
  {
    message: "Pick a shape!",
    type: "list",
    choices: ["circle", "square", "triangle"],
    name: "shape",
  },
  {
    message: "Enter your choice of color for shape",
    type: "input",
    name: "shapecolor",
  },
];


// Making a function to generate SVG file
function generateSVG(shape, text, textcolor, shapecolor) {
    let SVGimage = "";
    const circle = new Circle(150, 100, 100, shapecolor, textcolor, text);
    SVGimage = circle.render();
} else if (shape === "square") {
    const square = new Square(50, 0, 200, 200, shapecolor, textcolor, text);
    SVGimage = square.render();
} else if (shape === "triangle") {
    const triangle = new Triangle(150, 0, 275, 200, 25, 200, shapecolor, textcolor, text);
    SVGimage = triangle.render();
}
  
fs.writeFile("logo.svg", SVGimage, (err) => {
    if (err) throw err;
    console.log("Generate logo.svg");
    }
    );


// function to generate SVG file
inquirer.prompt(questions).then((answers) => {
  const { message, textcolor, shape, shapecolor } = answers;
  generateSVG(shape, message, textcolor, shapecolor);
});
