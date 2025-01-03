import React from 'react'
import H2SignUpContent from '../H2SignUpContent/H2SignUpContent'
import H2SignUpSearchBar from '../H2SignUpSearchBar/H2SignUpSearchBar'

function H2SignUp() {
  return (
    <section className='Bg-SignUp  py-[80px] max-[420px]:flex max-[420px]:flex-col  max-[420px]:items-start pl-[25px]  max-[420px]:pt-[30px] max-[420px]:pb-[0px] '>
      <H2SignUpContent/>
      <H2SignUpSearchBar/>
    </section>
  )
}

export default H2SignUp
