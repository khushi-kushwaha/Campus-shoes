import React from 'react'

const Model = () => {
  return (
    <div>
    <div className='py-8'>
    <div className=" h-full w-screen flex items-center gap-10 justify-center px-10 py-4 ">
      <img className='w-[600px]' src="https://www.campusshoes.com/cdn/shop/files/Artboard_1_1c3c2388-e97d-4fe3-ae28-2bcd6b4ca7c3.webp?v=1729164734" />
      <img className='w-[600px]' src="https://www.campusshoes.com/cdn/shop/files/Artboard_1_copy_37197920-1252-4eed-a598-83338375bfca.webp?v=1729164754" />
    </div>
    <div className=" h-full w-screen flex items-center gap-10 justify-center px-10 ">
      <img className='w-[600px]' src="https://www.campusshoes.com/cdn/shop/files/Artboard_1_copy_2_598fac02-4516-44fa-86c7-7fe1cc5556ea.webp?v=1729164785" />
      <img className='w-[600px]' src="https://www.campusshoes.com/cdn/shop/files/Artboard_1_copy_3_25a45c79-8b55-4329-a1ed-b59f6f41ae48.webp?v=1729164815" />
    </div>
    </div>
    <h1 className='text-center text-xl'>Explore More!</h1>
    <div className=" h-full w-screen flex items-center gap-10 justify-center p-10">
      <div className=''>
      <img className='w-[600px]' src="https://www.campusshoes.com/cdn/shop/files/Artboard_2_360x.webp?v=1729161976" />
      <h1 className='text-zinc-400'>AUTUMN WINTER COLLECTION</h1>
      <h2 className='text-zinc-500 font-extrabold'>Step In, Stand Out: Shop Vikrant’s faves!</h2>
      </div>
      <div>
      <img className='w-[600px]' src="https://www.campusshoes.com/cdn/shop/files/Artboard_3_1a137341-041e-4d4c-8e67-a4dcba6b6e17_360x.webp?v=1729162143" />
      <h1 className='text-zinc-400'>SNEAKERS FOR HER</h1>
      <h2 className='text-zinc-500 font-extrabold' >Sneaker Slay: Level up your fashion game! #YouGoGirl</h2>
      </div>
      </div>

      <div className='h-[95%]  w-screen bg-[#F7F1F0]'>
        <div className=' relative flex justify-center items-center gap-32  h-[95%] p-20 w-screen bg-[#F7F1F0]'>
         <img className='absolute top-28 left-[85px] h-[320px]' src="https://www.campusshoes.com/cdn/shop/files/Artboard_4_copy_220x.webp?v=1729161700"/>
         <img className='h-[320px]' src="https://www.campusshoes.com/cdn/shop/files/Artboard_4_220x.webp?v=1729161716"/>
         <div className=''>
            <h1 className='text-2xl text-zinc-700'>Just Kickin'</h1>
            <h3 className=' text-zinc-500'>Explore our Kid's collection!</h3>
            <button className='bg-zinc-800 mt-5 py-3 px-5 text-white text-xs hover:bg-[#C16452]'>SHOP NOW</button>
         </div>
        </div>
      </div>
    </div>
  )
}


export default Model