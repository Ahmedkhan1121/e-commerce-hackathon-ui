'use client';
import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ourPopularProducts } from "@/utils/helper";

export interface Artwork {
  artist: string
  art: string
}



export default  function ScrollImg() {
  return (
    <ScrollArea className="w-[550px] max-[400px]:w-[100vw] whitespace-nowrap rounded-md border hidden max-[630px]:block">
      <div className="flex w-max space-x-4 p-4">
        {ourPopularProducts.map((e) => (
        //   <figure key={artwork.artist} className="shrink-0">
        //     <div className="overflow-hidden rounded-md">
        //       <Image
        //         src={artwork.art}
        //         alt={`Photo by ${artwork.artist}`}
        //         className="aspect-[3/4] h-fit w-fit object-cover"
        //         width={300}
        //         height={400}
        //       />
        //     </div>
        //     <figcaption className="pt-2 text-xs text-muted-foreground">
        //       Photo by{" "}
        //       <span className="font-semibold text-foreground">
        //         {artwork.artist}
        //       </span>
        //     </figcaption>
        //   </figure>
        <>
         <div key={e.id} className='flex flex-col gap-3'>
                     <Image  className={`  h-[375px] `}
                     style={{width:e.with}}
                    src={e.imgUrl}
                    alt='Ceramics Img'
                    height={200}
                    width={200}
                    
                    />
                    <h5>{e.heading}</h5>
                    <p>{e.price}</p>
                   
                  </div>
        </>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
