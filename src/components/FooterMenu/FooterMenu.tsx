
import { menuFooterlist } from '@/utils/helper'
import React from 'react'

function FooterMenu() {
  return (
   <div>
     <h4 className='text-white capitalize pb-3 '>Menu</h4>
     <ul className='flex flex-col gap-3' >
      {
        menuFooterlist.map((e)=>{
            return(<li className='text-white text-sm' key={e.id}>{e.list}</li>  )
        })
      }
    </ul>
   </div>
  )
}

export default FooterMenu
