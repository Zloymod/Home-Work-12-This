const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel() {
    this.level++;

    if (student.level === 2) {
      this.stack.push("CSS");
      //   console.log(student);
    } else if (student.level === 3) {
      this.stack.push("JavaScript");
      //   console.log(student);
    } else if (student.level === 4) {
      this.stack.push("React");
      //   console.log(student);
    } else if (student.level === 5) {
      this.stack.push("NodeJS");
      //   console.log(student);
    } else if (student.level > 5) {
      alert("Студент выучил все технологии!");
    }
    return this;
  },
};
console.log(student.improveLevel());
console.log(student.improveLevel());
console.log(student.improveLevel());
console.log(student.improveLevel());
console.log(student.improveLevel());
