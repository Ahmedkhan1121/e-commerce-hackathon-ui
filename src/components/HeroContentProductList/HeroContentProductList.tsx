import React from 'react'
import CountButton from '../CountButton/CountButton'

function HeroContentProductList({name,price}:{name:string,price:string}) {
  return (
    // main
    <div className='flex justify-center flex-col gap-7 px-[80px]  max-[1110px]:px-[60px] max-[1070px]:px-[40px]  max-[940px]:px-[60px] max-[930px]:px-[35px] max-[850px]:gap-3 max-[750px]:pb-[30px] max-[441px]:px-[20px]   ' >

      <div className='pb-[10px]'>
        <div><h2 className='text-2xl'>{name}</h2></div>
        <div><p className='text-2xl'>{price}</p></div>
      </div>
        
      {/* parent */}
      <div className='flex flex-col gap-4 '>
        <h4 className='font-bold'>Description</h4>
        
        <div>
          <div className='flex flex-col gap-4  '>
            <p className='w-[498px] text-[#505977] max-[1000px]:w-[450px] max-[900px]:w-[400px] max-[810px]:w-[370px] max-[411px]:w-[360px]  max-[411px]:text-sm max-[391px]:w-[320px] max-[360px]:w-[280px] max-[330px]:w-[245px] max-[290px]:w-[235px]'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
            <ul className='flex flex-col gap-1 text-[#505977]'>
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
            </div>
        </div>
      </div>
      {/* main div me 2 div */}
      <div className='pb-[20px] '>
        <div className='max-[360px]:pb-[10px] '><h2>Dimensions</h2></div>
      
        {/* is me 3 div bane ga or har div me 2 div huge or us ko flex-col  */}
       <div className='flex gap-14 max-[360px]:gap-10 max-[330px]:gap-7'>
        <div className='flex flex-col gap-2'>
          <p>Height</p>
          <p className='text-[#505977]'>110cm</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>With</p>
          <p className='text-[#505977]'>75cm</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Depth</p>
          <p className='text-[#505977]'>50cm</p>
          
        </div>
       
       </div>
      </div>
    {/* card */}
     <div className='flex justify-between items-center max-[411px]:flex-col  max-[411px]:items-start max-[411px]:gap-6   '>
      <div className='flex items-center  gap-5 max-[411px]:flex-col max-[411px]:items-start '>
        <h4>Amount:</h4>
        {/* count button */}
       <CountButton />
        {/* <button></button> */}
      </div>
      <button className='bg-[#2A254B] py-[12px] px-[20px] text-white '> Add to card</button>
     </div>
    </div>
  )
}

export default HeroContentProductList
