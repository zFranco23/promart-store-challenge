import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainButton from '../../../common/components/MainButton/MainButton';
import useShoppingCart from '../../shopping-cart/hooks/useShoppingCart';
import ItemsContent from '../../shopping-cart/components/ItemsContent/ItemsContent';
import PageLayout from '../../../common/layout/PageLayout/PageLayout';

import { FromMobileElem, MobileElem } from '../../../utils/responsive';
import { priceFormatter } from '../../../utils/number';
import { useCurrency } from '../../currency/hooks/useCurrency';
import Snackbar from '../../../common/components/Snackbar/Snackbar';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { orderCheckout } from '../duck';
import Loader from '../../../common/components/Loader/Loader';

const Checkout = () => {
  const navigate = useNavigate();
  const currency = useCurrency();
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useShoppingCart();

  const isLoading = useAppSelector((state) => state.checkout.isLoading);
  const checkoutSuccess = useAppSelector((state) => state.checkout.checkoutSuccess);
  const [showCheckoutSnackbar, setShowCheckoutSnackbar] = useState<boolean>(false);

  const hasCartItems = items.length > 0;

  const handleCheckout = () => {
    if (hasCartItems) {
      dispatch(orderCheckout(items));
    } else navigate('/');
  };

  useEffect(() => {
    if (checkoutSuccess) setShowCheckoutSnackbar(true);
  }, [checkoutSuccess]);

  useEffect(() => {
    if (showCheckoutSnackbar) {
      const timerId = setTimeout(() => (window.location.href = '/'), 2000);
      return () => clearTimeout(timerId);
    }
  }, [showCheckoutSnackbar]);

  return (
    <PageLayout>
      <div>
        {isLoading && <Loader />}
        {showCheckoutSnackbar && <Snackbar type='success' message='¡Gracias por tu compra!' />}
        <MobileElem>
          <div className=''>
            <div className='h-full flex flex-col justify-between px-8'>
              <div className='flex items-center mb-4'>
                <p className='text-center m-auto font-bold text-orange text-4xl'>Comprar</p>
              </div>
              {hasCartItems && (
                <div className='flex justify-between mb-4'>
                  <p>
                    Total x <span className='text-orange font-bold'>{items.length}</span> productos:{' '}
                  </p>
                  <p className='text-orange font-bold'>
                    {priceFormatter(totalPrice, currency ? currency.symbol : '')}
                  </p>
                </div>
              )}
              <div className='overflow-auto mb-10' style={{ maxHeight: '70vh' }}>
                <ItemsContent readOnly hasCartItems={hasCartItems} items={items} />
              </div>
              <MainButton className='w-full' onClick={handleCheckout}>
                {hasCartItems
                  ? priceFormatter(totalPrice, currency ? currency.symbol : '')
                  : 'Ver productos'}
              </MainButton>
            </div>
          </div>
        </MobileElem>
        <FromMobileElem>
          <h1 className='font-bold leading-tight text-4xl md:text-5xl md:text-left mt-8'>
            Confirma tu compra
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mt-10'>
            <div
              className='bg-gray-200 px-4 col-span-1 overflow-auto'
              style={{ maxHeight: '75vh' }}
            >
              <ItemsContent readOnly hasCartItems={hasCartItems} items={items} />
              {!hasCartItems && (
                <MainButton className='w-full max-w-full mt-4' onClick={handleCheckout}>
                  Ver productos
                </MainButton>
              )}
            </div>
            <div className='bg-gray-400 px-4 col-span-2'>
              {hasCartItems && (
                <div className='w-fit'>
                  <div className='flex items-center gap-20'>
                    <p>Total:</p>
                    <p className='text-orange font-bold'>
                      {priceFormatter(totalPrice, currency ? currency.symbol : '')}
                    </p>
                  </div>
                  <MainButton className='w-full max-w-full mt-4' onClick={handleCheckout}>
                    Pagar
                  </MainButton>
                </div>
              )}
            </div>
          </div>
        </FromMobileElem>
      </div>
    </PageLayout>
  );
};

export default Checkout;
