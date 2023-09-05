import React, { useEffect, useState } from 'react'
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import { footerBottomItem } from '../../constants/Index';
import ApiIcon from '@mui/icons-material/Api';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Products = () => {
    const [data, setData] = useState([])
    const productData = async () => {
        const products = await axios.get('https://fakestoreapiserver.reactbd.com/amazonproducts')
            .then((res) => {
                const totalData = res.data
                setData(totalData)
            })
    }
    useEffect(() => {
        productData()
    }, [])
    return (
        <div >
            <div className='max-w-screen-2xl grid grid-cols-4 gap-10 px-4 mx-auto'>
                {data.map((item) => {
                    return <div className='bg-white h-auto border-[1px] py-6 z-30 shadow-none border-gray-200
                hover:border-transparent hover:shadow-testShadow duration-200 flex flex-col relative'>
                    {/* categories start */}
                        <span className='absolute top-0 right-0  italic text-gray-400'>Electronics</span>
                         {/* categories end */}

                          {/* image start */}
                        <div className=' w-full h-auto flex items-center justify-center group relative  '>
                            <img className='w-52 h-64' src={item.image} alt="image" />
                            <ul className='bg-gray-100 w-full h-36 absolute -bottom-[153px] flex flex-col
                         items-end justify-center gap-2 font-titleFont group-hover:bottom-0 duration-700 

                         '>

                            <li className='productli'>
                                Compare {" "}
                            <span><ApiIcon/></span>
                            </li>
                            <li className='productli'>
                                Add to Cart {" "}
                            <span><ShoppingCartIcon/></span>
                            </li>
                            <li className='productli'>
                                View Details {" "}
                            <span><ArrowCircleRightIcon/></span>
                            </li>
                            <li className='productli'>
                                Add to Wish List {" "}
                            <span><FavoriteIcon/></span>
                            </li>


                        </ul>
                        </div>
                        {/* image end */}

                        {/* title and price start */}
                        <div className='bg-white flex flex-col gap-1 px-4 z-10'>
                            <div className='flex justify-between items-center'>
                                <h2 className='font-titleFont text-lg text-amazon_blue tracking-wide font-medium'>{item.title.substring(0, 20)}</h2>
                                <p className='tex-sm  text-gray-600 font-semibold'>${item.price}</p>
                            </div>
                            <div >
                                <p className='text-xs '>{item.description.substring(0, 60)}...</p>
                                <div className='text-yellow-500 flex'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                </div>
                              
                            </div>
                            <div className='py-2'>
                                <button className='w-full py-1.5 mt-3 font-titleFont rounded-md font-medium text-base bg-gradient-to-tr from-yellow-400
                                 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover-border-yellow-700 
                                 active-bg-gradient-to-bl hover:active:from-yellow-400 active:to-yellow-500 duration-200   '
                                >Add to Cart</button>

                            </div>

                        </div>
                        {/* title and price end */}

                    </div>
                })}
            </div>
            {/* <div className='max-w-screen-2xl bg-white grid grid-cols-4 mx-auto px-4 gap-10'>
                {data.map((item)=>{
                 return <div key={item.key} className='h-auto z-30   border-[1px] border-gray-300 bg-gray-white py-6 shadow-none 
                 hover:shadow-testShadow hover:border-transparent relative flex flex-col'>

                    <p className='text-gray-400 italic absolute top-2 right-2'>Electronics</p>

                    <div className='w-auto h-auto flex item-center justify-center  relative group'>
                       <img className='w-56 h-64 object-contain' src={item.image} alt="productimage" />

                        <ul className='bg-gray-100 w-full h-36 absolute bottom-[-160px] flex flex-col
                         items-end justify-center gap-2 font-titleFont border-1 border-r group-hover:bottom-0 duration-700 cursor-pointer '>
                            <li>compare</li>
                            <li>compare</li>
                            <li>compare</li>
                        </ul>

                       </div>

                       <div className='bg-white py-2 z-20'> 
                       <div className=' flex justify-between items-center px-2 py-2 ' >
                            <p className='font-titleFont text-lg font-semibold'>{item.title.substring(0,20)}</p>
                            <p className='text-sm text-gray-600 '>${item.price}</p>
                       </div>

                        <p className='text-sm px-2'>{item.description.substring(0,100)}...</p>
                        <div className='py-4 px-2'>
                        <button className='w-full rounded-md py-2 bg-gradient-to-tl from-yellow-500 to-yellow-200 hover:from-yellow-200 hover:to-yellow-500'>Add to Cart</button>

                        </div>
                        </div>

                 </div>
                })}

            </div> */}
        </div>
    )
}

export default Products

