class Persona {
  private name: string;
  private age: number;

  constructor({ name, age }: { name: string; age: number }) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log(`hola soy ${this.name} y tengo ${this.age} años`);
  }
}

const atributes = {
  name: "manuel",
  age: 10,
};

const persona1 = new Persona(atributes);
persona1.saludar();

//ejemplo 2 clases

export class Persona2 {
  constructor(public name: string, public lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

const persona2 = new Persona2('Cristian', 'Pérez');
console.log(`Hola soy ${persona2.name}`);


export class Hero extends Persona2{
  constructor(public realName: string, name: string, lastname: string){
    super(name, lastname);
  }
}

const ironMan = new Hero('Tony', 'ironmandeko', 'stark');
console.log(ironMan);
