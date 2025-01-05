"use client"

import { ProductContextType, productListType } from "@/utils/type/type"
import { createContext, useContext, useEffect, useState } from "react"

const ProductCont =createContext<ProductContextType|null>(null)

function ProductContext({children}:{children: React.ReactNode;}) {

    const [navTogg,setNavTogg] = useState<boolean>(false);
     const onHandlePrev = () => {
           setNavTogg((prev) => !prev)
     } 

    // ya par usstate banega q ka productApi ke ander se fetchProduct k bhair nekalna he
    const [productList,setProductList] =useState<productListType[]>([])

    const productApi= async(api:string) =>{
        try {
           const productData =await fetch(api)
           const fetchProduct = await productData.json()
           setProductList(fetchProduct)
        } catch (error) {
            throw new Error('product not found')
        }

    }

    // useEffect
   useEffect(()=>{
    productApi('/api/product')
   },[])

  return (
  <ProductCont.Provider value={{productList,navTogg,onHandlePrev}}>{children}</ProductCont.Provider>
  )
}

export default ProductContext

// custom hook

 export const useProductHook=()=>{

    const ProductHook =useContext(ProductCont);  
    if(!ProductHook){
        throw new Error('Product Context is Not Found ')
    }
    return ProductHook
}