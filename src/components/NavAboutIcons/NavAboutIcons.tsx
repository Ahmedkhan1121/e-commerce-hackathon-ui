'use client';
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { useFurnContext } from "@/Context/Context";
import Link from "next/link";


function NavAboutIcons() {
    // contexthook
    const aboutContext=useFurnContext()
 return (
    <div className='flex gap-3 max-[730px]:absolute right-14 max-[740px]:right-3 '>
      <IoIosSearch />
      <Link href={`/cart`}><RiShoppingCart2Line /></Link>
      <CgProfile />
      <div className='hidden max-[740px]:flex' onClick={aboutContext.onAboutToggle}>
            <CiMenuFries />
            </div>
    </div>
  )
};

export default NavAboutIcons
