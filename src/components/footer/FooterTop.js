import React from 'react'

const FooterTop = () => {
  return (
    <div className='w-full bg-white py-6'>
    <div className='w-full border-t-[1px] border-b-[1px] py-8'>
    <div className='w-64 mx-auto text-center flex flex-col gap-1'>
        <p className='text-xs'>See Personalised recommendations</p>
        <button className='w-full py-1 rounded-md bg-yellow-400 font-semibold hover:bg-yellow-500 cursor-pointer duration-200 active:bg-yellow-600 '>Sign In</button>
        <p className='text-xs mt-1'>New Customer?{" "}<span className= ' text-blue-400 ml-1 cursor-pointer'>Start here</span></p>
      
    </div>
    </div>
    </div>
  )
}

export default FooterTop
