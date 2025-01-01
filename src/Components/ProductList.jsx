import React from 'react'

const ProductList = () => {
  return (
    <>
   <div className=' py-10 h-screen flex flex-col gap-5'>
   <div className='flex gap-5 items-center justify-center'>
    <i className="ri-arrow-left-wide-line text-[#A45B4E] font-bold text-xl"></i>
      <h1 className='text-xl '>Bestsellers</h1>
      <i className="ri-arrow-right-wide-line text-[#A45B4E] font-bold text-xl"></i>
    </div>

    <div className='h-full w-full flex overflow-x-auto'>

    <div className=' card h-full w-[25%] flex-shrink-0 w-[20%] min-w-[200px]  '>
    <div
  className=' group h-[80%] bg-cover bg-center'
  style={{
    backgroundImage:
      "url('https://www.campusshoes.com/cdn/shop/files/FIRST_11G-787_WHT-SIL-B.ORG_2_300x.jpg?v=1705644649')",
  }}
>
  <div className='flex flex-col items-center justify-between h-full'>
    <div className='flex items-center justify-between w-full px-2'>
      <div className='bg-[#C20000] py-1 px-2'>
        <h6 className='text-white text-xs font-bold'>40% off</h6>
      </div>
      <i className='ri-heart-3-line text-xl'></i>
    </div>
   <button className='hidden border-2 border-gray-200 w-full py-2 text-xm font-light group-hover:block'>Quick Buy</button>
  </div>
</div>
<div className='p-2'>
  <h1>FIRST White Men's Running Shoes </h1>
  <h1 className='mt-1'>Rs 1150 sale</h1>
  <h6 className=' mt-1  text-gray-500'>3 4 5 6</h6>
</div>
    </div>

  

    </div>
   </div>
    </>
  )
}

export default ProductList