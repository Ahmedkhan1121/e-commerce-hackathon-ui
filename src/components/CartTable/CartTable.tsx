import React from 'react'
import CartTableData from '../CartTableData/CartTableData'

function CartTable() {
  return (
    <div >
       {/* table header */}
      <div className='flex justify-between px-[20px]  list-none py-[16px] rounded-md  max-[610px]:hidden   '>
        <li>Product</li>
        <div className='flex gap-[160px] max-[830px]:gap-[100px] max-[650px]:gap-[65px]'>
        <li>Quantity</li>
        <li>total</li>
      </div>
      </div>
      {/* table data */}

        <div className='flex justify-between items-center px-[10px] py-[20px] border-t-2 border-b-2 max-[610px]:border-t-0 max-[300px]:px-[0px]'  >
            {/* product Image DAta */}
        <CartTableData/>
        </div>
        {/* Total Price */}
        {/* <div>

        </div> */}

    </div>
  )
}

export default CartTable
