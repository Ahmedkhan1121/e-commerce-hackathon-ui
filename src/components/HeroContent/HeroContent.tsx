import Link from 'next/link'
import React from 'react'

function HeroContent() {
  return (

    <div className='bg-[#2A254B] w-[800px]  max-[580px]:w-[99%] flex flex-col max-[790px]:py-10 max-[790px]:items-center max-[790px]:text-center '>
{/* 
      is me gap lagane ka leya flez or flex-col laya her ot button ko strt me karne ka leya item stat 
      keta he q ka jab flex-col  huta he to item- xn par kam karta he  */}
        <div className='p-14 flex flex-col gap-12 items-start max-[790px]:items-center max-[1030px]:pb-5 max-[860px]:gap-5 max-[830px]:pb-1 max-[820px]:pt-6' >
      <h1 className='text-white text-3xl font-bold w-[450px] max-[860px]:text-2xl max-[790px]:text-xl max-[580px]:w-[85%]'>The furniture brand for the future, with timeless designs</h1>
      <button className='py-3 px-7 bg-[#F9F9F926] text-white max-[290px]:px-5 '><Link href={`/product`}>View collection</Link></button>
    </div>

    {/* peragraf */}

    <div className='pl-14 pt-16  w-[650px] max-[1132px]:pt-7 max-[1132px]:w-[600px] max-[1030px]:pt-2 max-[1030px]:text-sm max-[1030px]:w-[550px] max-[880px]:w-[500px] max-[580px]:w-[99%]'>
      <p className='text-white max-[830px]:text-[13px] max-[580px]:w-[85%]'>A new era in eco friendly furniture with Avelon, the French luxury retail 
      brand with nice fonts, tasteful colors and a beautiful way to display things digitally 
      using modern web technologies.</p>
    </div>

    </div>
  )
}

export default HeroContent
