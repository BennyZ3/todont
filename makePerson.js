const person1 = {
  firstName: "Benny",
  lastName: "Zheng",
  age: 26,
  lovesVim: false,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  ageUp: function () {
    this.age += 1;
  },
  changeFirstName: function (newName) {
    if (newName.length === 0) {
      throw "Name is empty";
    } else {
      this.firstName = newName;
    }
  },
};
console.clear();
// console.log(person1.getFullName());
// console.log(person1.age);
person1.ageUp();
person1.changeFirstName("");
console.log(person1);
