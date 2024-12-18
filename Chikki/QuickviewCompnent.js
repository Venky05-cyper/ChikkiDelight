import { useState } from "react";
import { FaIndianRupeeSign, FaCaretRight } from "react-icons/fa6";
import { BsBagCheck } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const QuickviewCompnent = ({ close, product,product2,WishlistCart,AddToCart }) => {

    const [val, setVal] = useState(1);
    const [cartMessage, setCartMessage] = useState(null);
    return (
        <>
          {cartMessage && (
            <>
              <div className="bg-white fixed w-60 max-h-max text-black p-2 z-50  mb-4 mr-4 shadow-lg" style={{marginLeft:'750px'}}>
                <p className='text-center p-5 text-lg text-gray-600 font-semibold'>{cartMessage}</p>
              </div>
              <div className="bg-white lg:hidden fixed w-60 max-h-max text-black p-2 z-50  mb-4 mr-4 shadow-lg" style={{marginLeft:'50px'}}>
                <p className='text-center p-5 text-lg text-gray-600 font-semibold'>{cartMessage}</p>
              </div>
              </>
            )}
       
        <div>
            <div className={`modal fixed w-full min-h-full flex  justify-center items-center top-0 z-20 bg-opacity-50 bg-black overflow-hidden`}>
                <div className='bg-white mt-14' style={{ width: '810px', height: '450px' }}>
                <button className='lg:flex hidden float-end py-2 px-5 text-lg bg-red-600 text-white' onClick={close}>X</button>
                <button className='lg:hidden float-end py-1 px-3 text-lg bg-red-600 text-white'  onClick={close}>X</button>

                    <div>
                        <div key={product.id} className='lg:flex  gap-5 lg:px-7 lg:py-10  py-5 px-4'>
                            <div >
                            <div className=" lg:w-96 lg:ml-0 w-full lg:border mb-3 flex lg:justify-start justify-center ">
                                <img src={product.images || product.cat_image} alt="img" className='lg:w-52 w-28 h-full' />
                            </div>
                            <div className="p-1 gap-4 flex lg:ml-0 lg:justify-start justify-center ">
                            <div className="border hover:border lg:ml-0 -ml-2 rounded-md hover:border-red-500"><img src={product.images || product.cat_image} alt="img" className='rounded-md lg:w-20 lg:h-20 w-16 h-16' /></div>
                            <div className="border hover:border lg:ml-0 rounded-md hover:border-red-500"><img src={product.images || product.cat_image} alt="img" className='rounded-md lg:w-20 lg:h-20 w-16 h-16' /></div>
                            </div>
                            </div>
                            
                            <div className="lg:w-80 w-full ">
                                <h1 className="text-sm font-serif font-semibold lg:text-start text-center">{product.title}</h1>
                                <p className="flex items-center text-lg font-bold my-4 text-red-600 lg:justify-start justify-center font-sans"><FaIndianRupeeSign className="text-base mt-0.5 font-thin" />{product.price || 100}</p>
                                <div className="flex gap-3 my-4 ml-2 lg:justify-start justify-center">
                                    <div className="flex justify-center w-10"><input type="text" value={val} className="border rounded-full w-12 font-sans text-black py-1.5 pt-1 pl-4 focus:outline-none" /></div>
                                    <div className="border cursor-pointer hover:bg-rose-600 bg-red-500 text-white py-2 rounded-full gap-2 font-sans text-sm font-semibold w-36 flex justify-center items-center" 
                                          onClick={()=>{
                                            AddToCart(product || product2)
                                            setCartMessage(`Product Added Cart!`);
                                         setTimeout(() => {
                                           setCartMessage(null);
                                         }, 3000);
                                          }}
                                          >
                                        <BsBagCheck className="text-lg font-semibold" />  Add To Cart
                                    </div>
                                    <div className="border text-xs hover:bg-red-500 hover:text-white border-red-500 text-red-500 cursor-pointer px-3 rounded-full flex justify-center items-center" onClick={()=>{
                                         WishlistCart(product)
                                         setCartMessage(`Product Added!`);
                                         setTimeout(() => {
                                           setCartMessage(null);
                                         }, 3000);
                                    }}>
                                        <FaHeart />
                                    </div>
                                </div>
                                <div className="lg:max-w-max w-full gap-2 my-5 flex lg:justify-start justify-center lg:ml-0 ">
                                    <span className=" rounded-full py-2.5 cursor-pointer px-2.5 text-lg flex justify-center items-center bg-sky-800 text-white">
                                        <FaFacebookF />
                                    </span>
                                    <span className=" rounded-full py-2.5 cursor-pointer px-2.5 text-lg flex justify-center items-center bg-sky-400 text-white">
                                        <FaTwitter />
                                    </span>
                                    <span className=" rounded-full py-2.5 cursor-pointer px-2.5 text-lg flex justify-center items-center bg-red-500 text-white">
                                        <FaGooglePlusG />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default QuickviewCompnent
