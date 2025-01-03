import React from 'react';
import NavLogoProduct from '../NavLogoProduct/NavLogoProduct';
import NavListProduct from '../NavListproduct/NavListProduct';
import NavIcons from '../NavIcons/NavIcons';



function NavbarProduct() {
  return (
   <>
   
    <nav className='flex items-center justify-between py-[10px] px-[75px] max-[1030px]:px-5 border-b-2'>
      <NavLogoProduct/>
      <NavListProduct/>
      <NavIcons/>
    </nav>
   </>
  )
}

export default NavbarProduct
