import { useState } from 'react';
import { Link } from "@remix-run/react";
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MenuSvg from '~/icons/MenuSvg';
import Cart from './Cart';
import CoffeeCupIcon from '~/icons/CoffeeCupIcon';
import CartCount from './CartCount';
import { useCartUtils } from '~/context/useCart';

function Header() {
  const [showMobileNav, toggleShowMobileNav] = useState(false);
  const { toggleIsCartOpen } = useCartUtils();

  return (
    <header className='flex text-slate-900 bg-slate-50 items-center p-4'>
      <p className='text-2xl'>
        <Link to='/'>westy coffee</Link>
      </p>
      <MobileNav
        showMobileNav={showMobileNav}
        toggleShowMobileNav={toggleShowMobileNav}
      />
      <div className='ml-auto flex'>
        <button
          className='grid place-items-center'
          type='button'
          aria-label='show navigation menu'
          onClick={() => {
            toggleShowMobileNav(true);
          }}
        >
          <MenuSvg />
        </button>
        <button
          type='button'
          title='Your Cart'
          aria-label='open your shopping cart'
          onClick={() => toggleIsCartOpen(true)}
          className='ml-4 mr-2 grid grid-cols-1 grid-rows-1 place-items-center text-center'
        >
          <div className='row-span-full col-span-full'>
            <CoffeeCupIcon w={'32'} h={'32'} />
          </div>
          <CartCount />
        </button>{' '}
      </div>
      <DesktopNav />

      <Cart />
    </header>
  );
}

export default Header;
