import BrandDifferent from '@/components/BrandDifferent/BrandDifferent'
import CeramicsProductList from '@/components/CeramicsProductList/CeramicsProductList'
import HeroProductList from '@/components/HeroProductList/HeroProductList'
import SignUp from '@/components/SignUp/SignUp'
import { productList } from '@/utils/hepler'
import React from 'react'

async function page({params}:{  params: Promise<{ productItems: string }>
}) {
    const productId = (await params).productItems;
    const findItems = productList.find((e)=>{
        return e.id === +productId;
    })
    if(findItems){
        return(
         <>  
         <HeroProductList name={findItems.name} img={findItems.imgUrl} price={findItems.price}/>
         <CeramicsProductList />
         <BrandDifferent/>
         <SignUp/>
         {findItems.id}
         </>
        )
    }else{
        <h2> Not found</h2>
    }


}

export default page
