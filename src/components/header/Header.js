import React, { useState } from 'react'
import { logo } from '../../assets/Index'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { AllItems } from '../../constants/Index';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './HeaderBottom';
const Header = () => {
  const [showAll, setShowAll] = useState(false)
  const handleAll = () => {
    setShowAll(!showAll)
  }
  console.log(showAll)
  return (
    <div className='w-full sticky top-0 z-50'>
      {/* amazon logo start */}
      <div className='w-full flex items-center gap-4  bg-amazon_blue text-white px-4 py-4'>
        <div className='headerHover'>
          <img className='w-24 mt-2' src={logo} alt="" />
        </div>
      {/* amazon logo end */}

       {/* Location start */}
        <div className='hidden mdl:headerHover'>
          <div className=''>
          <LocationOnIcon />
          <p className=' text-sm text-lightText font-light flex flex-col'>Deliver to{" "}
            <span className='text-sm font-semibold -mt-1 text-whiteText'>India</span></p>
            
          </div>
         
        </div>
       {/* Location end */}
      
       {/* searchbar start */}
        <div className='h-10 hidden rounded-md lgl:flex flex-grow relative'>
          <span onClick={handleAll} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer
          duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center
          rounded-tl-md rounded-bl-md'>All <span></span>
            <ArrowDropDownIcon />
          </span>
          {showAll && (
                 <div>
                  <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                  overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2
                  flex-col gap-1 z-50'>
                   {
                    AllItems.map((item)=>{
                      return  <li className='text-sm tracking-wide font-titleFont border-b-[1px] 
                      border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>
                         {item.title}
                        </li>
                    })
                    }
                 </ul>
                 </div>
          )}
          <input
            className='h-full  text-base text-amazon_blue flex-grow outline-none border-none 
          px-2'
            type='text'
          />
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow
          hover:bg-[#f3a846] duration-300 text-amazon_blue cursor-pointer rounded-tr-md
          rounded-br-md'>
            <SearchIcon />
          </span>
        </div>
       {/* searchbar end */}
     
     {/* Sign in  start*/}
        <div className='flex flex-col justify-center items-start headerHover'>
         <p className='text-xs text-lightText font-light px-2 '>Hello, sign in</p>
         <p className='text-ms  font-semibold -mt-1 text-whiteText hidden mdl:inline-flex   '>Accounts & Lists <span></span> <ArrowDropDownIcon/></p>
        </div>
     {/* Sign in end*/}
     
      {/* Returns and orders start */}
      <div className='hidden lgl:flex-inline'> 
      <div className='headerHover flex flex-col items-start justify-center '>
        <p className='text-xs text-lightText font-light '>Returns &</p>
        <p className='text-ms text-whiteText font-semisolid -mt-1 '>Orders</p>
      </div>
      </div>
      {/* Returns and orders end */}
      {/* Cart start */}
      <div className='flex items-start justify-center headerHover relative'>
        <ShoppingCartIcon/>
        <p className='text-ms text-whiteText mt-3 font-semibold '>Cart
         <span className='absolute tx-xs -top-1 left-8 p-1 h-4 bg-[#f3a846] text-amazon_blue rounded-full flex justify-center items-center'>0</span></p>
      </div>
      {/* Cart end */}
      </div>
      <HeaderBottom/>
    </div>
  )
}

export default Header