import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CenterContent from '../../components/CenterContent/CenterContent';
import useShoppingCart from '../../../modules/shopping-cart/hooks/useShoppingCart';
import { FromMobileElem, MobileElem } from '../../../utils/responsive';

import homeIcon from '../../../assets/icons/home-icon.png';
import Logo from '../../components/PromartLogo/Logo';

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
          </MobileElem>
          <FromMobileElem>
            <Link to='/'>
              <img src={homeIcon} className='h-8 w-9' />
            </Link>
          </FromMobileElem>
          <MobileElem>
            <Link to='/'>
              <Logo />
            </Link>
          </MobileElem>
          <Link to='/cart'>
            <div className='relative flex'>
              {items.length > 0 ? cartItemsCount : null}
              <i className='material-icons text-white'>shopping_cart</i>
            </div>
          </Link>
        </div>
      </CenterContent>
    </StyledNavbar>
  );
};

export default Navbar;
