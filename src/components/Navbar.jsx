import React from 'react'
import { BsCart } from 'react-icons/Bs'
const Navbar = () => {
  return (
    <div className=' container flex  justify-between items-center mx-auto border-b-2 border-black-500 '>
     
       <ul className="flex mt-6">
        <li className="mr-6 ml-32 mb-10">
          <a className="font-bold text-4xl" href="#">sneakers</a>
        </li>
        <li className="mr-6 ml-6 mt-3 mb-10" >
          <a className="text-gray-400 hover:text-gray-800" href="#">Collections</a>
        </li>
         <li className="mr-6 ml-6 mt-3 mb-10">
          <a className="text-gray-400 hover:text-gray-800" href="#">Men</a>
        </li>
        <li className="mr-6 ml-6 mt-3 mb-10">
          <a className="text-gray-400 hover:text-gray-800" href="#">Women</a>
        </li>
        <li className="mr-6 ml-6 mt-3 mb-10">
          <a className="text-gray-400 hover:text-gray-800" href="#">About </a>
        </li>
        <li className="mr-6 ml-6 mt-3 mb-10">
          <a className="text-gray-400 hover:text-gray-800" href="#">Contact</a>
        </li>
    
      </ul>
      <div className='flex'>
        <div className='mt-2'><BsCart />  
        </div>
        <h1 className='bg-orange-400 px-1.5 text-white  rounded-full '>1</h1>
      </div>
    </div>
  )
}

export default Navbar