import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';

import { actions as scActions } from '../../duck';
import useShoppingCart from '../../hooks/useShoppingCart';
import ItemsContent from '../ItemsContent/ItemsContent';
import MainButton from '../../../../common/components/MainButton/MainButton';

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 40rem;
  height: 100vh;
  background-color: #ffffff;
  z-index: 10;

  transition: ;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const CartDrawer = () => {
  const { items, totalPrice } = useShoppingCart();
  const isOpen = useAppSelector((state) => state.shoppingCart.isOpenCartDrawer);
  const dispatch = useAppDispatch();

  const hastCartItems = items.length > 0;

  const handleCloseDrawer = () => {
    dispatch(scActions.closeCartDrawer());
  };

  const handleCheckout = () => {
    if (hastCartItems) console.log('Checkout process');
    else handleCloseDrawer();
  };

  return isOpen ? (
    <>
      <Overlay onClick={handleCloseDrawer} />
      <StyledDrawer>
        <div className='h-screen'>
          <div className='h-screen v-screen'>
            <div className='h-full flex flex-col justify-between p-8'>
              <div className='flex relative items-center'>
                <div className='absolute left-0 top-0.5'>
                  <button onClick={handleCloseDrawer}>
                    <i className='material-icons text-orange'>arrow_back</i>
                  </button>
                </div>

                <p className='text-center m-auto font-bold text-orange'>Mi carrito</p>
              </div>
              {hastCartItems && (
                <p className='font-bold mt-8'>
                  ¡Tienes {items.length} producto{items.length > 1 ? 's' : ''} en tu carrito!
                </p>
              )}
              <ItemsContent hasCartItems={hastCartItems} items={items} />

              <div>
                {hastCartItems && (
                  <div className='flex justify-between mb-4'>
                    <p>Total</p>
                    <p className='text-orange font-bold'>{totalPrice}</p>
                  </div>
                )}
                <MainButton className='w-full' onClick={handleCheckout}>
                  {hastCartItems ? '¡Lo quiero!' : 'Ver productos'}
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </StyledDrawer>
    </>
  ) : null;
};

export default CartDrawer;
