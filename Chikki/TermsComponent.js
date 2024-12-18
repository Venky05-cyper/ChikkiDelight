import React from 'react'
import img from './img/new.jpeg';

const TermsComponent = () => {
  return (
    <>
    <div className='w-full relative'>
        <img src={img} alt="img" className='w-full h-48 object-left-top' />
        <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
            <p className='font-serif text-2xl text-white mt-16'>Terms & Condition</p>
            <p className='text-sm text-white font-sans'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Terms & Condition</span></p>
        </div>
    </div>
    <div className='bg-offwhite lg:px-40 lg:py-10 text-xs font-sans text-gray-800 py-16 px-4'>
      <p className='my-2'>Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Magnalal Chikki Products Pvt. Ltd.’s relationship with you in relation to this website.
</p>
<p className='my-2'>
The term Maganlal Chikki Products Pvt. Ltd.’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is : Shed No. 46-A, Opp. DM Polymers, Next to Intel Electronics, Nangargaon Industrial Estate, Nanagargaon, Lonavala 410401, Dist.: Pune, Maharashtra (India). Our company registration number is [C.I.N:-U15440 PN 2004 PTC 019197 , Lonavala. The term ‘you’ refers to the user or viewer of our website.
</p>
<p>The use of this website is subject to the following terms of use:
</p>

  <ul className='list-disc text-zinc-600 ml-4'>
    <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.
    </li>
    <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
    </li>
    <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
    </li>
    <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
    </li>
    <li>All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
    </li>
    <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
    </li>
    <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
    </li>
    <li>You may not create a link to this website from another website or document without Maganlal Chikki Products Pvt. Ltd.’s prior written consent.
    </li>
    <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.
    </li>
    <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.
    </li>
  </ul>
    </div>
</>
  )
}

export default TermsComponent
