
import { ourCompanyFooterlist } from '@/utils/helper'
import React from 'react'

function FooterOurCompany() {
  return (
    
    <div>
      <h4 className='text-white capitalize pb-3 '>Our company</h4>
      
    <ul className='flex flex-col gap-3'>
      {
        ourCompanyFooterlist.map((e)=>{
          return(<li className='text-white text-sm' key={e.id}>{e.list}</li>)
        })
      }
    </ul>
    </div>
  )
}

export default FooterOurCompany
