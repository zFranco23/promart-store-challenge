import CartDrawer from '../../../modules/shopping-cart/components/CartDrawer/CartDrawer';
import CenterContent from '../../components/CenterContent/CenterContent';
import Navbar from '../Navbar/Navbar';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

/**
 *
 * @returns Page layout style wrapper
 */
const PageLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <CartDrawer />
      <div className='w-full mt-28'>
        <CenterContent>{children}</CenterContent>
      </div>
    </div>
  );
};

export default PageLayout;
