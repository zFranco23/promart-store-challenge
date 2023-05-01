import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Product } from "../../../entities";
import { fadeIn } from "../../animations/fadeIn";
import { ShoppingCartItem } from "../../../entities/shopping-cart";
import { useAppDispatch } from "../../../hooks/store";

import { actions as scActions } from "../../../modules/shopping-cart/duck";

const ProductWrap = styled.div`
  position: relative;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  // background-color: #ebeeef;
  border: 2px solid #eaeaea;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  &:hover {
    border: 2px solid #ff6e00;
    transform: scale(1.02);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  &:hover img {
    filter: grayscale(0);
  }

  &:hover button {
    display: flex;
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: contain;
  transition: all 0.3s ease-in-out;
  filter: grayscale(0.3);
`;

const ProductDetails = styled.div`
  padding: 1rem;
  height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ProductName = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
`;

const ProductDescription = styled.p`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: #666;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const AddToCartButton = styled.button`
  z-index: 2;
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #ff6e00;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  animation: ${fadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media (min-width: 768px) {
    display: none;
  }
`;

type Props = {
  product: Product;
};
const ProductCard = (props: Props) => {
  const { product } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { image, title, price, description } = product;

  const onAddToCart = () => {
    const scItem: ShoppingCartItem = {
      ...product,
      quantity: 1,
    };
    dispatch(scActions.addItemToCart(scItem));
    navigate("/cart");
  };

  return (
    <ProductWrap>
      <AddToCartButton onClick={onAddToCart}>
        <i className="material-icons">add</i>
      </AddToCartButton>
      <ProductImage src={image} alt={title} />
      <ProductDetails>
        <ProductName>{title}</ProductName>
        <div className="bg-neutral10 rounded-2xl p-2">
          <ProductDescription>{description}</ProductDescription>
          <ProductPrice>S/. {price}</ProductPrice>
        </div>
      </ProductDetails>
    </ProductWrap>
  );
};

export default ProductCard;
