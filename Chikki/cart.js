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
      <div className='w-full relative'>
        <img src={img} alt="Cart Banner" className='w-full h-48 object-cover' />
        <div className='absolute inset-0 bg-black bg-opacity-65 text-center flex flex-col justify-center'>
          <p className='font-serif text-2xl text-white mt-16'>Cart</p>
          <p className='text-sm text-white'>
            <Link to="/" className='hover:text-red-600'>Home</Link> | <span className='text-red-600'>Cart</span>
          </p>
        </div>
      </div>
      <div className='bg-offwhite w-full lg:py-32 lg:px-40 py-12 px-4'>
        <div className='bg-white rounded lg:p-5 pb-20 py-5'>
          {cartMessage && (
            <div className='bg-offwhite w-full px-10 py-2 my-5 border-t-2 border-red-500'>
              <div className='gap-2 flex items-center'>
                <div className='text-white bg-lime-500 rounded-full text-xs'>
                  <MdOutlineCheck />
                </div>
                {cartMessage}
              </div>
            </div>
          )}
          {cart1.length === 0 ? (
            <>
              <div className='flex rounded-t items-center gap-3 bg-offwhite py-3 border-t-2 border-red-600 px-4'>
                <BiSolidDockTop className='text-sky-600 text-lg' />
                <span className='text-xs text-gray-500 font-serif'>Your cart is currently empty.</span>
              </div>
              <button className='bg-rose-600 text-sm py-1.5 rounded font-medium px-4 text-white font-serif mt-8'>
                <Link to='/shop'>Return to shop</Link>
              </button>
            </>
          ) : (
            <div className='mt-5 rounded w-full'>
              <div className='h-10 flex items-center border rounded-t'>
                <p className='flex justify-start items-center pl-2.5 border-r h-full text-lg text-center py-1 font-semibold w-20'>Remove</p>
                <p className='flex justify-start items-center pl-2.5 border-r h-full w-24 text-lg text-center py-1 font-semibold'>Img</p>
                <p className='flex justify-start items-center pl-4 py h-full border-r w-64 text-lg font-semibold'>Product Name</p>
                <p className='flex justify-start items-center pl-4 py h-full border-r w-40 text-lg font-semibold'>Price</p>
                <p className='flex justify-start items-center pl-4 py h-full border-r w-64 text-lg font-semibold'>Quantity</p>
                <p className='flex justify-start items-center pl-4 py h-full w-72 text-lg font-semibold'>Subtotal</p>
              </div>

              {cart1.map((product) => (
                <div className='border-r border-l flex items-center border-gray-300' key={product.id}>
                  <p className='border-r flex justify-center h-24 items-center w-20'>
                    <span
                      className='text-red-600 text-center rounded-full px-3.5 py-2 bg-offwhite font-semibold text-sm cursor-pointer hover:bg-red-600 hover:text-white'
                      onClick={() => {
                        removeFromCart(product.id);
                        setCartMessage('Product successfully removed.');
                        setTimeout(() => setCartMessage(null), 3000);
                      }}
                    >
                      X
                    </span>
                  </p>
                  <p className='border-r h-24 pr-5 p-5 w-24'>
                    <img src={product.images || product.cat_image} alt={product.title} className='w-14 h-14 object-cover' />
                  </p>
                  <p className='pl-5 px-4 text-base text-gray-600 flex items-center justify-center h-24 w-64 border-r'>{product.title || product.cat_name}</p>
                  <p className='h-24 w-40 text-base text-gray-600 flex items-center justify-center border-r'>
                    <MdOutlineCurrencyRupee className='-ml-4' />
                    {product.price || newprice}
                  </p>
                  <div className='pl-5 px-5 text-base text-gray-600 flex items-center justify-center h-24 w-64 border-r'>
                    <div className='flex justify-center items-center w-40 p-1 rounded-full border gap-5'>
                      <div
                        className='rounded-full bg-offwhite text-xl w-6 h-6 flex items-center justify-center cursor-pointer'
                        onClick={() => decrementQuantity(product.id)}
                        aria-label={`Decrease quantity of ${product.title}`}
                      >
                        <span className='-mt-1'>-</span>
                      </div>
                      <input
                        type="number"
                        value={quantities[product.id] || 1}
                        min="1"
                        className='focus:outline-none w-10 pl-1.5'
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        aria-label={`Quantity of ${product.title}`}
                        
                      />
                      <div
                        className='rounded-full bg-offwhite text-xl w-6 h-6 flex items-center justify-center cursor-pointer'
                        onClick={() => incrementQuantity(product.id)}
                        aria-label={`Increase quantity of ${product.title}`}
                      >
                        <span className='-mt-1'>+</span>
                      </div>
                    </div>
                  </div>
                  <p className='pl-5 px-5 text-base text-gray-600 flex items-center justify-center h-24 w-72'>
                  <MdOutlineCurrencyRupee className='mt-0.5'/> {(product.price * (quantities[product.id] || 1)).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className='h-14 border rounded-b flex items-center px-6 gap-4'>
                <input
                  type="text"
                  placeholder='Coupon code'
                  className='bg-offwhite border border-gray-300 w-48 py-1 pl-4 rounded-sm placeholder:text-gray-500'
                />
                <button className='bg-red-600 text-white py-1 px-4 rounded-sm'>Apply Coupon</button>
                <button
                  className='bg-red-600 text-white py-1 px-4 rounded-sm'
                  onClick={() => {
                    setCartMessage(`Cart updated. Total price: ${calculateTotalPrice()}`);
                    setTimeout(() => setCartMessage(null), 3000);
                  }}
                >
                  Update Cart
                </button>
              </div>
              <div className='mt-3'>
                <h1 className='text-2xl font-semibold'>Cart Totals</h1>
                <hr className='w-2/4 my-2 border border-gray-100' />
                <div className='border border-gray-200 rounded-t w-2/4 mt-7 p-2 px-4'>
                  <div className='text-sm font-bold flex justify-between mb-5'>
                    <p>Subtotal</p>
                    <p className='flex items-center'><MdOutlineCurrencyRupee className='-ml-4' />{calculateTotalPrice()}</p>
                  </div>
                  <div className='text-sm font-bold flex justify-between mb-5'>
                    <p>Shipping</p>
                    <div className='text-right'>
                      <p>Free Shipping (Free Shipping)</p>
                      <span className='text-base font-normal'>Free Shipping</span>
                    </div>
                  </div>
                  <div className='text-right -mt-2'>
                    Shipping to <span className='text-sm font-bold'>Maharastra.</span>
                    <p className='text-base font-normal flex justify-end items-center gap-1'>
                      Change address <BsTruck className='mt-1' />
                    </p>
                  </div>
                </div>
                <div className='w-2/4 rounded-b border border-t-0 border-gray-200 flex justify-between px-3 py-1.5'>
                  <p>Total</p>
                  <p className='flex items-center'><MdOutlineCurrencyRupee /> {calculateTotalPrice()}</p>
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
