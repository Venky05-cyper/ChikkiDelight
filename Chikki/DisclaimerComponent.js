import React from 'react'
import img from './img/new.jpeg';

const DisclaimerComponent = () => {
    return (
        <>
            <div className='w-full relative'>
                <img src={img} alt="img" className='w-full h-48 object-left-top' />
                <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
                    <p className='font-serif text-2xl text-white mt-16'>Dislaimer Policy</p>
                    <p className='text-sm text-white font-sans'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Dislaimer Policy</span></p>
                </div>
            </div>
            <div className='bg-offwhite lg:px-40 lg:py-10 text-xs font-sans text-gray-800 py-16 px-4'>
                The information contained in this website is for general information purposes only. The information is provided by Maganlal Chikki Products Pvt.Ltd.and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. <br /><br />

                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. <br /> <br />

                Through this website you are able to link to other websites which are not under the control of Maganlal Chikki Products Pvt.Ltd.. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. <br /> <br />

                Every effort is made to keep the website up and running smoothly. However, Maganlal Chikki Products Pvt. Ltd. takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </div>
        </>
    )
}

export default DisclaimerComponent
