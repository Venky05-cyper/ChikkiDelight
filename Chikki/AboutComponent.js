import React, { useEffect, useState } from 'react'
import img from './img/new.jpeg'
import axios from 'axios'

const AboutComponent = () => {

    
  const [data,setDate] = useState([]);

  useEffect(()=>{
    axios.get('https://appy.trycatchtech.com/v3/maganlalchikki/about')
    .then(response=>{
      // console.log(response.data)
      setDate(response.data)
    })
    .catch(error =>{
      console.error(error)
    })
  },[])


  return (
    <div id='about' to='/about'>
          <div className='w-full relative' >
            <img src={img} alt="img" className='w-full h-48 '/>
            <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
              <p className='font-serif text-2xl text-white mt-16'>About Us</p>
              <p className='text-sm text-white font-sans'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>About Us</span></p>
            </div>
          </div>

          <div className="w-full py-20 px-4 md:px-8 lg:px-36">
              {data.map((data) =>(
                 <div key={`prod${data.id}`} className='flex justify-center flex-col md:flex-row md:gap-7 mb-10'>
                  <div className="sec1 lg:w-2/3  lg:mt-16 w-full md:w-1/3 mb-6 md:mb-0"><img src={data.image} alt="img" className='w-full h-auto object-cover' /></div>
                  <div className="sec2 text-gray-500 lg:w-2/5 w-full md:w-2/5 text-justify">
                        <h2 className='text-xl font-serif'>{data.title}</h2>
                        <p className='text-sm mt-3 font-sans'>{data.description}</p>
                        <h2 className='text-xl font-serif py-2'>OUR TEAM</h2>
                        <p className='text-sm font-sans'>{data.our_team}</p>
                  </div>
                 </div>
              ))
              }
          </div>

          <div className="w-full bg-offwhite py-10 px-4 md:px-8 lg:px-36">
              {data.map((data) =>(
                 <div key={`prod${data.id}`} className=' text-gray-600 '>
                     <h1 className='text-xl font-serif mb-4'>History</h1>
                     <p className='text-sm mb-8 font-sans'>{data.history}</p>
                     <h1 className='text-xl font-serif mb-3'>CLIENT SATISFACTION</h1>
                     <p className='text-sm mb-5 font-sans'>{data.client_satisfaction}</p>
                     <h1 className='text-xl font-serif mb-3'>OUR USP</h1>
                     <p className='text-sm mb-5 font-sans'>We are one of the fastest-growing organizations dealing in manufacturing, exporting and supplying Chikki, Dry Fruit Rolls, Fudges, Jellies, and Savouries(Namkeens) Some factors, which set us apart are as follows:</p>
                     
                     <ul className='text-sm mb-5 list-disc text-justify ml-5 font-sans'>
                      <li>Excellent state-of-the-art infrastructure</li>
                      <li>Cost-effective and quality products within ‘On-Time’ delivery</li>
                      <li>Customer-centric approach</li>
                      <li>Flavorsome products</li>
                      <li>Hygienically processed</li>
                      <li>On-time product delivery</li>
                      <li>Competitive prices</li>
                      <li>Ethical business practices</li>
                      <li>Strong distribution network</li>
                     </ul>
                 </div>
              ))
              }
          </div>
    </div>
  )
}

export default AboutComponent
