import React from 'react'
import blue from '../assets/blue.jpeg'
import green from '../assets/green.jpeg'
import red from '../assets/red.jpeg'
import white from '../assets/white.jpeg'
import cartStore from '../store';


const Body = () => {

    const increase = cartStore((state)=> state.increase)
    const decrease = cartStore((state)=> state.decrease)
    const cart = cartStore((state) => state.cart) ;

    
  return (
    <>
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <div className=''>
                <img className="w-400 "src={blue}  />
            </div>
            <div className='flex flex-row image mt-20 mx-5 '>

<img className="p-5 rounded-xl" src={blue} />
<img className="p-5 rounded-xl" src={green} />
<img className="p-5 rounded-xl" src={red} />
<img className="p-5 rounded-xl" src={white} />

            </div>
        </div>

{/* second column */}
        
        <div className='m-10 mt-20 '>
            <h3 className='mt-5 font-semibold  text-orange-500 text-2xl'>SNEAKER COMPANY</h3>
            <h1 className='mt-10 font-bold text-5xl'>FALL Limited Edition Shoes</h1>
            <p className='mt-20  text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, esse. Excepturi quis ratione deleniti velit nam error aspernatur quam pariatur?</p>
            <h1 className='mt-10 font-bold text-3xl'>$125</h1>

<div className='flex flex-row mt-10'>
    <button onClick={decrease} className='bg-lime-300 w-10 h-10 text-red-600 text-3xl'>-</button>
    <h1 className='bg-lime-300 w-10 text-3xl  text-center '>{cart}</h1>
    <button onClick={increase} className='bg-lime-300 w-10 h-10 text-red-600 text-3xl'>+</button>
    <button   className='ml-8 bg-orange-300 w-60 h-10 text-white shadow-2xl'>Add to cart</button>
</div>

        </div>

    </div>
    </>
  )
}

export default Body