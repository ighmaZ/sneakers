import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className="flex mt-6">
        <li className="mr-6 ml-32 ">
          <a className="text-black text-4xl text-bold" href="#">sneakers</a>
        </li>
        <li className="mr-6 ml-6" >
          <a className="text-gray-400 hover:text-gray-800" href="#">Collections</a>
        </li>
         <li className="mr-6 ml-6">
          <a className="text-gray-400 hover:text-gray-800" href="#">Men</a>
        </li>
        <li className="mr-6 ml-6">
          <a className="text-gray-400 hover:text-gray-800" href="#">Women</a>
        </li>
        <li className="mr-6 ml-6">
          <a className="text-gray-400 hover:text-gray-800" href="#">About </a>
        </li>
        <li className="mr-6 ml-6">
          <a className="text-gray-400 hover:text-gray-800" href="#">Contact</a>
        </li>
      
      
      </ul>
    </div>
  )
}

export default Navbar