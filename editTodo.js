const todos = require("./todos");
const readlineSync = require("readline-sync");

const editTodo = (todo) => {
  console.clear();
  const editMenu = `How would you like to edit the following todo?

${todo.isComplete ? "✅" : "❌"} ${todo.text}

(x) Mark it unfinished.
(v) Mark it done.
(e) Edit the text of the todo.
(d) Delete the todo.
 `;
  const editResponse = readlineSync.question(editMenu);
  if (editResponse === "x") {
    todo.isComplete = false;
  } else if (editResponse === "v") {
    todo.isComplete = true;
  } else if (editResponse === "e") {
    todo.text = readlineSync.question("What should we change the test to?\n\n");
  } else if (editResponse === "d") {
    todos.forEach((li, i) => {
      if (li.text === todo.text) {
        todos.splice(i, 1);
      }
    });
  }
  console.clear();
  return todo;
};

module.exports = editTodo;
