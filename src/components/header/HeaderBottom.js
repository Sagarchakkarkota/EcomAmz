import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import {motion} from 'framer-motion'

const HeaderBottom = () => {
  const [sideBar,setSideBar]=useState(false)
  const ref=useRef()
  useEffect(()=>{
   document.body.addEventListener('click',(e)=>{
        if(e.target.contains(ref.current)){
          setSideBar(!sideBar)
        }
   })
  },[ref,sideBar])
  return (
    <div>
      <div className='w-full px-4 h-[36px] bg-amazon_light text-white  flex items-center '>
      {/* ListItems start */}
      <ul className='flex items-center tracking-wide text-sm gap-2'>
        <li onClick={()=>setSideBar(!sideBar)} className='headerHover flex items-center gap-1'><MenuIcon/> All</li>
        <li className='headerHover'>Today's Deals</li>
        <li className='headerHover'>Customer Service</li>
        <li className='headerHover'>Registry</li>
        <li className='headerHover'>Sell</li>
      </ul>
      {/* ListItems end */}
    
      {/* SideNav start */}
      {sideBar && (<div className='w-full h-screen text-white fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-10'>
           <div className='w-full h-screen relative'>
            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}} className='w-[350px] h-full bg-white border border-black'>
              <div className='w-full py-3 px-6 bg-amazon_blue text-white flex items-center gap-2'>
                <AccountCircleIcon/> 
               <h3 className='font-titleFont font-bold text-lg tracking-wide'> 
               Hello, Sign In
               </h3>
              </div>
              <SideNavContent title='Digital Content & Devices'
              one='Amzon Music'
              two='Kindle E-readers & Books'
              three='Amazon Appstore'
              />
              <SideNavContent title='Shop By Department'
              one='Electronics'
              two='Computers'
              three='Smart Home'
              />
              <SideNavContent title='Programs & Features'
              one='Gift Cards'
              two='Amazon live'
              three='International Shopping'
              />
              <SideNavContent title='Help & Settings'
              one='Your Account'
              two='Customer Service'
              three='Contact us'
              />
              <span onClick={()=>setSideBar(!sideBar)} className='w-10 h-10 flex items-center justify-center absolute top-0 left-[360px] border bg-white text-black hover:bg-red-600
              hover:text-white cursor-poniter duration-300 '> 
              <CloseIcon/>
            </span>
            </motion.div>
           
           </div>
      </div>)}

      {/* SideNav end */}

      </div>
    </div>
  )
}

export default HeaderBottom
