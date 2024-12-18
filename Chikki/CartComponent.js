import React, { useState } from 'react';
import img from './img/new.jpeg';
import { BiSolidDockTop } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdOutlineCheck, MdOutlineCurrencyRupee } from 'react-icons/md';
import { BsTruck } from 'react-icons/bs';

const CartComponent = ({ cart1, removeFromCart }) => {
  const [cartMessage, setCartMessage] = useState(null);
  const [quantities, setQuantities] = useState(
    cart1.reduce((acc, product) => {
      acc[product.id] = product.quantity || 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(newQuantity, 1),
    }));
  };

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 1),
    }));
  };

  const calculateTotalPrice = () => {
    return cart1.reduce((total, product) => {
      return total + product.price * (quantities[product.id] || 1);
    }, 0).toFixed(2);
  };
  
  var newprice = 100.0;
  return (
    <div>
      <div className='relative'>
        <img src={img} alt="Cart Banner" className='w-full h-48 object-cover' />
        <div className='absolute inset-0 bg-black bg-opacity-50 text-center flex flex-col justify-center'>
          <p className='font-serif text-2xl text-white lg:mt-16'>Cart</p>
          <p className='text-sm text-white font-sans'>
            <Link to="/" className='hover:text-red-600'>Home</Link> | <span className='text-red-600'>Cart</span>
          </p>
        </div>
      </div>
      <div className='bg-offwhite py-12 pb-72 px-4 lg:py-32 lg:px-40'>
        <div className='bg-white rounded-lg p-4 lg:p-5 pb-20'>
          {cartMessage && (
            <div className='bg-offwhite w-full px-4 py-2 my-5 border-t-2 border-red-500'>
              <div className='flex items-center gap-2 font-sans text-black'>
                <div className='text-white bg-lime-500 rounded-full text-xs p-1'>
                  <MdOutlineCheck />
                </div>
                {cartMessage}
              </div>
            </div>
          )}
          {cart1.length === 0 ? (
            <>
              <div className='flex items-center gap-3 bg-offwhite py-3 border-t-2 border-red-600 px-4 rounded-t'>
                <BiSolidDockTop className='text-sky-600 text-lg' />
                <span className='text-xs text-gray-500 font-serif'>Your cart is currently empty.</span>
              </div>
              <button className='bg-rose-600 text-sm py-1.5 rounded font-medium px-4 text-white font-serif mt-8'>
                <Link to='/shop'>Return to shop</Link>
              </button>
            </>
          ) : (
            <div className='mt-5'>
              <div className='hidden lg:grid grid-cols-6 text-lg font-semibold bg-gray-100 border-b'>
                <p className='flex items-center justify-center border-r py-2'>Remove</p>
                <p className='flex items-center justify-center border-r py-2'>Img</p>
                <p className='flex items-center justify-center border-r py-2'>Product Name</p>
                <p className='flex items-center justify-center border-r py-2'>Price</p>
                <p className='flex items-center justify-center border-r py-2'>Quantity</p>
                <p className='flex items-center justify-center py-2'>Subtotal</p>
              </div>

              {cart1.map((product) => (
                <div className='flex flex-col lg:grid lg:grid-cols-6 lg:border-b border py-4 px-4 rounded-md border-gray-300 lg:py-2' key={product.id}>
                  <p className='lg:flex text-left lg:w-48 lg:h-full  -ml-4 -mt-2.5 mb-5 lg:items-center lg:justify-center border-b-0 lg:border-r lg:border-b-0 '>
                    <span
                      className='text-red-600 text-center font-sans lg:mt-2 rounded-full px-3.5 py-2 bg-offwhite font-semibold text-sm cursor-pointer hover:bg-red-600 hover:text-white'
                      onClick={() => {
                        removeFromCart(product.id);
                        setCartMessage('Product successfully removed.');
                        setTimeout(() => setCartMessage(null), 3000);
                      }}
                    >
                      X
                    </span>
                  </p>
                  <p className='flex items-center  justify-center lg:border-r lg:border-b-0 lg:w-44 lg:py-2'>

                    <img src={product.images || product.cat_image} alt={product.title} className='w-14 h-14 ' />
                  </p>
                  <p className='flex items-center justify-center font-sans lg:border-r lg:border-b-0 lg:px-0 lg:py-2 text-gray-600'>
                    {product.title || product.cat_name}
                  </p>
                  <p className='flex items-center justify-center border-b font-sans lg:border-r lg:border-b-0 lg:py-2 text-gray-600'>
                    <MdOutlineCurrencyRupee className='-ml-4' />
                    {product.price || newprice}
                  </p>
                  <div className='flex items-center justify-center border-b lg:border-r lg:border-b-0 lg:py-2'>
                    <div className='flex items-center p-1 rounded-full border'>
                      <button
                        className='rounded-full bg-offwhite text-xl w-6 h-6 flex items-center justify-center cursor-pointer font-sans text-black'
                        onClick={() => decrementQuantity(product.id)}
                        aria-label={`Decrease quantity of ${product.title}`}
                      >
                        <span className='-mt-1'>-</span>
                      </button>
                      <input
                        type="number"
                        value={quantities[product.id] || 1}
                        min="1"
                        className='w-10 text-center focus:outline-none font-sans text-black'
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        aria-label={`Quantity of ${product.title}`}
                      />
                      <button
                        className='rounded-full bg-offwhite text-xl w-6 h-6 flex items-center justify-center cursor-pointer font-sans text-black'
                        onClick={() => incrementQuantity(product.id)}
                        aria-label={`Increase quantity of ${product.title}`}
                      >
                        <span className='-mt-1'>+</span>
                      </button>
                    </div>
                  </div>
                  <p className='flex items-center justify-center font-sans text-black lg:py-2 text-lg'>
                    <MdOutlineCurrencyRupee className='mt-0.5'/> {(product.price * (quantities[product.id] || 1)).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className='mt-6 border-t pt-4'>
                <h2 className='text-xl font-semibold'>Cart Totals</h2>
                <hr className='my-2 border-gray-100' />
                <div className='border border-gray-200 rounded-t p-4'>
                  <div className='text-sm font-bold flex justify-between mb-4 font-sans'>
                    <p>Subtotal</p>
                    <p className='flex items-center font-sans text-black'><MdOutlineCurrencyRupee className='-ml-4' />{calculateTotalPrice()}</p>
                  </div>
                  <div className='text-sm font-bold flex justify-between mb-4 font-sans'>
                    <p>Shipping</p>
                    <div className='text-right font-sans text-black'>
                      <p>Free Shipping (Free Shipping)</p>
                      <span className='text-base font-normal'>Free Shipping</span>
                    </div>
                  </div>
                  <div className='text-right -mt-2  text-black font-sans'>
                    Shipping to <span className='text-sm font-bold'>Maharastra.</span>
                    <p className='text-base font-normal flex items-center justify-end gap-1 font-sans text-black'>
                      Change address <BsTruck className='mt-1' />
                    </p>
                  </div>
                </div>
                <div className='border border-t-0 border-gray-200 flex justify-between p-2 mt-2 font-sans'>
                  <p>Total</p>
                  <p className='flex items-center font-sans text-black '><MdOutlineCurrencyRupee /> {calculateTotalPrice()}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
