import React from 'react'
import CartTable from '../CartTable/CartTable'
import CartTotalPrice from '../CartTotalPrice/CartTotalPrice'

function CartSeaction() {
  return (
    <section className='flex flex-col bg-[#f9f9f9]'>
        <div className='px-[130px]  max-[950px]:px-[60px] max-[700px]:px-[30px] max-[340px]:px-[12px]'>
      <div><h1 className='text-3xl pt-[70px] pb-[20px] max-[355px]:text-2xl'>Your Shopping Cart</h1></div>
      <CartTable/>
      <CartTotalPrice/>
      </div>
    </section>
  )
}

export default CartSeaction
