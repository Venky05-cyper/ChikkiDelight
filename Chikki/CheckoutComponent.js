import React from 'react'
import img from './img/new.jpeg'
const CheckoutComponent = () => {
  return (
    <div>
       <div className='w-full relative'>
                <img src={img} alt="img" className='w-full h-48 ' />
                <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
                    <p className='font-serif text-2xl text-white mt-16'>Checkout</p>
                    <p className='text-sm text-white'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Checkout</span></p>
                </div>
      </div>

      <div className='bg-offwhite w-full h-96 px-40 py-12'>
            <div className='bg-white rounded p-5 pb-20'>

            </div>
        </div>
    </div>
  )
}

export default CheckoutComponent
