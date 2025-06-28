import { taxCalculation, type Product } from './06-destructuring-arguments';

const shoppinCart: Product[] = [
    {
        description: 'dada',
        price: 2000
    },
    {
        description: 'novo',
        price: 100
    }
];

const [total, tax] = taxCalculation({
    products: shoppinCart,
    tax: 0.15
}); 

console.log(total, tax);



// const objectJson = [{
//     'total': 10,
//     'precio': 1000
// }];
// const [{total, precio} ] = objectJson
// console.log(`total : ${total}, precio ${precio}`);