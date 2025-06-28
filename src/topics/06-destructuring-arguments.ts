export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "phone nokia",
  price: 2500,
};
const tablet: Product = {
  description: "tablet samsung",
  price: 1000,
};

interface taxCalculationOptions {
  tax: number;
  products: Product[];
}
export function taxCalculation(options: taxCalculationOptions): number[] {
  let total = 0;
  options.products.forEach((product) => {
    total += product.price;
  });

  return [total, total * options.tax];
}
const shoppingCart = [phone, tablet];
const tax = 0.15; //impuesto sobre la venta
const result = taxCalculation({
    products: shoppingCart,
    tax
});

console.log(result);
