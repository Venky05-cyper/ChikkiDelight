import React, { Profiler, useContext, useEffect, useState } from 'react';
import logo from './img/asset 2.png';
import logo2 from './img/asset 2.png';
import cart from './img/asset 45.png';
import { HiOutlineBars4 } from "react-icons/hi2";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import sup from './img/asset 47.png';
import asset from './img/asset 0.png';
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import HomeComponent from './HomeCompo';
import { FaUser, FaLock, FaRegAddressCard } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShuffle } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaIndianRupeeSign } from "react-icons/fa6";
import LoginComponent from './LoginComponent';
import { FaAngleDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from 'axios';
import SearchComponent from './SearchComponent';
import { Mycontext } from './CreateContext/Mycontext';
import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
// import { FaTimes } from 'react-icons/fa6';
// import { FaBars } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderComponent = ({ onSearch }) => {
    const [accounthover, setAccountHover] = useState(false);
    const [flag, setFlag] = useState(false);
    const [rupee, setRupee] = useState(false);
    const [depart, setDepart] = useState(false);
    const [cartbox, setCart] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleScroll = () => {
        const scrolled = window.scrollY;
        const mainhead = document.querySelector('.mainhead');
        const head = document.querySelector('.headerss');
        const head2 = document.querySelector('.head3');
        const img = document.querySelector('.img1');
        const img2 = document.querySelector('.img2');
        const head3 = document.querySelector('.head2');
        const emptydiv = document.querySelector('.emptydiv');
        const barsclass = document.querySelector('.barsclass');
        const icons = document.querySelector('.icons');
        const responav = document.querySelector('.responav')

        //this is after scrooll
        if (scrolled > 250) {
            head.style.display = 'none';
            head2.style.display = 'none';
            head3.style.display = 'flex';
            // head3.style.border = "1px solid"
            head3.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
            head3.style.paddingTop = '10px';
            head3.style.paddingBottom = '10px';
            responav.style.marginTop = "10px";
            img.style.width = '180px';
            img.style.height = '60px';
            img.style.marginTop = '-7px';
            mainhead.style.position = 'fixed';
            mainhead.style.top = '0';
            mainhead.style.left = '0';
            mainhead.style.width = '100%';

            emptydiv.style.width = '90%';
            emptydiv.style.height = '340px';

            // barsclass.style.marginLeft = '5px';
            img2.style.position = 'absolute';
            img2.style.top = '2px';
            img2.style.left = '95px';
            img2.style.width = "40%";
            // img2.style.border="1px solid"
            icons.style.marginLeft = '20px';
        } else {
            head.style.display = 'flex';
            head.style.zIndex = '5';
            head2.style.display = 'flex';
            // head3.style.border = "none"
            mainhead.style.position = '';
            mainhead.style.top = '';
            mainhead.style.left = '';

            img.style.width = '100%';
            img.style.height = '100%';
            img.style.marginTop = '8px';
            responav.style.marginTop = "19px";
            head3.style.display = '';
            head3.style.boxShadow = '';
            head3.style.paddingTop = '20px';
            head3.style.paddingBottom = '10px';

            emptydiv.style.width = '';
            emptydiv.style.height = '';

            // barsclass.style.marginLeft = '5px';
            img2.style.position = 'absolute';
            img2.style.top = '10px';
            img2.style.left = '95px';
            // img2.style.border="none"
            icons.style.marginLeft = '20px';
        }
    };

    window.addEventListener('scroll', handleScroll);



    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const closeLogin = () => {
        setShowLogin(false);
        setBarshide(false);
    };

    const [selectedLanguage, setSelectedLanguage] = useState({
        name: 'English',
        flag: 'https://img.icons8.com/color/48/usa.png'
    });

    const handleLanguageChange = (language, flag) => {
        setSelectedLanguage({ name: language, flag: flag });
        setFlag(false);
    };

    const [search, setSearch] = useState([]);

    useEffect(() => {
        axios.get("https://appy.trycatchtech.com/v3/maganlalchikki/category_list")
            .then(response => {
                setSearch(response.data);
            })
            .catch((error) => {
                setSearch(error)
            })
    }, [])

    const { setData } = useContext(Mycontext);


    const [barsdata, setBars] = useState(false);

    const [barhide, setBarshide] = useState(false);

    const HideButton = () => {
        setBarshide(true);
    }


    const [query, setQuery] = useState('');
    const [option, setOption] = useState('');
    const [research, setResearch] = useState(false);


    const handleOptionChange = (e) => {
        setOption(e.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };


    const SearchButton = () => {
        onSearch({ option, query });
        setData(search);
        setResearch(false)
    }

    //    const [show,SetShow] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            SearchButton();
        }
      };

    const handleClick = () => {
        HideButton();
        setBars(!barsdata);
    }


    return (
        <>

            <header className='mainhead z-50  bg-white w-full '>
                <div className="headerss relative bg-offwhite lg:justify-between lg:px-44 lg:flex hidden">
                    <span className='lg:font-bold lg:text-gray-600 lg:py-1.5 lg:flex hidden' style={{ fontSize: '13px' }} >Welcome to Maganlal Chikki, Lonavla! <span className='text-red-600 mx-1'>Join Free </span> or <span className='text-red-600 mx-1'> Sign in</span></span>
                    <div className='firsthead lg:flex hidden w-96 items-center text-sm cursor-pointer gap-8' style={{ fontSize: '13px' }}>
                        <span className='hover:text-red-600 flex items-center gap-1 text-xs relative' onClick={handleLoginClick}>
                            <FaLock />Login
                        </span>

                        <span className='relative py-1.5 flex items-center gap-1 text-xs hover:bg-blend-darken' onMouseEnter={() => setAccountHover(true)} onMouseLeave={() => setAccountHover(false)}>

                            <FaUser /> My Account
                            <div className={`absolute cursor-pointer top-full left-0 bg-white shadow-md py-3 ${accounthover ? 'block' : 'hidden'}`} >
                                <ul>
                                    <li className='mb-1 pl-4 pr-5 w-36 py-1 hover:text-red-600 cursor-pointer hover:bg-offwhite'><Link to='cart'>Cart</Link></li>
                                    <li className='mb-1 pl-4 pr-5 w-36 py-1 hover:text-red-600 cursor-pointer hover:bg-offwhite'><Link to='wishlist'>Wish list</Link></li>
                                    <li className='mb-1 pl-4 pr-5 w-36 py-1 hover:text-red-600 cursor-pointer hover:bg-offwhite'><Link to='check'>Check Out</Link></li>
                                    <li className='mb-1 pl-4 pr-5 w-36 py-1 hover:text-red-600 cursor-pointer hover:bg-offwhite'><Link to='account'>My Account</Link></li>
                                </ul>
                            </div>
                        </span>

                        <span className='flex relative gap-1 py-1' onMouseEnter={() => setFlag(true)} onMouseLeave={() => setFlag(false)}>
                            <img width="22" height="22" src={selectedLanguage.flag} alt={selectedLanguage.name} />
                            {selectedLanguage.name} <i className="fa fa-angle-down mt-1" aria-hidden="true"></i>
                            <div className={`absolute cursor-pointer top-full left-0 bg-white border px-10 text-sm py-3 z-10 shadow-slate-300 shadow-md ${flag ? 'block' : 'hidden'}`}>
                                <span
                                    className='flex mb-1 gap-2 -ml-6 hover:text-red-600'
                                    onClick={() => handleLanguageChange('English', 'https://img.icons8.com/color/48/usa.png')}
                                >
                                    <img width="24" height="22" src="https://img.icons8.com/color/48/usa.png" alt="usa" />
                                    English
                                </span>
                                <span
                                    className='flex mb-1 gap-2 -ml-6 hover:text-red-600'
                                    onClick={() => handleLanguageChange('Arabic', asset)}
                                >
                                    <img width="30" height="22" src={asset} alt="arabic" />
                                    Arabic
                                </span>
                            </div>
                        </span>

                        <span className=' relative py-1.5' onMouseEnter={() => setRupee(true)} onMouseLeave={() => setRupee(false)}>
                            INR <i className="fa fa-angle-down " aria-hidden="true"></i>

                            <div className={`absolute top-full -left-4 bg-white border px-5 text-sm py-2 z-10 shadow-slate-300 shadow-md ${rupee ? 'block' : 'hidden'}`}>
                                <ul>
                                    <li className='mb-1 hover:text-red-600 cursor-pointer'>INR</li>
                                    <li className='mb-1 hover:text-red-600 cursor-pointer'>USd</li>
                                    <li className='mb-1 hover:text-red-600 cursor-pointer'>EUR</li>
                                </ul>
                            </div>
                        </span>
                    </div>

                </div>
                <div className="head2 lg:px-24 lg:pt-5 lg:flex lg:justify-between lg:items-stretch lg:overflow-hidden flex justify-between items-center px-2 py-2 ">
                    <Link className='lg:hidden'>

                        {barsdata ? (
                            <FaTimes
                                className='barsclass font-semibold text-2xl mt-1  text-zinc-800 transition-transform duration-500 ease-in-out transform rotate-180'
                                onClick={() => setBars(!barsdata)}
                            />
                        ) : (
                            <FaBars
                                className='barsclass font-thin text-2xl mt-1 text-zinc-700 transition-transform duration-500 ease-in-out'
                                onClick={() => setBars(!barsdata)}
                            />
                        )}

                    </Link>
                    {
                        <div className={`responav lg:hidden bg-white w-full py-1 mt-2 absolute top-12 left-0 z-50 ${barsdata ? 'translate-x-0' : '-translate-x-full'} ${barhide ? 'hidden' : 'flex'}`}>
                            <ul className='flex flex-col py-0.5 text-sm font-semibold'>
                                <li className='cursor-pointer p-2'>
                                    <NavLink to='' className={({ isActive }) => {
                                        return (
                                            ['hover:text-red-600', isActive ? 'text-red-600 border rounded-md bg-offwhite py-2 font-sans px-2 pr-80' : "rounded-md border font-sans text-black py-2 px-2 pr-80"].join(' ')
                                        )
                                    }} onClick={() => setBars(!barsdata)} ><span className='pr-11 font-sans'>Home</span></NavLink>
                                </li>
                                <li className='cursor-pointer p-2'>
                                    <NavLink to='/about' className={({ isActive }) => {
                                        return (
                                            ['hover:text-red-600', isActive ? 'text-red-600 border rounded-md bg-offwhite py-2 font-sans px-2 pr-80' : "rounded-md border border-t-0 font-sans text-black py-2 px-2 pr-80"].join(' ')
                                        )
                                    }} onClick={() => setBars(!barsdata)}><span className='pr-3.5 font-sans'>ABOUT US</span></NavLink>
                                </li>
                                <li className=' cursor-pointer  p-2'>
                                    <NavLink to='/contact' className={({ isActive }) => {
                                        return (
                                            ['hover:text-red-600', isActive ? 'text-red-600 border rounded-md bg-offwhite py-2 font-sans px-2 pr-80' : "rounded-md border font-sans text-black py-2 px-2 pr-80"].join(' ')
                                        )
                                    }} onClick={() => setBars(!barsdata)}><span className='pr-5 font-sans'>CONTACT</span></NavLink>
                                </li>
                                <li className=' cursor-pointer  p-2'>
                                    <NavLink to='/shop' className={({ isActive }) => {
                                        return (
                                            ['hover:text-red-600', isActive ? 'text-red-600 border rounded-md bg-offwhite py-2 font-sans px-2 pr-80' : "rounded-md border font-sans text-black py-2 px-2 pr-80"].join(' ')
                                        )
                                    }} onClick={() => setBars(!barsdata)}><span className='pr-11 font-sans'>SHOP</span></NavLink>
                                </li>
                                <li className='py-1 w-full flex justify-start ml-3 items-center gap-3'>
                                    <button onClick={handleClick} className='bg-red-500 font-sans text-white p-2 px-2 text-sm rounded'>Login</button>
                                    <button onClick={handleClick} className='bg-red-500 font-sans text-white p-2 px-2 text-sm rounded'>SignUp</button>
                                </li>
                            </ul>
                        </div>
                    }
                    <Link to='/' className=''><img src={logo} alt="img error" className='img1 lg:flex hidden cursor-pointer' /></Link>
                    <Link to='/'><img src={logo2} alt="img error" className='img2 lg:hidden lg:mt-1 w-52  flex cursor-pointer mt-0 -ml-14 ' /></Link>
                    <div className="border rounded h-12 rounded-r-md lg:flex hidden">
                        <div className="relative select-wrapper">
                            <select
                                name="sel"
                                id="sel"
                                value={option}
                                onChange={handleOptionChange}
                                className="custom-select border-r h-full bg-transparent text-gray-700  pl-2 pr-8 ml-2 leading-tight focus:outline-none">
                                <option value="All Categories">All Categories</option>
                                <option value="uncategorized">Uncategorized</option>
                                <option value="daily deal">Daily Deal</option>
                                <option value="chikki">Chikki</option>
                                <option value="fudge">Fudge</option>
                                <option value="dry fruit roll">Dry Fruit Roll</option>
                                <option value="namkeen">Namkeen</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <IoMdArrowDropdown className="text-gray-700 text-xl -ml-5 mt-1.5 font-bold" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="p-2 text-gray-800 w-96 focus:outline-none"
                            placeholder="Enter your keyword..."
                            value={query}
                            onChange={handleQueryChange}
                        />
                        <Link to='/search' onClick={SearchButton} className="border-red-600 bg-red-600 p-2.5 px-5 text-white flex justify-center items-center rounded-r font-bold text-sm hover:bg-gray-500 hover:border-gray-500">
                            Search
                        </Link>
                    </div>

                    <span className='ml-14 mt-2.5 text-2xl font-light flex justify-between w-16 h-8 lg:gap-3 gap-1'>
                        <Link href="#"><PiShuffle className='text-3xl -mt-1 lg:flex hidden' /></Link>
                        <Link> <IoSearchOutline className='icons lg:hidden text-2xl -ml-5' onClick={() => setResearch(!research)} /></Link>
                        <Link to='account'><CgProfile className=' text-xl mt-0.5 font-bold lg:hidden ' /></Link>
                        <Link to='/wishlist'><CiHeart className='lg:text-3xl lg:-mt-1 lg:ml-0  text-2xl' /></Link>
                        <Link to='/cart'><HiOutlineShoppingBag className='lg:hidden text-2xl ' /></Link>
                    </span>

                    <Link to='cart'>
                        <div className='ml-9 mt-1 relative w-40 cursor-pointer pb-2.5 lg:flex hidden' onMouseOver={() => setCart(true)} onMouseLeave={() => setCart(false)}>
                            <div className='w-10 h-10 bg-red-600 flex justify-center items-center rounded-sm' to='cart'><img src={cart} alt="img error" /></div>
                            <span className='ml-2 mt-2 font-serif font-light'>My Cart</span>
                            {/* <div className='absolute top-6 left-12 text-xs'>0 items(s)- <span className='text-red-600'><i className="fa fa-inr" aria-hidden="true"></i>0.00</span></div>
                            <div className={`absolute shadow-2xl shadow-black -left-36 top-full z-50 bg-white red w-80 h-40 ${cartbox ? 'block' : 'hidden'}`}>
                                <p className='pt-5 text-sm px-5 border-b pb-1.5'>There are <span className='text-red-600'>0 item(s)</span> in your cart</p>
                                <div className='px-5 py-3'>
                                    <p className='text-sm font-bold flex justify-between'>Subtotal: <span className='text-red-600 flex items-center text-lg'><FaIndianRupeeSign className='text-sm mt-1' />0.00</span></p>
                                    <div className='py-3 mt-2'><button className='hover:bg-red-500 text-white p-2 text-sm rounded-full px-8 bg-gray-400'>View Cart</button><button className='ml-6 bg-gray-400 hover:bg-red-500 text-white p-2 text-sm rounded-full px-8'>Check Out</button></div>
                                </div>
                            </div> */}
                        </div>
                    </Link>

                </div>
                <div className="head3 lg:items-center lg:ml-28 lg:mt-7 lg:flex ">
                    <div className={`lg:flex relative cursor-pointer items-center p-3 bg-red-600 w-64 text-white gap-2 rounded-t-md hidden`} onClick={() => setDepart(!depart)}>
                        <HiOutlineBars4 className='text-2xl' />
                        <strong className='text-sm'>ALL DEPARTMENTS</strong>
                        <MdOutlineArrowDropDownCircle className='ml-7 text-lg' />
                        {depart && (
                            <div className={`absolute z-50 top-full rounded-b left-0 bg-white  border w-full text-black text-sm py-2 opacity-0  scale-y-0 transition-all duration-500 delay-1000  ${depart ? 'opacity-100 visible scale-y-100 2s' : ''}`}>
                                <ul>
                                    <li className='mb-1 border-b mx-3 py-2 px-6 text-sm font-semibold hover:text-red-600 cursor-pointer'><Link to='/chikki'>CHIKKI</Link></li>
                                    <li className='mb-1 border-b mx-3 py-2 px-6 text-sm hover:text-red-600 cursor-pointer'><Link to='/dryfruit'>Dry Fruit Roll</Link></li>
                                    <li className='mb-1 border-b mx-3 py-2 px-6 text-sm hover:text-red-600 cursor-pointer'><Link to='/fudge'>Fudge</Link></li>
                                    <li className='mx-3 py-2 px-6 text-sm hover:text-red-600 cursor-pointer'><Link to='/namkeen'>Namkeen</Link></li>
                                </ul>
                            </div>
                        )}

                    </div>

                    <ul className='lg:flex hidden gap-10 ml-14 text-sm font-semibold'>
                        <li className=' cursor-pointer'>
                            <NavLink to='' className={({ isActive }) => {
                                return (
                                    ['hover:text-red-600', isActive ? 'text-red-600' : "text-black"].join(' ')
                                )
                            }} >Home</NavLink>
                        </li>
                        <li className='cursor-pointer'>
                            <NavLink to='/about' className={({ isActive }) => {
                                return (
                                    ['hover:text-red-600', isActive ? 'text-red-600' : "text-black"].join(' ')
                                )
                            }} >ABOUT US</NavLink>
                        </li>
                        <li className=' cursor-pointer'>
                            <NavLink to='/contact' className={({ isActive }) => {
                                return (
                                    ['hover:text-red-600', isActive ? 'text-red-600' : "text-black"].join(' ')
                                )
                            }} >CONTACT</NavLink>
                        </li>
                        <li className=' cursor-pointer'>
                            <NavLink to='/shop' className={({ isActive }) => {
                                return (
                                    ['hover:text-red-600', isActive ? 'text-red-600' : "text-black"].join(' ')
                                )
                            }} >SHOP</NavLink>
                        </li>
                    </ul>
                    <span className='lg:ml-56 lg:flex lg:relative hidden'>Speciasl Offer! <sup className='absolute -top-4 left-14'><img src={sup} alt="img" /></sup></span>
                </div>
            </header>

            <div className='emptydiv'></div>
            {showLogin && <LoginComponent closeLogin={closeLogin} />}
            {barhide && <LoginComponent closeLogin={closeLogin} />}
            {research && (
                <div className={`lg:hidden fixed inset-0 w-full h-full z-40 bg-black bg-opacity-50 flex justify-center`} onClick={() => setResearch(false)} >
                    <div className="relative z-50 flex items-center space-x-2 py-5 opacity-100 bg-white p-4 w-80 mt-20 h-16 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="text"
                            className="w-64 h-9 rounded border border-red-500 z-50 px-4 font-sans placeholder:text-black"
                            value={query}
                            onChange={handleQueryChange}
                            onKeyDown={handleKeyDown}
                            placeholder='Search.....'

                        />
                        <Link to='/search'><IoSearchOutline className="text-2xl text-black z-50" onClick={SearchButton} /></Link>
                    </div>
                </div>


            )}
        </>

    )
}

export default HeaderComponent;
