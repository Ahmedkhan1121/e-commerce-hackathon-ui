import React from 'react'
import GlobalBrandContent from '../GlobalBrandContent/GlobalBrandContent'
import GlobalBrandImg from '../GlobalBrandImg/GlobalBrandImg'

function GlobalBrand() {
  return (
    <section className='flex h-screen max-[590px]:flex-col '>
        
            <GlobalBrandContent/>
        
      
            <GlobalBrandImg/>
        
    </section>
  )
}

export default GlobalBrand
