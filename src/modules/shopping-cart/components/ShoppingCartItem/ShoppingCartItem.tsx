import styled from "styled-components";
import type { ShoppingCartItem as SCItem } from "../../../../entities/shopping-cart";

const CartItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  width: 30%;
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
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
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
  font-size: 2.2rem;
  font-weight: 700;
`;

type Props = {
  item: SCItem;
};

const ShoppingCartItem = ({ item }: Props) => {
  const { description, image, price, title, quantity } = item;
  return (
    <CartItem>
      <ImageContainer>
        <ItemImage src={image} alt="item" />
      </ImageContainer>
      <ItemDetails>
        <ItemName>{title}</ItemName>
        <ItemDesc>{description}</ItemDesc>
        <ItemPrice>${price}</ItemPrice>
        {quantity}
      </ItemDetails>
    </CartItem>
  );
};

export default ShoppingCartItem;
