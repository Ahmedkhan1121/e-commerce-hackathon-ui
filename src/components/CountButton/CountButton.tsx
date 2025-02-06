'use client'
import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";



function CountButton() {
    const [countValue,setCountValue]=useState<number>(0)

    const onIncriment=()=>{
        setCountValue(countValue+1)
    }
    const onDncriment=()=>{
        
        if(countValue>0){
            setCountValue(countValue-1)
        }else{
            setCountValue(0)
        }
    }
    
  return (
    <div className='flex items-center justify-center gap-5 py-[12px] rounded-md   w-[122px] bg-[#f9f9f9] max-[820px]:w-[100px] max-[750px]:w-[90px] max-[820px]:gap-4 max-[370px]:w-[300px]  max-[370px]:py-[14px] max-[365px]:w-[280px] max-[340px]:w-[250px] max-[310px]:w-[200px]'>
     <button className='text-[#CAC6DA] flex items-center 'onClick={onDncriment}><FaMinus /></button>
     <h2>{countValue}</h2>
     <button className='text-[#CAC6DA] flex items-center' onClick={onIncriment}><FiPlus /></button> 
    </div>
  )
}

export default CountButton

{/* <FaRegWindowMinimize /> */}