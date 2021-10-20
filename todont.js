const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getMenu = require("./getMenu");
let todos = require("./todos");
const editTodo = require("./editTodo");
const makeTodo = require("./makeToDo");

console.clear();
let response = readlineSync.question(chalk.blue.bold(getMenu()).toLowerCase());

while (response !== "q") {
  if (isNaN(response) === false) {
    let todo = todos[response - 1];
    todo = editTodo(todo);
  } else if (response === "n") {
    const text = readlineSync.question("What task would you like to add?\n\n");
    const todo = makeTodo(text);
    todos.unshift(todo);
  } else {
    console.log(chalk.red.bold(`${response} is not a valid input.`));
  }
  response = readlineSync.question(getMenu());
  console.clear();
}
