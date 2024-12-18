import React, { useContext } from 'react'
import { Mycontext } from './CreateContext/Mycontext'
import img from './img/new.jpeg';

const ViewProductComponent = () => {
 
    const {viewproduct} = useContext(Mycontext);

  return (
   <>
    <div className='w-full'>
    <div className='relative'>
        <img src={img} alt="img" className='w-full h-48 object-cover' />
        <div className='absolute inset-0 bg-black bg-opacity-65 flex flex-col items-center justify-center text-center'>
            <p className='font-serif text-2xl text-white'>Product</p>
            <p className='text-sm text-white'>
                <a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Product</span>
            </p>
        </div>
    </div>
    </div>
   </>
  )
}

export default ViewProductComponent
