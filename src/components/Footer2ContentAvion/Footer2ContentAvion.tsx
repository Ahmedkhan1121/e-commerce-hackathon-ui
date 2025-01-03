
import { avionFooterList } from '@/utils/helper'
import React from 'react'

function Footer2ContentAvion() {
  return (
    <div className='flex flex-col gap-4 '>
      <h2 className='text-3xl'>Avion</h2>
      <ul className='flex flex-col gap-1 '>
        {
         avionFooterList.map((e)=>{
            return( <li key={e.id}>{e.list}</li> )
         })
        }
      </ul>
    </div>
  )
}

export default Footer2ContentAvion
