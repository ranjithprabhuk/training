function* lazyFunction() {
  const a = 4;
  const b = 5;

  yield a + b;
  return 'string';
  yield b - a;
  yield b * a;
};

const generator = lazyFunction();


console.log(generator.next(2));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// { done: true, value: undefined}


function* lazyLoadProducts() {
  const products = [];
  for(let index = 0; index< 500; index++) {
    products.push({id: `${index+1}`, name: `${index}_some_product` })
  }

  yield products.slice(0, 99);
  yield products.slice(100, 199);
  yield products.slice(200, 299);
  yield products.slice(300, 399);
};

const productList = lazyLoadProducts();

// console.log(productList.next().value);
// console.log(productList.next().value);
// console.log(productList.next().value);
// console.log(productList.next().value);

