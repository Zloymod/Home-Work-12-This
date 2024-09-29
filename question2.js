const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  // Твоя реализация
  console.log(
    `Тип: ${this.type}, Имя: ${
      this.name
    }, Звук:${this.makeSound()}, ${isDomestic}`
  );
  return {
    ...this,
    isDomestic,
  };
}
const homeDomesticAnimal = makeDomestic.bind(dog, true)();
console.log("Собака по имени Чарли говорит Гав-Гав");
homeDomesticAnimal;
const streetDomesticAnimal = makeDomestic.call(bird, false);
console.log("Воробей по имени Петя говорит Чик-чирик");
const streetDomesticAnimal2 = makeDomestic.apply(bird, [false]);
console.log("Воробей по имени Петя говорит Чик-чирик");
