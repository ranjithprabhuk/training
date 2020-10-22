import React from 'react'
import { DisplayName } from '../DisplayName'
import { Product } from '../Product/Product'

interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
}

interface Props {
  list: Array<Product>;
  addToCart?: (product: any) => void;
  updateTitle: (data: {title: string, id: number}) => void;
}

export const ProductList: React.FC<Props> = (props: Props) => {
    return (
    <div>
      {props.list?.map((product, index) => (
        <div key={`${product.title}_${index}`}>
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            addToCart={props.addToCart}
            updateTitle={({title, id})  => props.updateTitle({title, id})}
          >
            <DisplayName name={product.description || ''} />
            
          </Product>
        </div>
      ))}
    </div>
  )
};