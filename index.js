const inquirer = require("inquirer");
const { logoData } = require("./lib/logocreator");

//Prompts/Questions
const questions = [
  {
    type: "input",
    name: "chars",
    message: "Please enter your message (1-3 characters):",
  },
  {
    type: "input",
    name: "textColor",
    message: "Please enter your desired text color (can be hexadecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape: ",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "backgroundColor",
    message: "Please pick a background color (can be hexadecimal):",
  },
];

// Function to handle the logo creation
const logo = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    validateInput(answers);
  } catch (error) {
    console.error("There was an error:", error);
  }
};

// Validate input from the user
const validateInput = (answers) => {
  const charLength = answers.chars.length;

  if (charLength > 0 && charLength <= 3) {
    logoData(answers);
  } else {
    console.log(
      "Logo must be 3 characters or less. Please try again with a valid input."
    );
  }
};

// Call the logo function
logo();

// Export
module.exports = {
  validateInput,
};
