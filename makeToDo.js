const makeTodo = (text) => {
  return {
    text: text,
    isComplete: false,
    markComplete: function () {
      this.isComplete = true;
    },
    markIncomplete: function () {
      this.isComplete = false;
    },
    changeTest: function (newText) {
      this.text = newText;
    },
  };
};

module.exports = makeTodo;
