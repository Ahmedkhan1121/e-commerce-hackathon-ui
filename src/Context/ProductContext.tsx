"use client"

import { ProductContextType, productListType } from "@/utils/type/type"
import { createContext, useContext, useEffect,  useState } from "react"

const ProductCont =createContext<ProductContextType|null>(null)

// const initialData:InitialData={
//  card:[],
//  addToCart:[],
// }

// const actionCart = {
//     LOAD_CART_LIST:'LOAD_CART_LIST',
//     INCREMENT:'INCREMENT',
//     DECREMENT:'DECREMENT',
//     ADDTOCART:'ADDTOCART',
// }


function ProductContext({children}:{children: React.ReactNode;}) {

    const [navTogg,setNavTogg] = useState<boolean>(false);
     const onHandlePrev = () => {
           setNavTogg((prev) => !prev)
     } 

    //  ,ADDTOCART,DECREMENT,INCREMENT
    
    //  const {LOAD_CART_LIST} = actionCart;
    // ya par usstate banega q ka productApi ke ander se fetchProduct k bhair nekalna he
    const [productList,setProductList] =useState<productListType[]>([])

    const productApi= async(api:string) =>{
        try {
           const productData =await fetch(api)
           const fetchProduct = await productData.json()
           setProductList(fetchProduct)
        } catch (error) {
            // throw new Error('product not found')
            throw new Error(`product not found : ${error}`)
        }

    }

    // useEffect
   useEffect(()=>{
    productApi('/api/product')
   },[])

   //add to cart
//    const [state,dispatch]=useReducer(reducerCard,initialData)
//    function reducerCard(state:InitialData,action:Action):InitialData{

//     switch (action.type) {
//         case LOAD_CART_LIST:
//          return{...state,card:action.payload}
    
//         default:
//             return state;
//     }
//    }


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