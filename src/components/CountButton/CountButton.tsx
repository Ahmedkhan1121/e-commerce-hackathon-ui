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
    <div className='flex items-center justify-between py-[12px] px-[16px] w-[122px] bg-[#F9F9F9]  '>
     <button className='text-[#CAC6DA] flex items-center 'onClick={onDncriment}><FaMinus /></button>
     <h2>{countValue}</h2>
     <button className='text-[#CAC6DA] flex items-center' onClick={onIncriment}><FiPlus /></button> 
    </div>
  )
}

export default CountButton

{/* <FaRegWindowMinimize /> */}