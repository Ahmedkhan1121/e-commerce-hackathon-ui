import { navList } from "@/utils/helper"
import Link from "next/link"
import { ScrollBar, ScrollArea } from "../ui/scroll-area"

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

export function ScrollListAbout() {
  return (
    <ScrollArea className=" whitespace-nowrap bg-[#F9F9F9] hidden w-[100%] max-[600px]:block  ">
      
      <ul className={`flex items-center justify-center p-4 gap-6 text-[#726E8D] `}>
     {
    navList.map((e,i)=>{
        return(<li key={i} className='capitalize hover:cursor-pointer max-[730px]:text-sm'><Link href={e.Link}>{e.List}</Link></li>)
    })
     }
    </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
