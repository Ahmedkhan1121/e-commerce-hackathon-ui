'use client';
import NavbarProduct from '../NavbarProduct/NavbarProduct'
// import { usePathname } from 'next/navigation'

function HeaderProduct() {
  // const  topBarPath  = usePathname()
  return (
    <header className='max-[740px]:h-[5px] bg-black'>
      <NavbarProduct/>
    </header>
  )
}

export default HeaderProduct
