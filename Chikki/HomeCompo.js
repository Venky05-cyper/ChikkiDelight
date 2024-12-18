import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import img1 from './img/asset 6.png'
import img2 from './img/asset 7.jpeg'
import { FaIndianRupeeSign, FaCaretRight } from "react-icons/fa6";
import { ImEye } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import img3 from './img/asset 16.jpeg';
import img4 from './img/asset 17.jpeg';
import img5 from './img/asset 18.png';
import img6 from './img/asset 19.jpeg';
import img7 from './img/asset 23.png';
import img8 from './img/asset 24.jpeg';
import img9 from './img/asset 28.jpeg';
import img10 from './img/asset 29.jpeg';
import img11 from './img/asset 30.png';
import img12 from './img/asset 32.png';
import img13 from './img/asset 37.png';
import { PiTruckLight } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { BsHeadset } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import QuickviewCompnent from './QuickviewCompnent';
import CartComponent from './CartComponent';
import { Mycontext } from './CreateContext/Mycontext';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css'; // Import PerfectScrollbar styles

const HomeComponent = ({ WishlistCart, AddToCart }) => {

    

  const [images, setImages] = useState([]);
  const [slider, setSlider] = useState(0);
  const [banner, setBanner] = useState([]);
  const [hover, setHover] = useState(null);
  const [iconhover, setIconhover] = useState(false);
  const [iconhover2, setIconhover2] = useState(false);
  const [iconhover3, setIconhover3] = useState(false);
  const [quickclick, setQuickclick] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);
  // const {setData} = useContext(Mycontext)
  useEffect(() => {
    axios.get('https://appy.trycatchtech.com/v3/maganlalchikki/home_image_gallery')
      .then(response => {
        setImages(response.data)
      })
      .catch(function (error) {
        // console.log(error);
      })
  }, [])

  const autoSlide = () => {
    setSlider((prevSlider) => (prevSlider + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const goToSlide = (index) => {
    setSlider(index);
  };


  useEffect(() => {
    axios.get('https://appy.trycatchtech.com/v3/maganlalchikki/banner_image')
      .then(response => {
        setBanner(response.data)
      })
      .catch(function (error) {
        // console.log(error);
      })
      .finally(function () {
      });
  }, [])

  useEffect(() => {
    axios.get('https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=1')
      .then(response => {
        // console.log(response.data);
        const productss = response.data;
        productss.pop();
        setProduct(productss)
      })
      .catch(error => {
        // console.log(error);
      })


    axios.get('https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=2')
      .then(response => {
        // console.log(response.data);
        setProduct1(response.data)
      })
      .catch(error => {
        // console.log(error);
      })


    axios.get('https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=4')
      .then(response => {
        // console.log(response.data);
        const productss = response.data;
        productss.pop();
        setProduct2(productss)
      })
      .catch(error => {
        // console.log(error);
      })

      axios.get('https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=5')
      .then(response => {
        // console.log(response.data);
        setProduct3(response.data)
      })
      .catch(error => {
        // console.log(error);
      })
  }, [])
  



  const handleQuickView = (prod) => {
    setSelectedProduct(prod);
    setQuickclick(true);
  };

  const closeClick = () => {
    setQuickclick(false)
  }

  const [cartMessage, setCartMessage] = useState(null);

  const {setViewproduct} = useContext(Mycontext);

  const ViewProduct = (prod) =>{
    setViewproduct(prod);
  }


  return (

    <>

      {quickclick && <QuickviewCompnent close={closeClick} AddToCart={AddToCart} product={selectedProduct} WishlistCart={WishlistCart} />}

      {cartMessage && (

         <>
              <div className="bg-white fixed w-60 max-h-max text-black p-2 z-50  mb-4 mr-4 shadow-lg" style={{marginLeft:'750px'}}>
                <p className='text-center p-5 text-lg text-gray-600 font-semibold'>{cartMessage}</p>
              </div>
              <div className="bg-white lg:hidden fixed w-60 max-h-max text-black p-2 z-50  mb-4 mr-4 ml-24 shadow-2xl shadow-black">
                <p className='text-center p-5 text-lg text-gray-600 font-semibold'>{cartMessage}</p>
              </div>
              </>
      )}

      <div className="relative flex flex-col items-center z-10">

        <div className="relative w-full overflow-hidden">
          {images.map((img, index) => (
            <div key={index} className={`w-full h-full ${index === slider ? 'block' : 'hidden'}`}>
              <img className="lg:w-full lg:h-full w-full h-40 lg:object-cover" src={img.image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <div className='flex mt-4 absolute inset-0 justify-center items-end lg:mb-5 mb-2'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`lg:w-4 lg:h-4 w-2.5 h-2.5 mx-1 rounded-full ${index === slider ? 'bg-white duration-1000 transform origin-bottom' : 'bg-transparent border-2 border-white '}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="back bg-offwhite overflow-hidden">
        
        <div className='py-10 lg:w-full lg:flex lg:justify-center lg:items-center grid grid-cols-1 ml-3 gap-3 '>
          {banner.map((ban) => (
            <div className='mx-4 hover:opacity-70 mb-3' key={ban.id}>
              <img src={ban.banner_image} alt='img' />
            </div>

          ))}
        </div>


        <div className="maindiv lg:w-full lg:flex pb-8 justify-center">
          <div className='border-t-2 border-pink rounded-t w-max h-max lg:flex bg-white ml-8 lg:ml-0'>
            <div className='bg-pink  rounded-t text-white p-2 lg:px-10 flex gap-3 font-serif lg:mr-10 mr-64 w-full lg:w-40'><img src={img1} alt="img" style={{ width: '25px', height: '16px', marginTop: '2px' }} />CHIKKI</div>
            <div className='lg:pl-96 rounded-t justify-center items-center p-0.5'>
              <ul className='lg:flex hidden text-base '>
                <li className=' cursor-pointer p-2 mx-5 text-red-600'>Latest Product</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-red-600'>Best Selling</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-red-600'>Top Rating</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-red-600'>Featured Products</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="productapi py-10 flex justify-center gap-4 relative ">
          <div className='lg:w-72 lg:block hidden'><img src={img2} alt="img" /></div>
          <div className='grid lg:grid-cols-4 lg:gap-6 grid-cols-2 gap-4 '>
            {product.map((prod) => (
            
              <div className='lg:w-52 w-44 rounded bg-white ' key={`prod${prod.id}`} onMouseEnter={() => setHover(prod.id)} onMouseLeave={() => setHover(null)} >
                <div className='relative z-10' onClick={() => ViewProduct(prod)}>
                  <img src={prod.images} alt="img" className='w-full h-full rounded lg:rounded-none' />
                  <div className={`absolute inset-0 bg-black bg-opacity-50 w-full h-full pt-1 transition-opacity duration-700  ${hover === prod.id ? 'opacity-95' : 'opacity-0'}`} >
                    <div className='rounded-full  bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 my-2 lg:ml-40 ml-36 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onClick={() => handleQuickView(prod)} onMouseEnter={() => setIconhover(true)} onMouseLeave={() => setIconhover(false)}>
                      <ImEye className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-20 bg-white text-black ${iconhover ? 'block' : 'hidden'}`} >QuickView</p>
                    </div>
                    <div className='rounded-full  bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 ml-36 my-2 lg:ml-40 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover2(true)} onMouseLeave={() => setIconhover2(false)}
                      onClick={() => {
                        WishlistCart(prod)
                        setCartMessage(`Product Added!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}>
                      <FaHeart className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-16 bg-white text-black ${iconhover2 ? 'block' : 'hidden'}`}>Wishlist</p>
                    </div>
                    <div className='rounded-full  bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 ml-36 my-2 lg:ml-40  hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover3(true)} onMouseLeave={() => setIconhover3(false)}
                      onClick={() => {
                        AddToCart(prod)
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
                  <p className='flex items-center text-red-600 text-xl font-bold font-sans py-3.5'><FaIndianRupeeSign className='text-lg mt-0.5 -mr-0.5' />{prod.price}</p>
                </div>
              </div>


            ))}

          </div>

        </div>
        <Link to='chikki' className='text-center flex justify-center font-sans text-black'><button className='border p-2 px-8 rounded-md hover:bg-red-600 hover:text-white text-base bg-white flex items-center lg:text-gray-500'>View All Chikki <FaCaretRight className='mt-1 text-lg' /></button></Link>


        <div className="imagediv py-4 lg:flex lg:justify-center lg:items-center block px-4 mt-5">
          <div className="div1 border p-2 border-white"><img src={img3} alt="img" /></div>
          <div className="div2 border p-2 border-white"><img src={img4} alt="img" /></div>
        </div>


        <div className="maindiv lg:w-full lg:flex  pb-8 justify-center mt-10">
          <div className='border-t-2 border-sky-500 rounded-t w-max h-max lg:flex bg-white ml-5 lg:ml-0'>
            <div className='bg-sky-500  rounded-t text-white p-2 px-10 flex gap-2 font-serif lg:mr-12 mr-52 w-full lg:w-40 lg:ml-0 '><img src={img5} alt="img" style={{ width: '15px', height: '18px', marginTop: '2px' }} className='-ml-5' />FUDGE</div>
            <div className='pl-96 rounded-t justify-center items-center p-0.5'>
              <ul className='lg:flex hidden text-base'>
                <li className=' cursor-pointer p-2 mx-5 text-sky-500'>Latest Product</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-sky-500'>Best Selling</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-sky-500'>Top Rating</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-sky-500'>Featured Products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="productapi py-10 flex justify-center gap-4 relative">
          <div className='grid lg:grid-cols-4 lg:gap-6 grid-cols-2 gap-4'>
            {product1.map((prod) => (
              <div className='lg:w-52 w-44 rounded bg-white' key={`prod${prod.id}`} onMouseEnter={() => setHover(prod.id)} onMouseLeave={() => setHover(null)}>
                <div className='relative z-10'>
                  <img src={prod.images} alt="img" className='w-full h-full rounded lg:rounded-none' />
                  <div className={`absolute inset-0 bg-black bg-opacity-50 w-full h-full pt-1 transition-opacity duration-700 ${hover === prod.id ? 'opacity-95' : 'opacity-0'}`} >

                    <div className='rounded-full  bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 ml-36 my-2 lg:ml-40 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onClick={() => handleQuickView(prod)} onMouseEnter={() => setIconhover(true)} onMouseLeave={() => setIconhover(false)}>
                      <ImEye className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-20 bg-white text-black ${iconhover ? 'block' : 'hidden'}`} >QuickView</p>
                    </div>

                    <div className='rounded-full bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 ml-36 my-2 lg:ml-40 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover2(true)} onMouseLeave={() => setIconhover2(false)}
                      onClick={() => {
                        WishlistCart(prod)
                        setCartMessage(`Product Added!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}>
                      <FaHeart className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-16 bg-white text-black ${iconhover2 ? 'block' : 'hidden'}`}>Wishlist</p>
                    </div>
                    <div className='rounded-full bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 ml-36 my-2 lg:ml-40 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover3(true)} onMouseLeave={() => setIconhover3(false)}
                      onClick={() => {
                        AddToCart(prod)
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
                  <p className='text-sm border-b pb-4 font-sans'>{prod.title}</p>
                  <p className='flex items-center text-red-600 text-xl font-bold font-sans py-3.5'><FaIndianRupeeSign className='text-lg mt-0.5 -mr-0.5' />{prod.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='lg:w-72 lg:block hidden'><img src={img6} alt="img" /></div>

        </div>
        <Link to='fudge' className='text-center flex justify-center font-sans text-black'><button className='border p-2 px-8 rounded-md hover:bg-red-600 hover:text-white text-base bg-white flex items-center lg:text-gray-500 font-sans text-black'>View All Fudge <FaCaretRight className='text-lg mt-1' /></button></Link>


        <div className="maindiv lg:w-full lg:flex  pb-8 justify-center mt-10">
          <div className='border-t-2 border-amber-500 rounded-t w-max h-max lg:flex bg-white ml-5 lg:ml-0'>
            <div className='bg-amber-500 rounded-t text-white p-2 px-7 flex gap-2 font-serif lg:mr-12 mr-44 w-full lg:w-52 lg:ml-0'><img src={img7} alt="img" style={{ width: '16px', height: '14px', marginTop: '4px' }}  className='-ml-5'/>DRY FRUIT ROLL</div>
            <div className='pl-96 rounded-t justify-center items-center p-0.5'>
              <ul className='lg:flex hidden text-base'>
                <li className=' cursor-pointer p-2 mx-5       text-amber-500'>Latest Product</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-amber-500'>Best Selling</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-amber-500'>Top Rating</li>
                <li className=' cursor-pointer p-2 mx-5 hover:text-amber-500'>Featured Products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="productapi py-10 flex justify-center gap-4 relative">
          <div className='lg:w-72 lg:block hidden'><img src={img8} alt="img" /></div>
          <div className='grid lg:grid-cols-4 lg:gap-6 grid-cols-2 gap-4'>
            {product2.map((prod) => (
              <div className='lg:w-52 w-44 rounded bg-white' key={`prod${prod.id}`} onMouseEnter={() => setHover(prod.id)} onMouseLeave={() => setHover(null)}>
                <div className='relative z-10'>
                  <img src={prod.images} alt="img" className='w-full h-full rounded lg:rounded-none' />
                  <div className={`absolute inset-0 bg-black bg-opacity-50 w-full h-full pt-1 transition-opacity duration-700 ${hover === prod.id ? 'opacity-95' : 'opacity-0'}`} >

                    <div className='rounded-full  bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 ml-36 my-2 lg:ml-40 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onClick={() => handleQuickView(prod)} onMouseEnter={() => setIconhover(true)} onMouseLeave={() => setIconhover(false)}>
                      <ImEye className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-20 bg-white text-black ${iconhover ? 'block' : 'hidden'}`} >QuickView</p>
                    </div>

                    <div className='rounded-full bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 ml-36 my-2 lg:ml-40 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover2(true)} onMouseLeave={() => setIconhover2(false)}
                      onClick={() => {
                        WishlistCart(prod)
                        setCartMessage(`Product Added!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}>
                      <FaHeart className='lg:text-sm text-xs lg:-mt-2 -mt-1.5 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-16 bg-white text-black ${iconhover2 ? 'block' : 'hidden'}`}>Wishlist</p>
                    </div>
                    <div className='rounded-full bg-white lg:p-4 lg:w-4 lg:h-4 h-1 w-1 p-3 ml-36 my-2 lg:ml-40 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover3(true)} onMouseLeave={() => setIconhover3(false)}
                      onClick={() => {
                        AddToCart(prod)
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
                  <p className='text-sm border-b pb-4 font-sans'>{prod.title}</p>
                  <p className='flex items-center text-red-600 text-xl font-bold py-3.5 font-sans'><FaIndianRupeeSign className='text-lg mt-0.5 -mr-0.5' />{prod.price}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <Link to='dryfruit' className='text-center flex justify-center font-sans text-black'><button className='border p-2 px-8 rounded-md hover:bg-red-600 hover:text-white text-base bg-white flex items-center lg:text-gray-500'>View All Dry Fruit Roll <FaCaretRight className='text-lg mt-1' /></button></Link>


        <div className="imagediv py-4 lg:flex lg:justify-center lg:items-center block px-4 mt-5">
          <div className="div1"><img src={img9} alt="img" /></div>
          <div className="div2"><img src={img10} alt="img" /></div>
        </div>

        {/* lasstbox */}

        <div className="lg:flex lg:flex-row lg:px-28 gap-4 lg:mt-8 lg:justify-center lg:items-start lg:mb-10 px-5">
          <div className="lg:w-96 h-96 block lg:mb-10 mb-20" >
            <div className="text-lg px-4 py-2 flex gap-4 bg-lime-500 font-bold text-white font-sans">
              <img src={img11} alt="img" className="w-5 h-5 mt-1" /> DRY FRUIT ROLL
            </div>
            <PerfectScrollbar className='overflow-hidden grid grid-cols-2 lg:py-1 w-full lg:px-2 bg-white'>
            {product2.map((prod) => (
              <div className='lg:w-40 w-44 my-5 bg-white rounded lg:ml-3 mx-1.5 border'   key={`prod${prod.id}`} onMouseEnter={() => setHover(prod.id)} onMouseLeave={() => setHover(null)}>
                <div className='relative z-10'>
                  <img src={prod.images} alt="img" className='w-full h-full rounded-t' />
                  <div className={`absolute inset-0 rounded-t bg-black bg-opacity-50 w-full h-full pt-1 transition-opacity duration-700 ${hover === prod.id ? 'opacity-95' : 'opacity-0'}`} >

                    <div className='rounded-full  bg-white lg:p-4 p-3 ml-36 w-4 h-4 my-2 lg:ml-28  hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onClick={() => handleQuickView(prod)} onMouseEnter={() => setIconhover(true)} onMouseLeave={() => setIconhover(false)}>
                      <ImEye className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-20 bg-white text-black ${iconhover ? 'block' : 'hidden'}`} >QuickView</p>
                    </div>

                    <div className='rounded-full bg-white lg:p-4 p-3 ml-36 w-4 h-4 my-2 lg:ml-28 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover2(true)} onMouseLeave={() => setIconhover2(false)}
                      onClick={() => {
                        WishlistCart(prod)
                        setCartMessage(`Product Added!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}>
                      <FaHeart className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-16 bg-white text-black ${iconhover2 ? 'block' : 'hidden'}`}>Wishlist</p>
                    </div>
                    <div className='rounded-full bg-white lg:p-4 p-3 ml-36 lg:ml-28 w-4 h-4 my-2  hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover3(true)} onMouseLeave={() => setIconhover3(false)}
                      onClick={() => {
                        AddToCart(prod)
                        setCartMessage(`Product Added Cart!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}
                    >
                      <BsBagCheck className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-12 bg-white text-black ${iconhover3 ? 'block' : 'hidden'}`}>Cart</p>
                    </div>

                  </div>
                </div>
                <div className='p-4 pb-0'>
                  <p className='text-sm border-b pb-4 font-serif'>{prod.title}</p>
                  <p className='flex items-center text-red-600 text-xl font-bold py-3.5 font-sans'><FaIndianRupeeSign className='text-lg mt-0.5 -mr-0.5' />{prod.price}</p>
                </div>
              </div>
            ))}
            </PerfectScrollbar>
          </div>
          <div className="lg:w-96 h-96 block lg:mb-10 mb-20">
            <div className="text-lg px-4 py-2 flex gap-4 bg-red-600 font-bold text-white font-sans">
              <img src={img12} alt="img" className="w-5 h-5 mt-1" /> FUDGE
            </div>
            <PerfectScrollbar className='overflow-hidden grid grid-cols-2 py-1 bg-white'>
            {product1.map((prod, index) => (
              <div className='lg:w-40 w-44 my-5 bg-white rounded lg:ml-3 mx-1.5 border'   key={`prod${prod.id}`} onMouseEnter={() => setHover(prod.id)} onMouseLeave={() => setHover(null)}>
                <div className='relative z-10'>
                  <img src={prod.images} alt="img" className='w-full h-full rounded-t' />
                  <div className={`absolute inset-0 rounded-t bg-black bg-opacity-50 w-full h-full pt-1 transition-opacity duration-700 ${hover === prod.id ? 'opacity-95' : 'opacity-0'}`} >

                    <div className='rounded-full bg-white lg:p-4 p-3 ml-36 lg:ml-28 w-4 h-4 my-2  hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onClick={() => handleQuickView(prod)} onMouseEnter={() => setIconhover(true)} onMouseLeave={() => setIconhover(false)}>
                      <ImEye className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-20 bg-white text-black ${iconhover ? 'block' : 'hidden'}`} >QuickView</p>
                    </div>

                    <div className='rounded-full bg-white lg:p-4 p-3 ml-36 lg:ml-28 w-4 h-4 my-2 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover2(true)} onMouseLeave={() => setIconhover2(false)}
                      onClick={() => {
                        WishlistCart(prod)
                        setCartMessage(`Product Added!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}>
                      <FaHeart className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-16 bg-white text-black ${iconhover2 ? 'block' : 'hidden'}`}>Wishlist</p>
                    </div>
                    <div className='rounded-full bg-white lg:p-4 p-3 ml-36 lg:ml-28 w-4 h-4 my-2  hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover3(true)} onMouseLeave={() => setIconhover3(false)}
                      onClick={() => {
                        AddToCart(prod)
                        setCartMessage(`Product Added Cart!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}
                    >
                      <BsBagCheck className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-12 bg-white text-black ${iconhover3 ? 'block' : 'hidden'}`}>Cart</p>
                    </div>

                  </div>
                </div>
                <div className='p-4 pb-0'>
                  <p className='text-sm border-b pb-4 font-serif'>{prod.title}</p>
                  <p className='flex items-center text-red-600 text-xl font-bold py-3.5 font-sans'><FaIndianRupeeSign className='text-lg mt-0.5 -mr-0.5' />{prod.price}</p>
                </div>
              </div>
            ))}
            </PerfectScrollbar>
          </div>
          <div className="lg:w-96 h-96 block lg:mb-10 mb-14">
            <div className="text-lg px-4 py-2 flex gap-4 bg-cyan-400 font-bold text-white font-sans">
              <img src={img12} alt="img" className="w-5 h-5 mt-1" /> NAMKEENS
            </div>
            <PerfectScrollbar className='overflow-hidden grid grid-cols-2 py-1 bg-white'>
            {product3.map((prod, index) => (
              <div className='lg:w-40 w-44 my-5 bg-white rounded lg:ml-3 mx-1.5 border'   key={`prod${prod.id}`} onMouseEnter={() => setHover(prod.id)} onMouseLeave={() => setHover(null)}>
                <div className='relative z-10'>
                  <img src={prod.images} alt="img" className='w-full h-full rounded-t' />
                  <div className={`absolute inset-0 rounded-t bg-black bg-opacity-50 w-full h-full pt-1 transition-opacity duration-700 ${hover === prod.id ? 'opacity-95' : 'opacity-0'}`} >

                    <div className='rounded-full  bg-white lg:p-4 p-3 ml-36 lg:ml-28 w-4 h-4 my-2 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onClick={() => handleQuickView(prod)} onMouseEnter={() => setIconhover(true)} onMouseLeave={() => setIconhover(false)}>
                      <ImEye className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-20 bg-white text-black ${iconhover ? 'block' : 'hidden'}`} >QuickView</p>
                    </div>

                    <div className='rounded-full bg-white lg:p-4 p-3 ml-36 lg:ml-28 w-4 h-4 my-2 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover2(true)} onMouseLeave={() => setIconhover2(false)}
                      onClick={() => {
                        WishlistCart(prod)
                        setCartMessage(`Product Added!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}>
                      <FaHeart className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-16 bg-white text-black ${iconhover2 ? 'block' : 'hidden'}`}>Wishlist</p>
                    </div>
                    <div className='rounded-full bg-white lg:p-4 p-3 ml-36 lg:ml-28 w-4 h-4 my-2 hover:duration-500 hover:bg-red-600 hover:text-white cursor-pointer relative' onMouseEnter={() => setIconhover3(true)} onMouseLeave={() => setIconhover3(false)}
                      onClick={() => {
                        AddToCart(prod)
                        setCartMessage(`Product Added Cart!`);
                        setTimeout(() => {
                          setCartMessage(null);
                        }, 3000);
                      }}
                    >
                      <BsBagCheck className='text-sm -mt-2 -ml-1.5' />
                      <p className={`absolute z-50 border p-1 px-1.5 text-xs w-max top-1 -left-12 bg-white text-black ${iconhover3 ? 'block' : 'hidden'}`}>Cart</p>
                    </div>

                  </div>
                </div>
                <div className='p-4 pb-0'>
                  <p className='text-sm border-b pb-4 font-serif'>{prod.title}</p>
                  <p className='flex items-center text-red-600 text-xl font-bold py-3.5 font-sans'><FaIndianRupeeSign className='text-lg mt-0.5 -mr-0.5' />{prod.price}</p>
                </div>
              </div>
            ))}
            </PerfectScrollbar>
          </div>
        </div>




        <div className="endbox lg:hidden flex justify-center py-5">
          <div className='rounded border bg-red-600 lg:flex lg:gap-4 flex h-20 lg:w-max w-96 lg:overflow-hidden  overflow-y-auto '>
            <div className='flex text-xs justify-center items-center rounded-l text-white gap-3 px-4 lg:w-0 w-80 hover:bg-red-700 cursor-pointer'>
              <PiTruckLight className='text-4xl' />
              <div className='lg:w-0 w-80'>
                <p className='font-medium lg:font-serif font-sans'>FREE SHIPPING</p>
                <span>Free Shipping On Oder Over Rs.750</span>
              </div>
            </div>
            <div className='flex text-xs justify-center items-center py-6 rounded-l text-white lg:px-0 px-4 lg:w-72 w-80 gap-3 hover:bg-red-700 cursor-pointer'>
              <CiLock className='text-4xl' />
              <div className='lg:w-0 w-80'>
                <p className='font-medium  lg:font-serif font-sans'>SECURE PAYMENT</p>
                <span>We Value Your Security</span>
              </div>
            </div>
            <div className='flex text-xs justify-center items-center py-6 rounded-l text-white lg:px-0 px-4 lg:w-72 w-80 gap-3 hover:bg-red-700 cursor-pointer'>
              <BsHeadset className='text-4xl' />
              <div className='lg:w-0 w-80'>
                <p className='font-medium lg:font-serif font-sans'>ONLINE SUPPORT</p>
                <span>We Have Support 24/7</span>
              </div>
            </div>
            <div className='flex text-xs justify-center items-center py-6 rounded-l text-white lg:px-0 px-4 lg:w-72 w-80 gap-3 hover:bg-red-700 cursor-pointer'>
              <FaHandHoldingUsd className='text-4xl' />
              <div className='lg:w-0 w-80'>
                <p className='font-medium lg:font-serif font-sans'>QUICK AND EASY PAYMENTS</p>
                <span>Pan India Delivery</span>
              </div>
            </div>

          </div>
        </div>

        
        <div className="endbox lg:flex hidden justify-center py-5">
          <div className='rounded border bg-red-600 lg:flex lg:gap-4 flex h-20 lg:w-max w-96 lg:overflow-hidden  overflow-y-auto '>
            <div className='flex text-xs justify-center items-center rounded-l text-white gap-3 px-11 hover:bg-red-700 cursor-pointer'>
              <PiTruckLight className='text-4xl' />
              <div >
                <p className='font-medium lg:font-serif font-sans'>FREE SHIPPING</p>
                <span>Free Shipping On Oder Over Rs.750</span>
              </div>
            </div>
            <div className='flex text-xs justify-center items-center py-6 rounded-l text-white  px-11 gap-3 hover:bg-red-700 cursor-pointer'>
              <CiLock className='text-4xl' />
              <div >
                <p className='font-medium  lg:font-serif font-sans'>SECURE PAYMENT</p>
                <span>We Value Your Security</span>
              </div>
            </div>
            <div className='flex text-xs justify-center items-center py-6 rounded-l text-white px-11 gap-3 hover:bg-red-700 cursor-pointer'>
              <BsHeadset className='text-4xl' />
              <div >
                <p className='font-medium lg:font-serif font-sans'>ONLINE SUPPORT</p>
                <span>We Have Support 24/7</span>
              </div>
            </div>
            <div className='flex text-xs justify-center items-center py-6 rounded-l text-white lg:px-0 px-4 lg:w-72 w-80 gap-3 hover:bg-red-700 cursor-pointer'>
              <FaHandHoldingUsd className='text-4xl' />
              <div>
                <p className='font-medium lg:font-serif font-sans'>QUICK AND EASY PAYMENTS</p>
                <span>Pan India Delivery</span>
              </div>
            </div>

          </div>
        </div>

      </div>



    </>



  );
}

export default HomeComponent;
