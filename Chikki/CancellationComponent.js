import React from 'react'
import img from './img/new.jpeg';

const CancellationComponent = () => {
  return (
    <>
    <div className='w-full relative'>
        <img src={img} alt="img" className='w-full h-48 object-left-top' />
        <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
            <p className='font-serif text-2xl text-white mt-16'>Cancellation Policy</p>
            <p className='text-sm text-white font-sans'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Cancellation Policy</span></p>
        </div>
    </div>
    <div className='bg-offwhite lg:px-40 lg:py-10 text-xs font-sans text-gray-800 py-16 px-4'>
      <p className='my-2'>Maganlal Chikki Products Pvt. Ltd. believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy</p>
      
      <ul className='list-disc text-zinc-600 ml-4'>
        <li>Cancellations will be considered only if the request is made within 2 hours of placing an order. However, the cancellation request will not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
        </li>
        <li>There is no cancellation of orders placed under the Same Day Delivery category.
        </li>
        <li>No cancellations are entertained for those products that the Maganlal Chikki Products Pvt. Ltd. marketing team has obtained on special occasions like Pongal, Diwali, Valentine’s Day etc. These are limited occasion offers and therefore cancellations are not possible.
        </li>
        <li>Maganlal Chikki Products Pvt. Ltd. does not accept cancellation requests for perishable items. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
        </li>
        <li>In case of receipt of damaged items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. The matter should be reported within 5 days.
        </li>
        <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 24 hours of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
        </li>
      </ul>
      <h1 className='text-2xl lg:font-serif font-sans text-zinc-500 my-2'>REFUND POLICY</h1>
      <p>If the product is not good to consume or spoilt, or there is a production fault, a full refund will be made within 21 days.</p>
    
    </div>
</>
  )
}

export default CancellationComponent
