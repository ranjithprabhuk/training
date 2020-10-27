import React, { PropsWithChildren, useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import { SellerContext } from '../../App';
import { ISeller } from '../../data/productInfo';
import { ButtonBase } from '../ButtonBase';
import { DisplayName } from '../DisplayName';
// import { FlexBox } from '../../App';


interface Props {
  id?: number;
  title: string;
  price: number;
}

const ProductContainer = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Product: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(props.title);

  // use context react hook
  const sellerInfo: ISeller = useContext(SellerContext);
  console.log('seller info', sellerInfo);

  // uer ref
  const inputElementRef = useRef() as React.RefObject<HTMLInputElement>;
  const titleInputRef = useRef() as React.RefObject<HTMLInputElement>;

  const handeAddToCart = () => {
    sellerInfo.addToCart && sellerInfo.addToCart({
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
    sellerInfo.updateTitle?.({title, id: props.id || 0});
    // console.log('title ref >>', titleInputRef.current?.setAttribute('type', 'password'));
  }

  const decrementRating = () => {
    // sellerInfo.updateRating?.(rating); // same code rewritten below
    if (sellerInfo.updateRating) {
      sellerInfo.updateRating(--sellerInfo.rating);
    }
  }

  const incrementRating = () => {
    // sellerInfo.updateRating?.(rating); // same code rewritten below
    if (sellerInfo.updateRating) {
      sellerInfo.updateRating(++sellerInfo.rating);
    }
  }

  return (
    <ProductContainer>

      {!isEdit && <h3 onClick={() => setIsEdit(true)}>Name: {title}</h3>}
      {<div>
        <input type="text" value={title} onChange={handleTitleChange} ref={titleInputRef} />
        <ButtonBase type="button" onClick={() => updateTitle()} disabled={true}>Update</ButtonBase>
      </div>}

      <h6>Price: {props.price}</h6>
      <div>{props.children}</div>
      <h6 onClick={incrementRating}>Seller Name:{sellerInfo.name}</h6>
      <div onClick={() => decrementRating()}>Seller Rating: {sellerInfo.rating}</div>

      <div>
        <input type="number" min="1" max="5" onChange={handleQuantityChange} ref={inputElementRef} />
      </div>

      <ButtonBase type="button" onClick={() => handeAddToCart()} pad={'20px'}>
        Add to Cart
      </ButtonBase>
    </ProductContainer>
  )
};