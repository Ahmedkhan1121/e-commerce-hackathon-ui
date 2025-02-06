import Image from 'next/image'
import React from 'react'
import CartQuantityBtn from '../CartQuantityBtn/CartQuantityBtn'

function CartProduct() {
  return (
    <div className='flex gap-3 '>
    <Image  className='w-[100px] h-[110px] max-[610px]:h-[135px]  max-[610px]:w-[115px] max-[360px]:h-[160px] '
    src={'/images/productList/fe1e8e060432bf77cee26297ca43e0e6.jpeg'}
    alt='product'
    height={200}
    width={100}
    /> 
    <div  className='flex flex-col justify-center gap-1 max-[610px]:justify-normal  max-[610px]:gap-[2px]'>
    <div className='flex flex-col gap-1'>
    <h2>Graystone vase</h2>
    <p className='w-[180px] text-sm   max-[365px]:w-[140px] max-[300px]:w-[120px] '>A timeless ceramic vase with 
    a tri color grey glaze.</p>
    </div>
    <p>£85</p>
    {/* responsive */}
    <div className='hidden max-[610px]:flex'>
    <CartQuantityBtn/>
    </div>
    </div>
    </div>
  )
}

export default CartProduct
