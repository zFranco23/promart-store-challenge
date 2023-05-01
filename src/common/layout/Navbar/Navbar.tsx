import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CenterContent from '../../components/CenterContent/CenterContent';
import Logo from '../../components/PromartLogo/Logo';

import { FromMobileElem, MobileElem } from '../../../utils/responsive';
import { useAppDispatch } from '../../../hooks/store';

import useShoppingCart from '../../../modules/shopping-cart/hooks/useShoppingCart';
import homeIcon from '../../../assets/icons/home-icon.png';

import { actions as scActions } from '../../../modules/shopping-cart/duck';

const StyledNavbar = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 100;
  background: #ff6e00;
  border-bottom: 1px solid red;
`;

const Navbar = () => {
  const { items } = useShoppingCart();

  const dispatch = useAppDispatch();

  const handleOpenShoppingCart = () => {
    dispatch(scActions.openCartDrawer());
  };

  const cartItemsCount = (
    <div className='absolute -right-2 -top-3 bg-black rounded-full w-7 h-7 flex items-center justify-center'>
      <span className='text-white text-lg font-bold'>{items.length}</span>
    </div>
  );

  return (
    <StyledNavbar>
      <CenterContent>
        <div className='flex justify-between items-center'>
          <MobileElem>
            <button className='flex items-center justify-center'>
              <i className='material-icons text-white'>menu</i>
            </button>
            <Link to='/'>
              <Logo />
            </Link>
            <Link to='/cart'>
              <div className='relative flex'>
                {items.length > 0 ? cartItemsCount : null}
                <i className='material-icons text-white'>shopping_cart</i>
              </div>
            </Link>
          </MobileElem>
          <FromMobileElem>
            <Link to='/'>
              <img src={homeIcon} className='h-8 w-9' />
            </Link>
            <button onClick={handleOpenShoppingCart}>
              <div className='relative flex'>
                {items.length > 0 ? cartItemsCount : null}
                <i className='material-icons text-white'>shopping_cart</i>
              </div>
            </button>
          </FromMobileElem>
        </div>
      </CenterContent>
    </StyledNavbar>
  );
};

export default Navbar;
