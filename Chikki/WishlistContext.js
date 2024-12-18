import  { createContext } from 'react';

 const WishlistContext = createContext();
 export default WishlistContext;

        {/* <div className='w-72 h-max flex flex-col justify-center '>
          <div className='border-t-2 rounded border-red-500 h-2/5 bg-white'>
            <h1 className='p-2.5 border-b pl-5 text-xs font-serif font-semibold'>CATEGORIES</h1>
            <ul className='w-full pl-5 py-2 border-b-2 border-red-500'>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/chikki'>Chikki</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/daily'>Daily Deal</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/dryfruit'>Dry Fruit Roll</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/fudge'>Fudge</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/gift'>Gift Hamper</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/namkeen'>Namkeen</Link></li>
              <li className='text-xs cursor-pointer hover:text-red-500 font-serif p-2'><Link to='/uncator'>Uncategorized</Link></li>
            </ul>
            <h1 className='p-2.5 border-b pl-5 text-xs font-serif font-semibold'>BY PRICE</h1>
            <div className='p-3'>
              <div className='mb-4 flex'>
                <input type="range" id="range" className='range-input focus:outline-none w-64 bg-offwhite text-red-500 placeholder:font-sans' min='0' max='1300' onChange={handleSliderChange} />
              </div>
              <div className='flex justify-center gap-2 text-xs'>
                <input type="number" className='min-input border w-28 px-3 py-1 focus:outline-none placeholder:font-sans' value={value} readOnly />
                <input type="number" className='max-input border w-28 px-3 py-1 focus:outline-none placeholder:font-sans' value={maxvalue} readOnly />
              </div>
              <div className='flex justify-between items-center mt-5'>
                <button className='bg-red-500 text-white font-serif text-sm py-1 px-3' onClick={FilterBUtton}>Filter</button>
                <span className='text-xs text-gray-600 font-sans'>Price: {value} INR - 1300 INR</span>
              </div>
            </div>
          </div>
          <div className='lg:flex hidden'><img src={img2} alt="img" className='w-72' /></div>
        </div> */}

