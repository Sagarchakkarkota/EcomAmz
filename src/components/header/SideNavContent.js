import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const SideNavContent = ({title,one,two,three}) => {
  return (
    <div>
      <div className='py-3 border-b-[1px] border-b-gray-300 text-black'>
        <h3 className='text-lg font-titlefont font-semibold mb-1 px-6'>
        {title}
        </h3>
        <ul className='text-sm'>
            <li  className='flex  items-center justify-between border border-transparent hover:bg-zinc-200 duration-100 cursor-pointer px-6 py-2'>{one}{" "}
            <span>
              <KeyboardArrowRightIcon/>
            </span>
            </li>
            <li  className='flex  items-center justify-between border border-transparent hover:bg-zinc-200 duration-100 cursor-pointer px-6 py-2'>{two}{" "}
            <span>
              <KeyboardArrowRightIcon/>
            </span>
            </li>
            <li  className='flex  items-center justify-between border border-transparent hover:bg-zinc-200 duration-100 cursor-pointer px-6 py-2'>{three}{" "}
            <span>
              <KeyboardArrowRightIcon/>
            </span>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default SideNavContent
