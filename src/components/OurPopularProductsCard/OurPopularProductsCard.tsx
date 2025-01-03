
import { ourPopularProducts } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

function OurPopularProductsCard() {
  return (
    <>
    {
      ourPopularProducts.map((e)=>{
        return(
        <div key={e.id} className='flex flex-col gap-3 max-[630px]:hidden'>
             <Image  className={`  h-[375px]  max-[820px]:h-[340px] max-[720px]:h-[300px]`}
             style={{width:e.with}}
            src={e.imgUrl}
            alt='Ceramics Img'
            height={200}
            width={200}
            
            />
            <h5>{e.heading}</h5>
            <p>{e.price}</p>
           
          </div>
          
        )
      })
     }  
    </>
  )
}

export default OurPopularProductsCard
