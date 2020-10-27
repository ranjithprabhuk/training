import React, { useState, useEffect, useRef, useContext, } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { Cart, Counter, DisplayName, InputComponent, Product, ProductInfo, ProductList, Products } from './components';
import { Simple } from './components/Simple/Simple';
import productInfo, { product, Rating } from './data/productInfo';

// import { Cart } from './components/Cart'

function App() {
  // const [userInfo, setUserInfo] = useState<{ username?: string, passowrd?: string, encryptionKey?: string }>({});

  // const handleChange = (value: string, key: string) => {
  //   const newUserInfo = {...userInfo, [key]: value };
  //   setUserInfo(newUserInfo);

  //   console.log('new user info', newUserInfo);
  // };

  // use state
  const [isDisplayed, setIsDisplayed] = useState<boolean>(true);
  const [cartProducts, setCartProducts] = useState<Array<any>>([]);
  const [productList, updateProductList] = useState<Array<any>>([]);
  const [counter, updateCounter] = useState<number>(0);

  // use ref
  const headerElement = useRef(null) as React.RefObject<HTMLHeadingElement>;

  const addToCart = (product) => {
    // console.log('product info', product);
    const newProducts = [...cartProducts, product];
    setCartProducts(newProducts);
  };

  const updateTitle = (data: { title: string, id: number }) => {
    console.log('data >>', data);
  };

  /**
   * component completes mounting - componentDidMount
   * component get updated - componentDidUpdate
   * component un mounts - componentWillUnmount
   */
  useEffect(() => {
    // updateProductList(productImfo);
    console.log('subscribe');
    console.log(headerElement?.current?.innerText);
    console.log(headerElement?.current?.getBoundingClientRect())
    // (headerElement as any)?.current?.innerText = 'data';
    return () => {
      console.log('unsubscribe');
    }
  });

  // const getProductDetails = () => {
  //   // fetch method to get the data
  //   // query to get the data
  //   const serviceResponse = [];
  //   updateProductList(serviceResponse);
  //   // subscription here
  // };

  // getProductDetails();

  return (
    <div className="App">
      <h1 ref={headerElement}>React Application</h1>
      {/* <div>
        <button type="button" onClick={() => updateCounter(x => ++x)}>
          Counter - {counter}
        </button>
      </div> */}
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

      {/* <div>
        <ProductList list={productInfo} addToCart={addToCart} updateTitle={updateTitle} />
      </div> */}
      <div>
        {/* <Product title={'New Product'} price={5} addToCart={addToCart} updateTitle={updateTitle}/> */}
      </div>
      <div>
        {counter % 4 !== 0 && (
          <Cart list={cartProducts} counter={counter} />
        )}
      </div>

      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>


        </div>

        <Route path="/" component={Counter} exact={true} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductInfo} />
      </BrowserRouter>
    </div>
  );
}

export default App;






/**
 * React Basics
 * Passing data from parent to child
 * Passsing data from child to parent
 * Fuctional Component
 * React Hooks - useState
  * Maintaining state using useState
 *
 * React Hooks - useEffect
   * component completes mounting - componentDidMount
   * component get updated - componentDidUpdate
   * component un mounts - componentWillUnmount
 *
 * React Hooks - useRef
 */