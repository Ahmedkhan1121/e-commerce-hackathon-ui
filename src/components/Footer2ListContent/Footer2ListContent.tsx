import React from 'react'
import FooterMenu from '../FooterMenu/FooterMenu'
import FooterCategories from '../FooterCategories/FooterCategories'
import FooterOurCompany from '../FooterOurCompany/FooterOurCompany'

function Footer2ListContent() {
  return (
    <div className='flex  pl-[80px]  gap-[80px]'>
    <FooterMenu />
    
    <FooterCategories/>

    <FooterOurCompany/>
</div>
  )
}

export default Footer2ListContent
