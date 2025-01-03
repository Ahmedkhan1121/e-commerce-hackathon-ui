import Image from 'next/image'
import React from 'react'

function GlobalBrandImg() {
  return (
    <div>
      <Image className='h-screen min-[1390px]:w-[130vh]   max-[1150px]:w-[110vh] max-[590px]:h-[70vh] max-[445px]:h-[60vh] '
      src={`/images/globleBrand/6ec9d1d8cc3cbaace9b398067e11a4af.jpeg`}
      alt='global brand'
      height={100}
      width={720}
      />

    </div>
  )
}

export default GlobalBrandImg
