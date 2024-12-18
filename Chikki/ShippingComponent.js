import React from 'react'
import img from './img/new.jpeg';

const ShippingComponent = () => {
  return (
    <>
    <div className='w-full relative'>
        <img src={img} alt="img" className='w-full h-48 object-left-top' />
        <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
            <p className='font-serif text-2xl text-white mt-16'>Shipping and Delivery Policy            </p>
            <p className='text-sm text-white font-sans'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Shipping and Delivery Policy
            </span></p>
        </div>
    </div>
    <div className='bg-offwhite lg:px-40 lg:py-10 text-xs font-sans text-gray-800 py-16 px-4'>
      <p className='my-2'>
      For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 15 working days or as very date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. Maganlal Chikki Products Pvt.Ltd. is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 15 working days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to registered address of the buyer as per the credit/debit card only at all times(Unless specified at the time of Order). All major credit cards are accepted for fast, easy and efficient secure payments. Maganlal Chikki Products Pvt.Ltd. is in no way responsible for any damage to the order while in transit to the buyer.
      </p>
      <h1 className='text-sm text-zinc-600 font-bold my-2'>SHIPPING & DELIVERY POLICY (SERVICES)
      </h1>
      <p>Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 02114-274060/ 277080
</p>
<h1 className='text-sm text-zinc-600 font-bold my-2'>Calculations of delivery charges for multiple units :
</h1>
<p>The shipping charge is based on the weight of the product. For multiple products ordered from the same category the program adds up the weight of all the units ordered and charges a single delivery fee.
Thus, a customer who orders three packets of a consignment weighing more than 500 gms the delivery charges are free. If the customer orders the packet individually or less than three then the delivery charge is Rs 100.</p>
  
  <p>The minimum weight taken into account is 200gms (only for documents) for domestic shipments and 500gms for international shipments. There is a parcel surcharge applicable for the consignments other than documents irrespective of weight of the shipments in case of international deliveries.
</p>
<p>The weight of the product has been built in into the delivery charge of each product. This will automatically be added to the product cost at the payment stage. The delivery cost of a consignment weighing 3 Kg to be shipped within India will be = INR 165.
</p>
<p>The delivery charge is arrived at by multiplying the weight of the product with the slab rate. Thus, the delivery cost of a consignment weighing 3 Kg to USA will be (789+(5*213)) = INR 1854.
All major credit cards are accepted for fast, easy and efficient secure payments.</p>
    </div>
</>
  )
}

export default ShippingComponent
