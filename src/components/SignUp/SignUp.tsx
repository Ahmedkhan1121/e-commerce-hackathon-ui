import React from 'react'
import SignUpContent from '../SignUpContent/SignUpContent'
import SignUpSearchBar from '../SignUpSearchBar/SignUpSearchBar'

function SignUp() {
  return (
    //is me text ko center  
    <section className='bg-[#F9F9F9]  flex justify-center py-[60px] max-[690px]:py-[20px]   '>
      
      <div className='bg-white w-[1173px] pt-[50px] max-[1350px]:w-[1100px] max-[1220px]:w-[1000px] max-[1110px]:w-[900px] max-[980px]:w-[800px] max-[850px]:w-[700px] max-[790px]:w-[600px] max-[660px]:w-[550px] max-[600px]:w-[450px] max-[480px]:w-[380px] max-[400px]:w-[340px] max-[355px]:w-[300px] max-[330px]:w-[95%] max-[290px]:pt-[40px]' >
      <SignUpContent/>

      <SignUpSearchBar />
      </div>
      
    </section>
  )
}

export default SignUp
