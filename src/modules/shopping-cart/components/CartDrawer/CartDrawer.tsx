import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ItemsContent from '../ItemsContent/ItemsContent';
import MainButton from '../../../../common/components/MainButton/MainButton';
import Snackbar from '../../../../common/components/Snackbar/Snackbar';

import { priceFormatter } from '../../../../utils/number';
import { useCurrency } from '../../../currency/hooks/useCurrency';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import useShoppingCart from '../../hooks/useShoppingCart';

import { actions as scActions } from '../../duck';

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 42.5rem;
  height: 100vh;
  background-color: #ffffff;
  z-index: 9999;

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
  const isOpen = useAppSelector((state) => state.shoppingCart.isOpenCartDrawer);
  const currency = useCurrency();
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useShoppingCart();

  const [showCheckoutSnackbar, setShowCheckoutSnackbar] = useState<boolean>(false);
  const hastCartItems = items.length > 0;

  const handleCloseDrawer = () => {
    dispatch(scActions.closeCartDrawer());
  };

  const handleCheckout = () => {
    if (hastCartItems) setShowCheckoutSnackbar(true);
    else handleCloseDrawer();
  };

  useEffect(() => {
    if (!isOpen) setShowCheckoutSnackbar(false);
  }, [isOpen]);

  return isOpen ? (
    <>
      {showCheckoutSnackbar && <Snackbar type='success' message='Procesando compra....' />}
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
                    <p className='text-orange font-bold'>
                      {priceFormatter(totalPrice, currency ? currency.symbol : '')}
                    </p>
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
