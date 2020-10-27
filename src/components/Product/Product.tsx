import React, { PropsWithChildren, useRef, useState } from 'react';
import { DisplayName } from '../DisplayName';

interface Props {
  id?: number;
  title: string;
  price: number;
  addToCart?: (product: any) => void;
  updateTitle: (data: {title: string, id: number}) => void;
}

export const Product: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(props.title);

  // uer ref
  const inputElementRef = useRef() as React.RefObject<HTMLInputElement>;
  const titleInputRef = useRef() as React.RefObject<HTMLInputElement>;

  const handeAddToCart = () => {
    props.addToCart && props.addToCart({
      title: props.title,
      price: props.price,
      quantity,
    });
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('quantity', event.target.value);
    setQuantity(parseInt(event.target.value));
    console.log(inputElementRef.current?.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const updateTitle = () => {
    setIsEdit(false);
    props.updateTitle({title, id: props.id || 0});
    console.log('title ref >>', titleInputRef.current?.setAttribute('type', 'password'));
    
  }

  return (
    <div className={'product'}>

      {!isEdit && <h3 onClick={() => setIsEdit(true)}>Name: {title}</h3>}
      {<div>
        <input type="text" value={title} onChange={handleTitleChange} ref={titleInputRef} />
        <button type="button" onClick={() => updateTitle()}>Update</button>
      </div>}

      <h6>Price: {props.price}</h6>
      <div>{props.children}</div>

      <div>
        <input type="number" min="1" max="5" onChange={handleQuantityChange} ref={inputElementRef} />
      </div>

      <button type="button" onClick={() => handeAddToCart()}>
        Add to Cart
      </button>
    </div>
  )
};