import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from 'react-icons/ci';

function NavIcons() {
  return (
    <div className='flex gap-3'>
      <IoIosSearch />
      <RiShoppingCart2Line />
      <CgProfile />
      <div className='hidden'>
      <CiMenuFries />
      </div>
    </div>
  )
}

export default NavIcons
