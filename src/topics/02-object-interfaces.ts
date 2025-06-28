//vamos a declarar un arreglo de tipo string 
let powers: string[] = ['invisibility', 'flash'];
console.log(powers[1]);

let numbers: number[] = [1,2,3];
console.log(numbers);


//ejemplo con arreglo con un objeto
let exampleJson = [{
    'id': 5,
    'name': 'luis'
},
{
    'id': 6,
    'name': 'marcos'
}
];
console.log(exampleJson[1]['name']);

//como tipar un objeto creando una interfaz o contrato
interface Character{
    'id': number,
    'name': string
}
const clients: Character = {
    'id': 2,
    'name': 'Marcelaa'
}
console.log(clients);
console.log(clients.name);