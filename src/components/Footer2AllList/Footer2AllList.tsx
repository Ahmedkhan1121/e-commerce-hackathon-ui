import React from 'react'
import Footer2Content from '../Footer2Content/Footer2Content'
import Footer2Icons from '../Footer2Icons/Footer2Icons'
import Footer2ListContent from '../Footer2ListContent/Footer2ListContent'

function Footer2AllList() {
  return (
    <div className='flex p-[50px]  gap-[70px] '>
    <Footer2Content/>
      <Footer2Icons/>
      <Footer2ListContent/>
    </div>
  )
}

export default Footer2AllList
