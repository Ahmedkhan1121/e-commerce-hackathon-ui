import React from 'react'
import Footer2Hr from '../Footer2Hr/Footer2Hr'
import Footer2AllList from '../Footer2AllList/Footer2AllList'

function Footer2() {
  return (
    <footer className='text-white bg-[#2A254B] p-[20px]'>
      {/* All list */}
    <Footer2AllList/>
    {/* hr */}
     <Footer2Hr/>

    </footer>
  )
}

export default Footer2
