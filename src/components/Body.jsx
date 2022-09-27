import React from 'react'
import blue from '../assets/blue.jpeg'
import green from '../assets/green.jpeg'
import red from '../assets/red.jpeg'
import white from '../assets/white.jpeg'


const Body = () => {
  return (
    <>
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <div className=''>
                <img classname src={blue}  />
            </div>
            <div className='flex flex-row image '>
<div><img src={blue} /></div>
<div><img src={green} /></div>
<div><img src={red} /></div>
<div><img src={white} /></div>

            </div>
        </div>


        
        <div className='m-10 mt-20 '>
            <h3>SNEAKER COMPANY</h3>
            <h1>FALL LIMITED EDITION SNEAKERS</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi tenetur corporis quisquam sint beatae consequuntur.</p>
            <h1>$125</h1>
<div className='flex flex-row mt-10'>
    <button className='bg-lime-300 w-10 h-10 text-red-600'>-</button>
    <h1 className='bg-lime-300 w-10 '>0</h1>
    <button className='bg-lime-300 w-10 h-10 text-red-600'>+</button>
    <button  className='bg-orange-300 w-40 h-10 text-white'>Add to cart</button>
</div>

        </div>

    </div>
    </>
  )
}

export default Body