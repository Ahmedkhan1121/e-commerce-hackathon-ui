import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';

function NavIcons() {
  return (
    <div className='flex gap-3 max-[730px]:absolute right-14'>
      <IoIosSearch />
      <Link href={`/cart`}><RiShoppingCart2Line /></Link>
      <CgProfile />
    </div>
  )
}

export default NavIcons
