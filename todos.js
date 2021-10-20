const makeTodo = require("./makeToDo");

let todos = [];
let fakeTodo1 = makeTodo("Walk the dog");
let fakeTodo2 = makeTodo("Wash the dishes");
let fakeTodo3 = makeTodo("make a todo app");

fakeTodo2.isComplete = true;
todos.push(fakeTodo1, fakeTodo2, fakeTodo3);

module.exports = todos;
