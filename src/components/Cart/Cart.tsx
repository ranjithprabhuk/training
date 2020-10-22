import React from 'react';

interface Props {
  list: Array<any>;
}

export const Cart: React.FC<Props> = ({ list }: Props) => {
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