//Un decorador en general es una simple función 

//vamos a crear un decorador que muestre un mensaje al momneto de crear una clase
//creamos la función(decorador)
function LogConstructor(constructor: Function) {
  console.log("Decorador activado en clase:", constructor.name);
}



@LogConstructor
class Persona {
  constructor(public nombre: string) {}
}



const p = new Persona("Luis");
// En consola:
// Decorador activado en clase: Persona

