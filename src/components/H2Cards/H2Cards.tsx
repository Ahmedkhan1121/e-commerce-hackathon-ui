import React from 'react'
import H2CardsContent from '../H2CardsContent/H2CardsContent'
import H2CardsImg from '../H2CardsImg/H2CardsImg'

function H2Cards() {
  return (
    <section className=' flex justify-around py-[60px] px-[20px] max-[640px]:px-[15px] max-[530px]:flex-col max-[620px]:items-center max-[620px]:gap-5'>
        <H2CardsContent/>
        <H2CardsImg/>
    </section>
  )
}

export default H2Cards
