import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Stores = () => {
  const navigate = useNavigate();

  return (
    <>
   
   
   <div>
        <div className='bg-[#FEF8F8] flex items-center justify-start px-5 py-2 gap-2'>  
        <h1 onClick={() => navigate("/")}  className='text-zinc-400'><i className="ri-home-4-line"></i> Home</h1><h1 className='text-zinc-700'> / Stores</h1>
        </div> 
        <div className='relative '>
          <img src="https://campusshoes.vicinusapp.com/storage/clients/e48c853e9e9f43399f6c4189acc405be/assets/brands/featured/1721300802-33ett8dMFfApeAMxmAx3qPsWPHvVI6.png" />
          <div className='absolute h-12 left-1/2 transform -translate-x-1/2 bottom-[-20px] bottom-[-20] h-10 w-2/4 bg-white border-2 border-zinc-200 flex justify-between items-center gap-5 px-4 py-2 '>
            <h1>Search Nearby</h1>
           <div className='border-x-2 border-zinc-200 text-zinc-600 w-3/4 flex justify-between px-2' >
             <input type="text" placeholder='Enter your state or city name' />
              <i className="ri-focus-3-line"></i>
           </div>

            <i className="ri-search-line"></i>
          </div>
        </div>
   </div>
   <div className='h-auto px-5 py-20'>
    <h1 className='flex text-3xl font-extrabold '>Campus Exclusive Stores -  <h1 className='text-[#C16452]'> In India</h1></h1>
    <div className='flex justify-between items-center'>
      <div className='city py-12 gap-5 flex flex-col '>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Andhra Pradesh(2)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Gujarat(8)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>JharKhand(6)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Odisha(4)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Uttar Pradesh(54)</a>
        </div>
        <div className='city py-12 gap-5 flex flex-col '>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Bihar(17)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Haryan(14)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Karnataka(16)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Punjab(8)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Uttarakhand(17)</a>
        </div>
        <div className='city py-12 gap-5 flex flex-col '>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Andhra Pradesh(2)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Gujarat(8)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>JharKhand(6)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Odisha(4)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Uttar Pradesh(54)</a>
        </div>
        <div className='city py-12 gap-5 flex flex-col '>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Andhra Pradesh(2)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Gujarat(8)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>JharKhand(6)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Odisha(4)</a>
        <a href='#' className='text-[#31ADEC]'><i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>Uttar Pradesh(54)</a>
        </div>
    </div>
   </div>
    
    </>
  )
}

export default Stores