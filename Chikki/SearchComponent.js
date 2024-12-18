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
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowDropright,IoMdArrowDropleft } from "react-icons/io";

const ShopComponent = ({ WishlistCart, AddToCart, searchParams }) => {
  const [product, setProduct] = useState([]);
  const [hover, setHover] = useState(null);
  const [iconhover, setIconhover] = useState(false);
  const [iconhover2, setIconhover2] = useState(false);
  const [iconhover3, setIconhover3] = useState(false);
  const [quickclick, setQuickclick] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartMessage, setCartMessage] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [value, setValue] = useState(0);
  const [maxvalue] = useState(1300);
  const [noResults, setNoResults] = useState(false);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { option, query } = searchParams;

    const navigate = useNavigate();

  useEffect(() => {

    const urls = [
      'https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=1',
      'https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=2',
      'https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=4',
      'https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=5',
    ]

    axios.all(urls.map(prod => axios.get(prod)))
      .then(response => {
         const combinedProducts = response.flatMap(response => response.data);
        setProduct(combinedProducts);
        setFilteredProduct(combinedProducts);
        setTotalPages(Math.ceil(combinedProducts.length / productsPerPage));
        setNoResults(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [productsPerPage]);

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
    const filtered = filteredProduct.filter(prod => prod.price >= value && prod.price <= maxvalue).sort((a, b) => a.price - b.price);

    setProduct(filtered);
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    setNoResults(filtered.length === 0);
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  const currentProducts = product.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);


  const renderDetails = () => {
    if (option && query && option.toLowerCase() !== query.toLowerCase()) {
      return <p>You selected "{option}" but searched for "{query}".</p>;
    }else if(option === '/'){
      return <span> {navigate('/search')}</span>;
    }else if (option === 'chikki' || query === 'chikki' || option === 'Chikki' || query === 'Chikki') {
      return <span>Searched for {navigate('/chikki')}</span>;
    }else if (option === 'uncategorized' || query === 'uncategorized' || option === 'Uncategorized' || query === 'Uncategorized') {
      return <span>Searched for {navigate('/uncator')}</span>;
    }else if (option === 'daily deal' || query === 'daily deal' || option === 'Daily deal' || query === 'Daily deal') {
      return <span>Searched for {navigate('/daily')}</span>;
    }else if (option === 'dry fruit roll' || query === 'dry fruit roll' || option === 'Dry fruit roll' || query === 'Dry fruit roll') {
      return <span>Searched for {navigate('/dryfruit')}</span>;
    }else if (option === 'fudge' || query === 'fudge' || option === 'Fudge' || query === 'Fudge') {
      return <span>Searched for {navigate('/fudge')}</span>;
    }else if (option === 'namkeen' || query === 'namkeen' || option === 'Namkeen' || query === 'Namkeen') {
      return <span>Searched for {navigate('/namkeen')}</span>;
    }
    return null;
  };

                                                                                                                                                                                                                                                                                                    
  return (
    <>
      {quickclick && <QuickviewCompnent close={closeClick} product={selectedProduct} WishlistCart={WishlistCart} />}

      {cartMessage && (
        <>
          <div className="bg-white fixed w-60 max-h-max text-black p-2 z-50  mb-4 mr-4 shadow-lg" style={{ marginLeft: '750px' }}>
            <p className='text-center p-5 text-lg text-gray-600 font-semibold'>{cartMessage}</p>
          </div>
          <div className="bg-white lg:hidden fixed w-60 max-h-max text-black p-2 z-50  mb-4 mr-4 ml-24  shadow-2xl shadow-black">
            <p className='text-center p-5 text-lg text-gray-600 font-semibold'>{cartMessage}</p>
          </div>
        </>

      )}

      <div className='w-full relative'>
        <img src={img} alt="img" className='w-full h-48 object-left-top' />
        <div className='absolute inset-0 bg-black bg-opacity-65 block text-center '>
          <p className='font-serif text-2xl text-white mt-16'>Search Results for {renderDetails() || option}</p>
          <p className='text-sm text-white font-sans'><a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Search Results for {query}</span></p>
        </div>
      </div>

      <div className="productapi py-10 flex flex-col lg:flex-row lg:items-stretch justify-center items-center gap-4 bg-offwhite">
        <div>
          <div className='grid grid-cols-2 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-5 gap-6 mt-10'>
            {noResults ? (
              <p className='text-center col-span-12 flex gap-2 bg-white border-t-2 border-red-500 text-sm font-serif text-gray-500 py-2 -mt-4 px-2 lg:pr-96 '> <BiSolidDockTop className='text-sky-600 text-lg' /> No products were found matching your selection.</p>
            ) : (
              currentProducts.map((prod, index) => (
                <div className='lg:w-52 w-44 rounded-md bg-white' key={`prod${prod.id}`} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}>
                  <div className='relative z-10'>
                    <img src={prod.images} alt="img" className='w-full h-full' />
                    <div className={`absolute inset-0 bg-black bg-opacity-50 w-full h-full pt-1 transition-opacity duration-700 ${hover === index ? 'opacity-95' : 'opacity-0'}`} >

                      <div className='rounded-full bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 my-2 lg:ml-40 ml-36 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onClick={() => handleQuickView(prod)} onMouseEnter={() => setIconhover(true)} onMouseLeave={() => setIconhover(false)}>
                        <ImEye className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5'/>
                        <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-20 bg-white text-black ${iconhover ? 'block' : 'hidden'}`}>QuickView</p>
                      </div>
                      <div className='rounded-full bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 my-2 lg:ml-40 ml-36 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover2(true)} onMouseLeave={() => setIconhover2(false)}
                        onClick={() => {
                          WishlistCart(prod);
                          setCartMessage(`Product Added!`);
                          setTimeout(() => {
                            setCartMessage(null);
                          }, 3000);
                        }}>
                        <FaHeart className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5' />
                        <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-16 bg-white text-black ${iconhover2 ? 'block' : 'hidden'}`}>Wishlist</p>
                      </div>
                      <div className='rounded-full bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 my-2 lg:ml-40 ml-36 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover3(true)} onMouseLeave={() => setIconhover3(false)}
                        onClick={() => {
                          AddToCart(prod);
                          setCartMessage(`Product Added Cart!`);
                          setTimeout(() => {
                            setCartMessage(null);
                          }, 3000);
                        }}
                      >
                        <BsBagCheck className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5' />
                        <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-12 bg-white text-black ${iconhover3 ? 'block' : 'hidden'}`}>Cart</p>
                      </div>

                    </div>
                  </div>
                  <div className='p-4 pb-0'>
                    <p className='text-sm border-b pb-4 font-serif'>{prod.title}</p>
                    <p className='flex items-center text-red-600 text-xl font-bold py-3.5 font-sans'><FaIndianRupeeSign className='text-lg mt-0.5 -mr-0.5' />{prod.price}</p>
                  </div>
                </div>
              )))}
          </div>
           <hr className='border mt-16'/>
           <div className="pagination mt-6 flex justify-end gap-2">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='px-1.5 py-1.5 bg-white rounded hover:bg-red-500 hover:text-white text-lg '><IoMdArrowDropleft/></button>
            {[...Array(totalPages).keys()].map(number => (
              <button key={number} onClick={() => handlePageChange(number + 1)} className={`px-4 rounded py-0.5 text-xs ${currentPage === number + 1 ? 'bg-red-500 text-white' : 'bg-white text-black hover:bg-red-500 hover:text-white'}`}>
                {number + 1}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className='px-1.5 py-1.5 rounded bg-white hover:bg-red-500 hover:text-white'><IoMdArrowDropright/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopComponent;
