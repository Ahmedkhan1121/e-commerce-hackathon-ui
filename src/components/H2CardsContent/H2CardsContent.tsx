import Link from 'next/link'
import React from 'react'

function H2CardsContent() {
  return (
    // parent div
    <div className='flex flex-col justify-between w-[634px] h-[478px] bg-[#2A254B] text-white p-[60px] max-[1360px]:w-[580px] max-[1230px]:w-[550px] max-[1180px]:w-[520px] max-[1130px]:w-[490px] max-[1130px]:px-[45px] max-[1040px]:size-[450px] max-[960px]:size-[420px] max-[900px]:w-[390px] max-[900px]:h-[380px] max-[900px]:px-[33px]  max-[840px]:size-[360px]  max-[770px]:size-[340px]  max-[770px]:pt-[35px] max-[740px]:size-[320px] max-[740px]:pt-[30px] max-[740px]:px-[28px] max-[700px]:size-[290px]  max-[640px]:h-[250px] max-[620px]:w-[240px] max-[620px]:h-[230px] max-[620px]:px-[16px] 
    max-[530px]:w-[400px] max-[530px]:h-[270px] max-[530px]:px-[30px] max-[440px]:w-[360px] max-[440px]:px-[25px] max-[390px]:w-[330px] max-[390px]:h-[230px] max-[355px]:w-[290px] max-[355px]:pl-[20px] max-[320px]:w-[260px] max-[320px]:h-[210px] max-[290px]:w-[250px]'>
        <div className='flex flex-col gap-4 '>
        <h2 className='text-3xl w-[400px] max-[1050px]:w-[383px] max-[900px]:text-2xl max-[900px]:w-[320px] max-[840px]:w-[280px]   max-[740px]:w-[260px]  max-[700px]:w-[240px] max-[700px]:text-xl max-[880px]:text-[22px] max-[640px]:text-[18px] max-[620px]:w-[200px] max-[620px]:text-[15px]  max-[530px]:text-2xl  max-[530px]:w-[320px] max-[390px]:text-[19px] max-[370px]:w-[253px]  max-[320px]:w-[215px] max-[290px]:w-[205px]  max-[320px]:text-[15px] ' >It started with a small idea</h2>
        <p className='w-[495px] max-[1230px]:w-[445px] max-[1180px]:w-[415px] max-[1040px]:w-[360px] max-[900px]:w-[320px] max-[840px]:w-[290px]  max-[840px]:text-sm  max-[740px]:w-[260px] max-[700px]:w-[240px] max-[700px]:text-[12px] max-[640px]:pb-[15px] max-[640px]:text-[12px]  max-[620px]:w-[200px] max-[620px]:text-[11px] max-[530px]:w-[300px] max-[360px]:w-[260px] max-[360px]:pb-[25px] max-[320px]:text-[10px] max-[320px]:w-[215px]'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
      </div>
        {/* button */}
      <div>
      <button className='py-3 px-7 bg-[#F9F9F926] text-white max-[780px]:px-[6px] max-[780px]:text-sm max-[640px]:py-2 max-[620px]:text-[11px] max-[620px]:py-1 max-[530px]:text-[14px] max-[530px]:py-2 max-[490px]:text-[14px] max-[490px]:py-1  max-[360px]:text-[12px] max-[360px]:py-1'> <Link href={`/product`}>View collection</Link> </button>
      </div>
    </div>
  )
}

export default H2CardsContent
