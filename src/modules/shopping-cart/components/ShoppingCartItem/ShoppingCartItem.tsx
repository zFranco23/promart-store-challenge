import styled from 'styled-components';
import Quantity from '../Quantity/Quantity';
import { useCallback } from 'react';
import { useAppDispatch } from '../../../../hooks/store';
import { useCurrency } from '../../../currency/hooks/useCurrency';

import { actions as scActions } from '../../../shopping-cart/duck';
import type { ShoppingCartItem as SCItem } from '../../../../entities/shopping-cart';
import { priceFormatter } from '../../../../utils/number';

const CartItem = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const RemoveCartButton = styled.button`
  position: absolute;
  z-index: 2;
  top: -4px;
  right: -4px;
  background-color: #ff6e00;
  display: flex;
  alignitems: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.4rem;
`;

const ImageContainer = styled.div`
  flex-basis: 25%;
`;

const ItemImage = styled.img`
  max-width: 80%;
  margin: 0 auto;
  height: 100px;
  object-fit: contain;
`;

const ItemDetails = styled.div`
  background-color: #ebeeef;
  border-radius: 10px;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const ItemName = styled.span`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemDesc = styled.span`
  font-size: 14px;
  color: #667479;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemPrice = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

type Props = {
  item: SCItem;
  readOnly?: boolean;
};

const ShoppingCartItem = ({ item, readOnly = false }: Props) => {
  const { id, description, image, price, title, quantity } = item;

  const currency = useCurrency();
  const dispatch = useAppDispatch();

  const handleAddItem = useCallback(() => {
    const scItem: SCItem = {
      ...item,
      quantity: 1,
    };
    dispatch(scActions.addItemToCart(scItem));
  }, [dispatch, item]);

  const handleRemoveItem = useCallback(() => {
    const scItem: SCItem = {
      ...item,
      quantity: -1,
    };
    dispatch(scActions.addItemToCart(scItem));
  }, [dispatch, item]);

  const handleRemoveCartItem = () => dispatch(scActions.removeItemCart(id));

  return (
    <CartItem>
      {!readOnly && (
        <RemoveCartButton onClick={handleRemoveCartItem}>
          <i className='material-icons text-white text-md'>close</i>
        </RemoveCartButton>
      )}
      <ImageContainer>
        <ItemImage src={image} alt='item' />
      </ImageContainer>
      <ItemDetails>
        <ItemName>{title}</ItemName>
        <ItemDesc>{description}</ItemDesc>
        <div className='flex items-center justify-between mt-4'>
          <ItemPrice>{priceFormatter(price, currency ? currency.symbol : '')}</ItemPrice>
          {readOnly ? (
            <span>{quantity} uds.</span>
          ) : (
            <Quantity
              quantity={quantity}
              addHandler={handleAddItem}
              removeHandler={handleRemoveItem}
            />
          )}
        </div>
      </ItemDetails>
    </CartItem>
  );
};

export default ShoppingCartItem;
