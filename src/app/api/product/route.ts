import { productList } from "@/utils/helper";
import { NextResponse } from "next/server";

 export async function GET() { 
    try {
      return  NextResponse.json(productList,{status:200})
    } catch (error) {
       return NextResponse.json(error,{status:500})
    }
  
}


