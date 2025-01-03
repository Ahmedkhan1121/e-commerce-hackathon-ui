import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";

function H2SignUpContent() {
  return (
    <div className='flex flex-col gap-9 items-center text-center text-white  max-[420px]:text-start max-[420px]:items-start'>
     <div className='flex flex-col gap-4 items-center max-[420px]:items-start ' >
     <h2 className='w-[494px] text-3xl max-[670px]:text-3xl max-[570px]:text-2xl max-[570px]:w-[430px] max-[480px]:w-[380px] max-[400px]:w-[300px] max-[345px]:text-xl max-[345px]:w-[250px] max-[310px]:w-[240px]  '>Join the club and get the benefits</h2>
      <p className='w-[410px]  max-[670px]:w-[430px] max-[460px]:w-[380px] max-[600px]:w-[320px] max-[430px]:w-[280px] max-[400px]:w-[240px] max-[310px]:w-[220px] max-[330px]:text-sm  '>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
    </div> 
     <ul className='flex  justify-center gap-6 max-[900px]:gap-3 max-[530px]:gap-2 max-[420px]:flex-col max-[420px]:justify-start '>
       <li className='flex items-center gap-3  max-[530px]:gap-2 max-[500px]:text-sm max-[440px]:gap-[2px] '><IoIosCheckmarkCircle /> Exclusive offers  </li>
       <li className='flex items-center gap-3  max-[530px]:gap-2 max-[500px]:text-sm max-[440px]:gap-[2px]'><IoIosCheckmarkCircle /> Free events      </li>
       <li className='flex items-center gap-3  max-[530px]:gap-2 max-[500px]:text-sm max-[440px]:gap-[2px]'><IoIosCheckmarkCircle /> Large discounts   </li>
    </ul> 
    </div>
  )
}

export default H2SignUpContent
