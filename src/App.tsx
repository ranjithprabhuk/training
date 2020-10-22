import React, { useState, useEffect, useRef, useContext, } from 'react';
import './App.css';
import { Cart, Counter, DisplayName, InputComponent, Product, ProductList, UserInfo } from './components';
import { Simple } from './components/Simple/Simple';
import productImfo, { product, Rating } from './data/productInfo';

// import { Cart } from './components/Cart'

function App() {
  // const [userInfo, setUserInfo] = useState<{ username?: string, passowrd?: string, encryptionKey?: string }>({});

  // const handleChange = (value: string, key: string) => {
  //   const newUserInfo = {...userInfo, [key]: value };
  //   setUserInfo(newUserInfo);

  //   console.log('new user info', newUserInfo);
  // };

  const [isDisplayed, setIsDisplayed] = useState<boolean>(true);
  const [cartProducts, setCartProducts] = useState<Array<any>>([]);
  const [productList, updateProductList] = useState<Array<any>>([]);

  const addToCart = (product) => {
    console.log('product info', product);
    const newProducts = [...cartProducts, product];
    setCartProducts(newProducts);
  };

  const updateTitle = (data: { title: string, id: number }) => {
    console.log('data >>', data);
  };

  useEffect(() => {
    updateProductList(productImfo);
  });

  return (
    <div className="App">
      React Application Updated
      {/* <div>
        <Counter />
      </div>
      <div>
        <button type="button" onClick={() => setIsDisplayed(x => !x)}>
          Toggle
        </button>
      </div>
      <div id="user-info">
        {isDisplayed && <UserInfo lastLogin={'some date'}  />}
        <div>
        <UserInfo lastLogin={'some date'}  />
        <UserInfo lastLogin={'some date'}  />
        <UserInfo lastLogin={'some date'}  />
        <UserInfo lastLogin={'some date'}  />
        </div>
      </div> */}
      {/* <div>
        <Simple name='training' />
        <Simple name='Smart' age={21} />

      </div> */}

      {/* <div>
        <Product title='Pen' price={5}>          
        </Product>
        Description of the Product
        Image of the Product
      </div> */}

      <div>
        <ProductList list={productList} addToCart={addToCart} updateTitle={updateTitle} />
      </div>
      <div>
        {/* <Product title={'New Product'} price={5} addToCart={addToCart} updateTitle={updateTitle}/> */}
      </div>
      <div>
        <Cart list={cartProducts} />
      </div>
    </div>
  );
}

export default App;
