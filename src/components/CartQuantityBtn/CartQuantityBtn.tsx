'use client'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { TfiMinus } from 'react-icons/tfi';

function CartQuantityBtn() {
    const [quanityValu,setQuantityValue] =useState<number>(0);
    
    const increaseQuantity = () => {
        setQuantityValue(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantityValue(prev => (prev > 0 ? prev - 1 : 0));
    };

  return (
 
      <div className='flex justify-between items-center py-[16px] px-[10px]  w-[100px] bg-[#f9f9f9] max-[610px]:py-[8px]'>
      <button className='cursor-pointer text-[12px] text-black' onClick={decreaseQuantity}><TfiMinus /></button>
      <h2>{quanityValu}</h2>
      <button className='cursor-pointer text-[15px]' onClick={increaseQuantity}><FiPlus /></button>
     
    </div>
  
  )
}

export default CartQuantityBtn
