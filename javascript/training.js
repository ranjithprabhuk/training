const myContent = document.getElementById('content');


setTimeout(() => {
  myContent.innerText = 'i am changing in 3 seconds';
}, 3000);

const nameOfTheCompany = 'SMART ERP';

const userInfo = {
  name: 'Ranjith',
  email: 'ranjith@appkniot.io',
  address: {
    street: {
      
    }
  }
};

const cloneUserInfo = userInfo;

userInfo.name = 'Prabhu';

// console.log('user Info', userInfo);


// data types
/**
 * variable using const let
 * string - all the methods
 * number - Math.
 * date - 
 * objects - Destructuring, rest, spread, JSON
 * arrays - Rest 
 * null
 * undefined
 * boolean
 * Local Storage, Session Storage
 * Call backs
 * Events and Events Handling
 * Debugging
 * Error Handling
 * Promises
 * Asyn and Await
 */

// const name = 'SMART';

let value = 5.365;

// Math.Floor

// console.log('character at 2', name.charCodeAt(2), name.codePointAt(2))
// console.log('split the name', name.split(''))

const sampleObj = {
  name: 'some name',
  isQualified: true,
  graduatedOn: new Date(),
  address : {
    street: {
      firstLine: '35',
      secondLine: 'Some nagar',
    }
  }
};

const  { address: {street: {firstLine, secondLine}}, name, ...properties  } = sampleObj;

// console.log(typeof firstLine, typeof sampleObj);


const products = [
  {
    name: 'product 1',
    description: 'product 1',
    price: 5
  },
  {
    name: 'product 2',
    description: 'product 1',
    price: 7
  },
  {
    name: 'product 3',
    description: 'product 3',
    price: 10
  },
  {
    name: 'product 4',
    description: 'product 1',
    price: 10
  }
];

// template strings, template literals

(products || []).forEach(({name, price, ...rest}) => {
  console.log(`Name: ${name}, Price: ${price}`);
});

(products || []).forEach((product) => {
  if (product.price > 5) {
    product.rating = '3 stars';
    product.description = 'average product'
  } else {
    product.rating = '5 stars';
    product.description = 'good product';
  }
});

console.log('product information after iteration', products );

const productNames = (products || []).map(({name, price}) => {
  const rating = price > 5 ? '5 stars' : '3 stars';
  return {name, rating, price};
});

// console.log('product names', productNames);

const fiveStarProducts = products.find(product => product.rating === '5 stars');
//  fiveStarProducts[0].price = 100;

const productWithPriceTen = products.find(product => product.price === 10);

if (productWithPriceTen) {
  productWithPriceTen.price = 100;
  productWithPriceTen.name = ' i have changed the name';
}
console.log('product with price ten', products);



// server side rendering

