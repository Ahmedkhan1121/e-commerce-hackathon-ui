import React from 'react'
import CartProduct from '../CartProduct/CartProduct'
import CartQuantityBtn from '../CartQuantityBtn/CartQuantityBtn'

function CartTableData() {
  return (
    <>
       <div>
           <CartProduct/> 
        </div>
        <div className='flex items-center  gap-[150px] max-[830px]:gap-[90px] max-[650px]:gap-[60px]'>
            <div className='max-[610px]:hidden'><CartQuantityBtn/></div>
            <div  className='max-[610px]:hidden'><p>£85</p></div>
        </div>
    </>
  )
}

export default CartTableData
