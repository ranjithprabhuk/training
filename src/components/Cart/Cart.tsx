import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  list: Array<any>;
  counter?: number;
  displayAll?: boolean;
}

const CartContainer = styled.div`
  display: flex;
  text-align: center;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #eee;
  background-color: #61dafb;
`

export const Cart: React.FC<Props> = ({ list, counter, displayAll }: Props) => {

  useEffect(() => {
    // get the cart products
    console.log(' Use effect is getting executed and SUBSCRIBED to the data');

    return () => {
      console.log('UNSUBSCRIBED'); // componentWillUnmount
    }
  }, [list, counter]);

  /**
   * execute only once on component mount - pass an empty
   * executes on props change - pass the props
   */

  return (
    <CartContainer>
      {list.length}<br />Products
      {displayAll && <div>
      Title - Price - Qty
      </div>}
      {displayAll && <div>
        {list?.map(({title, price, quantity}, index) => (
          <div key={index}>
            {title} - {price} - {quantity}
          </div>
        ))}
      </div>}
    </CartContainer>
  )
};