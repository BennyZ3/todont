const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getMenu = require("./getMenu");
const todos = require("./todos");

let response = readlineSync.question(chalk.blue.bold(getMenu()).toLowerCase());

while (response !== "q") {
  if (response === "e") {
  } else {
    console.log(chalk.red.bold(`${response} is not a valid input.`));
  }
  response = readlineSync.question(getMenu());
  console.clear();
}
