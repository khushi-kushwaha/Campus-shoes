import React from 'react'


const Account = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-5 p-20'>
        <h1 className='text-3xl '>Login/Sign up</h1>
        <div className='flex gap-2 w-96'>
            <select  className='h-10 border-2 border-zinc-200 rounded' disabled ><option value="+91" selected ="selected">+91</option></select> 
            <input className='w-full border-2 border-zinc-200 rounded px-2' type="number" placeholder='Phone number' />    
        </div>
        <button className='bg-[#212B36] w-96 text-white hover:bg-[#C16452] py-2'>GET OTP</button>
    </div>

  
   </>
  )
}

export default Account