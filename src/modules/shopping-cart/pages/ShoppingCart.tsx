import { useNavigate } from 'react-router-dom';
import MainButton from '../../../common/components/MainButton/MainButton';
import { FromMobileElem, MobileElem } from '../../../utils/responsive';
import useShoppingCart from '../hooks/useShoppingCart';
import ItemsContent from '../components/ItemsContent/ItemsContent';

import { priceFormatter } from '../../../utils/number';
import { useCurrency } from '../../currency/hooks/useCurrency';

const ShoppingCart = () => {
  const navigate = useNavigate();

  const { items, totalPrice } = useShoppingCart();
  const currency = useCurrency();
  const handleGoBack = () => {
    navigate(-1);
  };

  const hastCartItems = items.length > 0;

  const handleCheckout = () => {
    if (hastCartItems) console.log('Checkout process');
    else navigate('/');
  };

  return (
    <div>
      <MobileElem>
        <div className='h-screen v-screen'>
          <div className='h-full flex flex-col justify-between p-8'>
            <div className='flex relative items-center'>
              <div className='absolute left-0 top-0.5'>
                <button onClick={handleGoBack}>
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
      </MobileElem>
      <FromMobileElem>{'Shopping cart desktop :)'}</FromMobileElem>
    </div>
  );
};

export default ShoppingCart;
