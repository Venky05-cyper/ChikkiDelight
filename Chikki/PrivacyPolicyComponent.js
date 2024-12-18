import React from 'react'
import img from './img/new.jpeg';

const PrivacyPolicyComponent = () => {
    return (
        <>
            <div className='w-full relative'>
                <img src={img} alt="img" className='w-full h-48 object-left-top' />
                <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
                    <p className='font-serif text-2xl text-white mt-16'>Privacy Policy</p>
                    <p className='text-sm text-white font-sans'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Privacy Policy</span></p>
                </div>
            </div>
            <div className='bg-offwhite lg:px-40 lg:py-10 text-xs font-sans text-gray-800 py-16 px-4'>
                <div className='my-2'>This privacy policy sets out how Maganlal Chikki Products Pvt. Ltd uses and protects any information that you give Maganlal Chikki Products Pvt. Ltd when you use this website.</div>
                <div className='my-2'>Maganlal Chikki Products Pvt. Ltd. is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</div>
                <div className="my-2">
                Maganlal Chikki Products Pvt. Ltd. may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 01.02.2016.
                </div>

                
                    <h1 className='text-sm text-zinc-600 font-bold my-2'>What we collect</h1>
                    <p className='my-2'>We may collect the following information:</p>
                    <ul className='list-disc text-zinc-600 ml-4'>
                        <li>Name and job title</li>
                        <li>Contact information including email address</li>
                        <li>Demographic information such as postcode, preferences and interests</li>
                        <li>Other information relevant to customer surveys and/or offers</li>
                    </ul>
                
                    <h1 className='text-sm text-zinc-600 font-bold my-2'>What we collect</h1>

                    <p>We require this information to understand your needs and provide you with better service, and in particular for the following reasons:</p>
                    <ul className='list-disc text-zinc-600 ml-4'>
                        <li>Internal record keeping.</li>
                        <li>We may use the information to improve quality and taste of our products.</li>
                        <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
                        </li>
                        <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.</li>
                    </ul>

                    <h1 className='text-sm text-zinc-600 font-bold my-2'>Security</h1>
                    <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
                    <h1 className='text-sm text-zinc-600 font-bold my-2'>How we use cookies</h1>
                    <p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
                    <p>We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
                    <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>
                    <p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
                   
                    <h1 className='text-sm text-zinc-600 font-bold my-2'>Links to other websites</h1>
                    <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
                    <h1 className='text-sm text-zinc-600 font-bold my-2'>Controlling your personal information</h1>
                    <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>

                    <ul className='list-disc text-zinc-600 ml-4'>
                        <li>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes
                        </li>
                        <li>if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at info@maganlalchikki.in / sales@maganlalchikki.in.
                        </li>
                        <li>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                        </li>
                        <p>You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to Shed No. 46-A, Opp. DM Polymers, Next to Intel Electronics, Nangargaon Industrial Estate, Nanagargaon, Lonavala 410401 Dist.: Pune, Maharashtra (India)</p>
                    </ul>

                    <p className='my-2'>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</p>

                    <p className='my-2'>If there are any questions regarding this privacy policy you may contact us using the information below:</p>

                     <p>Company Name :- Maganlal Chikki Products Pvt. Ltd.</p>
                     <p>Address:-    Shed No. 46-A, Opp. DM Polymers, Next to Intel Electronics, Nangargaon      Industrial Estate, Nanagargaon, Lonavala 410401</p>
                     <p>Telephone No .:-   02114-274060/ 277080</p>
                     <p>E-Mail ID :-             info@maganlalchikki.in / sales@maganlalchikki.in</p>
            </div>
        </>
    )
}

export default PrivacyPolicyComponent
