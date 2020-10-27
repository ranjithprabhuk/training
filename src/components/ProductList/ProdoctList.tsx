import React from 'react'
import { DisplayName } from '../DisplayName'
import { Product } from '../Product/Product'
import { FlexBox } from '../../App';
import styled from 'styled-components';

interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
}

interface Props {
  list: Array<Product>;
}

const ProductListContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
`;

export const ProductList: React.FC<Props> = (props: Props) => {
    return (
    <ProductListContainer>
      {props.list?.map((product, index) => (
        <FlexBox key={`${product.title}_${index}`}>
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
          >
            <DisplayName name={product.description || ''} />
            
          </Product>
        </FlexBox>
      ))}
    </ProductListContainer>
  )
};