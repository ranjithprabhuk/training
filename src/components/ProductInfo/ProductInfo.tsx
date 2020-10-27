import React, { useState, useEffect } from 'react';
import productList from '../../data/productInfo';

export const ProductInfo: React.FC = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log('params', props);
    // get the product id from the path parameter
    const { id }  = props.match.params;
    if (id) {
      const productDetail = productList.find(p => p.id == id); // productList[0];

      if (productDetail) {
        setProduct(productDetail);
      }
    }
  }, []);

  return (
    <div>
      <h1>Product Name: {product.title}</h1>
      <h4>Product Price: {product.price}</h4>
    </div>
  )
}