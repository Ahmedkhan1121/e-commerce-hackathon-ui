import React from 'react'
import CeramicsCard from '../CeramicsCard/CeramicsCard'
import Link from 'next/link'

function Ceramics() {
  return (
    <section className='flex flex-col gap-5 p-[40px] max-[500px]:px-3 max-[403px]:px-1'>

      <div className=' relative left-5 max-[300px]:w-[150px]'>
        <h2 className='text-2xl '>New ceramics</h2>
    </div>
    {/* New ceramics card */}
        <CeramicsCard/>
      {/* button */}
      <div className='text-center mt-[30px]'>
        <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'><Link href={`/product`}>View collection</Link></button>
      </div>
    </section>
  )
}

export default Ceramics
