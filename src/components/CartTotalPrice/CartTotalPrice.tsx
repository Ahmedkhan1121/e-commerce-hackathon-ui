import React from 'react'

function CartTotalPrice() {
  return (
    <div className='flex flex-col items-end gap-3 pt-[50px] pb-[80px]'>

    <div className='flex flex-col gap-3'>

     <div className='flex gap-3 justify-end'>
        <h4 className='text-[#4E4D93] text-xl'>Subtotal</h4>
        <h4 className=' text-xl'>£210</h4>
    </div> 
    
        <p className='flex justify-end text-[#4E4D93] text-sm  max-[390px]:text-[12px] max-[310px]:text-[11px] max-[283px]:text-[10px]'>Taxes and shipping are calculated at checkout</p>

    </div>
    <div>
        <button className='bg-[#2A254B] py-[16px] px-[32px] text-white'>Go to checkout</button>
    </div>

    </div>
  )
}

export default CartTotalPrice
