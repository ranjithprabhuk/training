import React, { useEffect } from 'react';

interface Props {
  list: Array<any>;
  counter?: number;
}

export const Cart: React.FC<Props> = ({ list, counter }: Props) => {

  useEffect(() => {
    // get the cart products
    console.log(' Use effect is getting executed and SUBSCRIBED to the data');

    return () => {
      console.log('UNSUBSCRIBED'); // componentWillUnmount
    }
  }, []);

  /**
   * execute only once on component mount - pass an empty
   * executes on props change - pass the props
   */

  return (
    <div className={'cart'}>
      {list.length} Products
      <div>
      Title - Price - Qty
      </div>
      <div>
        {list?.map(({title, price, quantity}, index) => (
          <div key={index}>
            {title} - {price} - {quantity}
          </div>
        ))}
      </div>
    </div>
  )
};