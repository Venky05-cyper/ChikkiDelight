import { useContext, useState, useEffect } from 'react';
import img from './img/new.jpeg';
import { MdOutlineCheck } from "react-icons/md";
import { Mycontext } from './CreateContext/Mycontext';

const WishlistComponent = ({ cart, removeFromCart }) => {
    const [cartMessage, setCartMessage] = useState(null);
    const [hide, setHide] = useState(false);
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(cart));
    }, []);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('wishlist'));
        if (storedCart) {
            setHide(true);
        }
    }, []);

    const {wishlist} = useContext(Mycontext);

    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={img} alt="img" className='w-full h-48 object-cover' />
                <div className='absolute inset-0 bg-black bg-opacity-65 flex flex-col items-center justify-center text-center'>
                    <p className='font-serif text-2xl text-white'>Wishlist</p>
                    <p className='text-sm text-white font-sans'>
                        <a href="/" className='hover:text-red-600'>Home</a> | <span className='text-red-600'>Wishlist</span>
                    </p>
                </div>
            </div>

            <div className='bg-offwhite w-full px-4 md:px-8 lg:px-16 pt-20 lg:pb-40 pb-80'>
                <div className='bg-white w-full py-10 rounded-md px-4 md:px-6 lg:px-10'>
                    {cartMessage && (
                        <div className='bg-offwhite w-full px-4 py-2 my-5 border-t-2 border-red-500'>
                            <p className='gap-2 flex items-center'>
                                <span className='text-white bg-lime-500 rounded-full text-xs'><MdOutlineCheck /></span>{cartMessage}
                            </p>
                        </div>
                    )}
                    <h1 className='lg:text-2xl text-lg text-gray-500 font-serif mb-5'>My wishlist on Maganlal Chikki</h1>
                    <div className='mt-5 border rounded border-gray-300 w-full'>
                        <div className='hidden md:flex h-8 items-center border-b'>
                            <p className='border-r h-full w-20'></p>
                            <p className='border-r h-full w-24'></p>
                            <p className='pl-7 px-20 py-1.5 text-lg font-semibold'>Product name</p>
                        </div>
                        {!hide ? (
                            <p className='text-center border-t border-gray-300 lg:font-serif font-sans  text-gray-500'>No products added to the wishlist</p>
                        ) : (
                            cart.map((product, index) => (
                                <div className='border-t flex  lg:flex-row border-gray-300' key={index}>
                                    <p className='border-r p-5 md:p-5 border-b text-xl lg:w-20 md:w-20 flex items-center justify-center'>
                                        <span
                                            className='mt-2.5 text-red-600 rounded-full bg-offwhite px-3 font-semibold text-sm py-1.5 cursor-pointer hover:bg-red-600 hover:text-white'
                                            onClick={() => {
                                                removeFromCart(product.id);
                                                setCartMessage(`Product successfully removed.`);
                                                setTimeout(() => {
                                                    setCartMessage(null);
                                                }, 3000);
                                            }}
                                        >
                                            X
                                        </span>
                                    </p>
                                    <p className='border-r lg:p-5 lg:w-28 w-40  flex items-center justify-center'>
                                        <img src={product.images || product.cat_image} alt="img" className='w-14 h-14' />
                                    </p>
                                    <p className='lg:pl-5 lg:p-5 lg:w-full flex w-40 p-1.5 lg:text-lg text-xs items-center font-sans'>{product.title || product.cat_name}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistComponent;
