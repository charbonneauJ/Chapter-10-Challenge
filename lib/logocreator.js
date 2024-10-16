const fs = require("fs");

//Pulling in from index.js
function logoData(answers) {
  const { chars, textColor, shape, backgroundColor } = answers;
  const fileName = `${chars}.svg`;

  // Function to create the SVG shape and text
  const createSVGContent = () => {
    const commonText = `<text x="150" y="120" font-size="72" text-anchor="middle" fill="${textColor}">
                          <tspan font-weight="bold">${chars}</tspan>
                        </text>`;

    switch (shape) {
      case "circle":
        return (
          `<circle cx="150" cy="100" r="100" fill="${backgroundColor}"/>` +
          commonText
        );
      case "triangle":
        return (
          `<polygon points="150, 0 275, 200 25, 200" fill="${backgroundColor}" />` +
          commonText
        );
      case "square":
        return (
          `<rect x="50" y="0" width="200" height="200" fill="${backgroundColor}"/>` +
          commonText
        );
      default:
        throw new Error("Invalid shape provided");
    }
  };

  // Generating the SVG file content
  const SVGcontent = `<?xml version="1.0" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
        "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <style> text {font-family: Arial, sans-serif;} </style>
          ${createSVGContent()}
        </svg>`;

  generateFile(fileName, SVGcontent);
}

function generateFile(fileName, SVGcontent) {
  fs.writeFile(fileName, SVGcontent, (err) => {
    if (err) throw err;
    console.log(`Generated ${fileName}`);
  });
}

module.exports = {
  logoData,
};
