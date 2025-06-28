function addNumbers(a: number, b: number) {
  return a + b;
}

console.log(addNumbers(1, 2));
//función de flecha

const addNumberArrow = (a: number, b: number): number => {
  return a + b;
};
console.log(addNumberArrow(2, 2));

//funciones con objetos como argumentos
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
const heal = (character: Character, amount: number) => {
  character.hp += amount;
};

const person = {
  name: "luis",
  hp: 10,

  showHp() {
    console.log(`Puntos de vida: ${this.hp}`);
  },
};

heal(person, 20);
heal(person, 50);

person.showHp();
