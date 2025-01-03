import React from 'react'
import CeramicsCard from '../CeramicsCard/CeramicsCard'

function CeramicsP2() {
  return (
    <section className='flex flex-col gap-10 p-[40px]'>

    {/* New ceramics card */}
      
        <CeramicsCard/>
      
      {/* button */}
      <div className='text-center'>
        <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'>View collection</button>
      </div>
    </section>
  )
}

export default CeramicsP2
