'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

function TopBar() {
    const topPath = usePathname();

  return (
    <>
       <div className={`relative top-0 left-0 right-0 ${topPath === '/product' ? 'flex' :'hidden'} items-center justify-between px-5 bg-[#2A254B] text-white py-[10px]`}>
        <div className='flex items-center gap-2 '>
            <div><TbTruckDelivery /></div>
            <div><p>Free delivery on all orders over £50 with code easter checkout</p></div>
        </div>
        <div className=''>
        {/* <IoCloseOutline  /> */}
        <RiCloseLargeFill className=''/>

        </div>
    </div>
    </>
  )
}

export default TopBar
