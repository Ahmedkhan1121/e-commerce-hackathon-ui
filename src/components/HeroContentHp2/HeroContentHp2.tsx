import Link from 'next/link'
import React from 'react'

// ya homepage2 ke hero ka content ka component he 

function HeroContentHp2() {
  return (
    <div className='flex flex-col justify-between p-[45px] bg-white w-[630px] h-[434px] max-[870px]:w-[580px] max-[810px]:w-[540px] max-[810px]:h-[400px] max-[780px]:w-[500px] max-[780px]:h-[370px] max-[672px]:p-[35px]  max-[560px]:w-[430px] max-[560px]:h-[320px] max-[450px]:pt-[50px] max-[427px]:pr-[0px] max-[430px]:p-[15px] max-[430px]:w-[360px] max-[380px]:w-[320px] max-[330px]:w-[260px] max-[290px]:w-[230px]  '>
      <div className='flex flex-col gap-5'>
        <h2 className='w-[513px] text-3xl font-bold text-[#22202E] max-[870px]:w-[480px] max-[672px]:w-[420px] max-[560px]:w-[368px] max-[450px]:text-2xl max-[430px]:w-[288px] max-[380px]:w-[265px] max-[380px]:text-xl max-[330px]:w-[220px] max-[290px]:w-[199px]'>Luxury homeware for people who love timeless design quality</h2>
        <p className='w-[343px] text-[#5B5676] max-[430px]:w-[298px] max-[380px]:w-[240px] max-[290px]:w-[186px] '>Shop the new Spring 2022 collection today</p>
      </div>

      <div className=' max-[390px]:py-9'>
      <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'><Link href={`/product`}>View collection</Link></button>
      </div>
    </div>
  )
}

export default HeroContentHp2
