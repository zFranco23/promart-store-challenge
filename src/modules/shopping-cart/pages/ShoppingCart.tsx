import { useNavigate } from "react-router-dom";
import MainButton from "../../../common/components/MainButton/MainButton";
import { FromMobileElem, MobileElem } from "../../../utils/responsive";
import useShoppingCart from "../hooks/useShoppingCart";
import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const { items, totalPrice } = useShoppingCart();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <MobileElem>
        <div className="h-screen v-screen">
          <div className="h-full flex flex-col justify-between p-8">
            <div className="flex relative items-center">
              <div className="absolute left-0 top-0.5">
                <button onClick={handleGoBack}>
                  <i className="material-icons">arrow_back</i>
                </button>
              </div>

              <p className="text-center m-auto font-bold text-orange">
                Mi carrito
              </p>
            </div>
            <p className="font-bold mt-8">
              ¡Tienes {items.length} productos en tu carrito!
            </p>
            <div className="grow max-wfull overflow-auto mt-4 mb-8 p-4">
              <div className="flex flex-col gap-6">
                {items.map((sc) => (
                  <ShoppingCartItem key={`sc-item-${sc.id}`} item={sc} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-4">
                <p>Total</p>
                <p>{totalPrice}</p>
              </div>
              <MainButton className="w-full">¡Lo quiero!</MainButton>
            </div>
          </div>
        </div>
      </MobileElem>
      <FromMobileElem>wwwwq</FromMobileElem>
    </div>
  );
};

export default ShoppingCart;
