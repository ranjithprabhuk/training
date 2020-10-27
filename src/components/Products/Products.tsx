import React, { useState, useEffect, useContext, use } from 'react'
import { Link } from 'react-router-dom';
import productInfo from '../../data/productInfo';
import { DisplayName } from '../DisplayName'
import { Product } from '../Product/Product'

interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
}

export const Products: React.FC = (props) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productInfo);
      setLoading(false);
    }, 1000);
    console.log('props', props);
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {products.length > 0 && products?.map((product, index) => (
        <div key={`${product.title}_${index}`}>
          <Link to={`/product/${product.id}`}>
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              addToCart={() => { }}
              updateTitle={({ title, id }) => { }}
            >
              <DisplayName name={product.description || ''} />

            </Product>
          </Link>
        </div>
      ))}
    </div>
  )
};

/**
 * pages
 * - index.tsx
 * - products
 *  - index.tsx
 * - product
 *  - [productId].tsx
 * 
 */

 /***
  * Component A           ---- Store
  *   - Component B
  *     - Component C
  *       - Component D    ---- fetch the data from store 
  *           - So on....
  * 
  * Apollo Client for State management
  *   - In Memory cache
  */