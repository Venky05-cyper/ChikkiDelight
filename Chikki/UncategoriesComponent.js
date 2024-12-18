import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img2 from './img/since.jpg';
import { FaIndianRupeeSign, FaCaretRight } from 'react-icons/fa6';
import { ImEye } from 'react-icons/im';
import { FaHeart } from 'react-icons/fa';
import { BsBagCheck } from 'react-icons/bs';
import img from './img/new.jpeg';
import { BiSolidDockTop } from 'react-icons/bi';
import QuickviewCompnent from './QuickviewCompnent';
import { Link } from 'react-router-dom';

const UncategoriesComponent = ({ WishlistCart, AddToCart }) => {

    const [product, setProduct] = useState([]);
  const [hover, setHover] = useState(null);
  const [iconhover, setIconhover] = useState(false);
  const [iconhover2, setIconhover2] = useState(false);
  const [iconhover3, setIconhover3] = useState(false);
  const [quickclick, setQuickclick] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartMessage, setCartMessage] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [value, setValue] = useState(50);
  const [noResults, setNoResults] = useState(false); 

  useEffect(() => {
    axios
      .get('https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=2')
      .then(response => {
        setProduct(response.data);
        setFilteredProduct(response.data);
        setNoResults(false); 
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleQuickView = prod => {
    setSelectedProduct(prod);
    setQuickclick(true);
  };

  const closeClick = () => {
    setQuickclick(false);
  };

  const handleSliderChange = e => {
    setValue(e.target.value);
    
  };

  const FilterBUtton = () => {
    const filtered = filteredProduct.filter(prod => prod.price >= value);
    setProduct(filtered);
   if(filtered.length === 0){
    setNoResults(true); 
   }else{
    setNoResults(false); 
   }
  };

  return (
     <>
      {quickclick && <QuickviewCompnent close={closeClick} AddToCart={AddToCart} product={selectedProduct} WishlistCart={WishlistCart} />}

      {cartMessage && (
        <div className="bg-white fixed w-60 max-h-max text-black p-2 z-50 mb-4 mr-4 shadow-sm shadow-slate-400" style={{ marginLeft: '720px' }}>
          <p className='text-center p-5 text-lg text-gray-600 font-semibold'>{cartMessage}</p>
        </div>
      )}

      <div className='w-full relative'>
        <img src={img} alt="img" className='w-full h-48 object-left-top' />
        <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
          <p className='font-serif text-2xl text-white mt-16'>Uncategorized</p>
          <p className='text-sm text-white font-sans'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Uncategorized</span></p>
        </div>
      </div>

      <div className="productapi py-10 flex flex-col lg:flex-row lg:items-stretch justify-center items-center gap-4 bg-offwhite">
        <div className='w-72 h-max flex flex-col justify-center'>
          <div className='border-t-2 rounded border-red-500 h-2/5 bg-white'>
            <h1 className='p-2.5 border-b pl-5 text-xs font-serif font-semibold'>CATEGORIES</h1>
            <ul className='w-full pl-5 py-2 border-b-2 border-red-500'>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/chikki'>Chikki</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/daily'>Daily Deal</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/dryfruit'>Dry Fruit Roll</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500  font-serif p-2'><Link to='/fudge'>Fudge</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/gift'>Gift Hamper</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/namkeen'>Namkeen</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 text-red-500 font-serif p-2'><Link to='/uncator'>Uncategorized</Link></li>
            </ul>
            <h1 className='p-2.5 border-b pl-5 text-xs font-serif font-semibold'>BY PRICE</h1>
            <div className='p-3'>
              <div className='mb-4 flex'>
                <input type="range" id="range" className='range-input focus:outline-none w-64 bg-offwhite text-red-500' min='0' max='1300' value={value} onChange={handleSliderChange} />
              </div>

              <div className='flex justify-center gap-2 text-xs'>
                <input type="number" className='min-input border w-28 px-3 py-1 focus:outline-none placeholder:font-sans placeholder:text-black' value={value} readOnly />
                <input type="number" className='max-input border w-28 px-3 py-1 focus:outline-none placeholder:font-sans placeholder:text-black' value='1300'  readOnly/>
              </div>

              <div className='flex justify-between items-center mt-5'>
                <button className='bg-red-500 text-white font-serif text-sm py-1 px-3' onClick={FilterBUtton}>Filter</button>
                <span className='text-xs text-gray-600 font-sans'>Price: {value} INR - 1300 INR</span>
              </div>
            </div>
          </div>
          <div className='lg:flex hidden'><img src={img2} alt="img" className='w-72' /></div>
        </div>
        <div>
          <h1 className='-mt-1 font-serif font-semibold text-xl border-b border-red-500 pb-2'>UNCATEGORIZED</h1>
          <div className='grid grid-cols-4 gap-6 mt-10 '>
              <p className='text-center col-span-12 flex gap-2 bg-white border-t-2 border-red-500 text-sm font-serif text-gray-500 py-2 -mt-4 px-2 lg:pr-96 '> <BiSolidDockTop className='text-sky-600 text-lg' /> <span className='lg:mr-40'>No products were found matching your selection.</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UncategoriesComponent
