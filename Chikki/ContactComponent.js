import React from 'react'
import img from './img/new.jpeg'

const ContactComponent = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={img} alt="Contact Us" className='w-full h-48 object-cover' />
                <div className='absolute inset-0 bg-black bg-opacity-65 flex flex-col justify-center items-center text-center'>
                    <p className='font-serif text-2xl text-white lg:mt-16'>Contact Us</p>
                    <p className='text-sm text-white mt-2 font-sans'>
                        <a href="/" className='hover:text-red-600 font-sans'>Home</a> | <span className='text-red-600'>Contact Us</span>
                    </p>
                </div>
            </div>

            <div className="px-4 md:px-10 lg:px-44 py-10 bg-offwhite">
                <div className='bg-white p-5 rounded my-5'>
                    <h1 className='text-2xl font-bold font-sans text-center mb-4'>Contact Form</h1>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                        <input type="text" placeholder='Your name*' className='border p-2 focus:outline-none w-full md:w-1/2 mt-5   placeholder:font-sans placeholder:text-black' />
                        <input type="email" placeholder='Your email*' className='border p-2 focus:outline-none w-full md:w-1/2 mt-5 placeholder:font-sans placeholder:text-black' />
                    </div>
                    <textarea name="text" id="text" placeholder='Your message*' className='p-2 border focus:outline-none w-full h-40 my-7 placeholder:font-sans placeholder:text-black'></textarea>
                    <button className='bg-rose-500 p-2.5 hover:bg-rose-600 px-9 rounded-full text-white lg:text-xs font-semibold font-sans'>Send Us</button>
                </div>
                <div className="text lg:flex lg:justify-start flex flex-col md:flex-row justify-center items-center gap-3 mt-5 mb-10">
                    <p className='text-xs text-gray-500 font-serif'>Address</p>
                    <hr className='lg:w-full w-full md:w-1/2 border-slate-950' />
                </div>

                <h1 className='font-serif text-lg font-semibold text-gray-600 text-left md:text-left'>Maganlal Chikki Products Pvt Ltd</h1>
                <p className='w-full md:w-2/3 text-lg font-serif text-gray-500 text-left md:text-left'>
                    Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon, Lonavala 410401 Dist. Pune
                    Online store: <span className='text-gray-600'>www.maganlalchikki.in</span>
                </p>
                <p className='text-gray-500 text-lg font-serif text-left md:text-left'>Ph. No. :- +912114274060 | Mobile No. :- +919764451618</p>
                <p className='text-gray-500 text-lg font-serif text-left md:text-left'>Contact Time :- 9 AM To 6 PM</p>
                <p className='text-gray-500 text-lg font-serif text-left md:text-left'>Factory Closed – Thursday</p>
                <span className='text-gray-600 font-serif text-center md:text-left'>sales@maganlalchikki.in</span>
            </div>
            <div className="w-full py-10 bg-offwhite">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241129.63992948594!2d72.70884876796481!3d19.210456264257974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d2e66a8307%3A0x65cdc1af44a36c35!2sMaganlal%20Chikki%2C%20Kamothe%20(Navi%20Mumbai)!5e0!3m2!1sen!2sin!4v1720625523945!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
         </div>
    )
}

export default ContactComponent
