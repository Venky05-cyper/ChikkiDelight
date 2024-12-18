import React from 'react'
import { IoMdPaperPlane } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaTwitter, FaFacebookF, FaPinterest, FaInstagram } from "react-icons/fa";
import img from './img/web-logo-3.png'
import { FaPhone } from "react-icons/fa6";
import img2 from './img/paypal.png'
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <div className='main w-full lg:h-96 '>
            <div className="div1 lg:flex hidden justify-center  border-b-2 border-red-600 p-8">
                <div className='flex justify-center items-center'><IoMdPaperPlane className='text-4xl' /> <span className='font-serif font-medium mr-1 text-lg'>SIGN UP TO NEWSLETTER</span><span className='font-serif text-sm mr-1'> AND RECEIVE </span> <span className='font-serif font-medium mr-1 text-lg text-red-600'>SURPRISE COUPONS </span> <span className='font-serif text-sm mr-1'> FOR FIRST SHOPPING</span></div>
                <div className='border ml-8 border-gray-300 w-96 rounded-full flex items-center'>
                    <input type="email" placeholder='Email Address here' className='ml-5 w-80 focus:outline-none' />
                    <button className='bg-red-600 hover:bg-red-700 text-white p-3.5 px-5 rounded-full rounded-l-none  items-end'>
                        <IoMail className='text-xl' />
                    </button>
                </div>
                <FaFacebookF className='my-3.5 mx-1 ml-5 hover:text-red-600 text-lg text-gray-500'/><FaTwitter className='my-3.5 mx-1.5 hover:text-red-600 text-lg text-gray-500'/><FaPinterest className='my-3.5 mx-1.5 hover:text-red-600 text-lg text-gray-500'/><FaInstagram className='my-3.5 mx-1.5 hover:text-red-600 text-lg text-gray-500'/>
            </div>
      <div className='relative lg:flex justify-center gap-3 py-10 lg:px-0 px-7'>
      <div className='w-80 lg:ml-0 ml-5'><img className={img} src={img} alt="img" /> <p className='mt-5'>A Legacy of 100+ years, sweetening people’s life…</p></div>
       <div className=' w-72'>
       <p className='text-2xl font-serif text-gray-500 mb-7 lg:mt-0 mt-3'>Quick Navigation</p>
       <ul className='text-sm'>
          <li className='-mt-1 hover:text-red-600 cursor-pointer'><Link to='/'>Home</Link></li>
          <li className='-mt-1 hover:text-red-600 cursor-pointer'><Link to='/about'>About Us</Link></li>
          <li className='-mt-1 hover:text-red-600 cursor-pointer'><Link to='/contact'>Contact Us</Link></li>
          <li className='-mt-1 lg:mb-0 mb-4 hover:text-red-600 cursor-pointer'><Link to='/shop'>Shop</Link></li>
         </ul>
       </div>

       <div className=' w-72'>
       <p className='text-2xl font-serif text-gray-500 mb-7'>Important Links</p>
       <ul className='text-sm'>
          <li className='-mt-1 hover:text-red-600 cursor-pointer'><Link to='/disclaimer'>Disclaimer Policy</Link></li>
          <li className='-mt-1 hover:text-red-600 cursor-pointer'><Link to='/privacy'>Privacy Policy</Link></li>
          <li className='-mt-1 hover:text-red-600 cursor-pointer'><Link to='/cancel'>Cancellation Policy </Link></li>
          <li className='-mt-1 hover:text-red-600 cursor-pointer'><Link to='/term'>Terms and Conditions </Link></li>
          <li className='-mt-1 lg:mb-0 mb-4 hover:text-red-600 cursor-pointer'><Link to='/shipping'>Shipping and Delivery Policy </Link></li>
         </ul>
       </div>

       <div className=' w-72'>
       <p className='text-2xl font-serif text-gray-500 mb-7'>Contact Info.</p>
       <ul className='text-sm'>
          <li className='-mt-1'>Maganlal Chikki Products Pvt Ltd</li>
          <li className='-mt-1'>Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon, Lonavala 410401 Dist. Pune
          Online store:- www.maganlalchikki.in</li>
          <li className='flex -mt-1 items-center gap-1'><FaPhone className='text-sm text-red-600'  /> Ph. No. :- +912114274060 I Mobile No. :-</li>
          <li className='-mt-1'>+919764451618</li>
          <li className='-mt-1'>Contact Time :- 9 AM To 6 PM</li>
          <li className='-mt-1'>Factory Closed – Thursday</li>
          <li className='flex -mt-1 lg:mb-0 mb-4 items-center gap-1'><IoMail className='text-base text-red-600' />sales@maganlalchikki.in</li>
         </ul>
       </div>
      </div>

      <div className='bg-zinc-900 py-5 lg:flex lg:justify-evenly lg:items-center  px-4 font-sans lg:pl-0 pl-5 text-center '>
        <span className='text-white text-sm'>© 2020 <span className='text-red-600 cursor-pointer hover:text-red-700'>www.maganlalchikki.in</span>. Powered By <span className='text-red-600 cursor-pointer hover:text-red-700'>Reallaunchers.com</span>. All Rights Reserved.</span>
        <img src={img2} alt="img" className='pl-5 lg:pl-0'/>
      </div>

        </div>

    )
}

export default FooterComponent
