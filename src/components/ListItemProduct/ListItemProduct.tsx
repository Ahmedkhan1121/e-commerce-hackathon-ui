
import { navList } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'
// {onNav}:{onNav:boolean}
// ${onNav ? 'flex' : 'min-[671px]:flex  max-[670px]:hidden'}
function ListItemProduct() {
  return (
    <ul className={`flex items-center justify-center p-4 gap-6 text-[#726E8D] max-[670px]:flex-col max-30px[670px]:text-center  max-[1030px]:text-sm max-[830px]:gap-3 max-[740px]:flex-col`}>
     {
    navList.map((e,i)=>{
        return(<li key={i} className='capitalize hover:cursor-pointer'> <Link href={e.Link}>{e.List}</Link></li>)
    })
     }

    </ul>
  )
}

export default ListItemProduct
