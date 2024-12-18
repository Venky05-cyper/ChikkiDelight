import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import AboutComponent from './AboutComponent';
import HomeComponent from './HomeCompo';
import FooterComponent from './FooterComponent';
import ContactComponent from './ContactComponent';
import ShopComponent from './ShopComponent';
import CreateAccountComponent from './CreateAccountComponent';
import ChikkiCompnent from './ChikkiCompnent';
import WishlistComponent from './WishlistComponent';
import CartComponent from './CartComponent';
import CheckoutComponent from './CheckoutComponent';
import { useState } from 'react';
import { MyProvider } from './CreateContext/Mycontext';
import SearchComponent from './SearchComponent';
import FudgeComponent from './FudgeComponent';
import DryFruitComponent from './DryFruitComponent';
import NamkeenComponent from './NamkeenComponent';
import UncategoriesComponent from './UncategoriesComponent';
import DailyDealComponent from './DailyDealComponent';
import GiftHamper from './GiftHamper';
import ViewProductComponent from './ViewProductComponent';
import DisclaimerComponent from './DisclaimerComponent';
import PrivacyPolicyComponent from './PrivacyPolicyComponent';
import TermsComponent from './TermsComponent';
import CancellationComponent from './CancellationComponent';
import ShippingComponent from './ShippingComponent';
import ScrollToTop from './ScrollToTop';

function App() {

  const [cart, setCart] = useState([]);
  const [searchParams, setSearchParams] = useState({ option: '', query: '' });

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const WishlistCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const [cart1, setCart2] = useState([]);
  const AddToCart = (product) => {
    if (!cart1.find(item => item.id === product.id)) {
      setCart2([...cart1, product]);
    }
  };

  const removeFromCart1 = (productId) => {
    setCart2(cart1.filter(product => product.id !== productId));
  };

  return (
   <>
   <MyProvider>
   <BrowserRouter>
   <HeaderComponent onSearch={handleSearch}/>
   <ScrollToTop/>
    <Routes>
    <Route index element={<HomeComponent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    {/* <Route path='home' element={<HomeComponent />} /> */}
    <Route path="about" element={<AboutComponent />} />
    <Route path="contact" element={<ContactComponent />}/>
    <Route path="shop" element={<ShopComponent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="account" element={<CreateAccountComponent />}/>
    <Route path="wishlist" element={<WishlistComponent cart={cart}  removeFromCart={removeFromCart}/>} />
    <Route path="cart" element={<CartComponent cart1={cart1} removeFromCart={removeFromCart1}/>} />
    <Route path="check" element={<CheckoutComponent />}/>
    <Route path="search" element={<SearchComponent WishlistCart={WishlistCart} AddToCart={AddToCart} searchParams={searchParams} />} />
    <Route path="chikki" element={<ChikkiCompnent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="fudge" element={<FudgeComponent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="dryfruit" element={<DryFruitComponent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="namkeen" element={<NamkeenComponent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="uncator" element={<UncategoriesComponent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="daily" element={<DailyDealComponent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="gift" element={<GiftHamper WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="viewproducts" element={<ViewProductComponent WishlistCart={WishlistCart} AddToCart={AddToCart}/>} />
    <Route path="disclaimer" element={<DisclaimerComponent />}/>
    <Route path="privacy" element={<PrivacyPolicyComponent />}/>
    <Route path="term" element={<TermsComponent />}/>
    <Route path="cancel" element={<CancellationComponent />}/> 
    <Route path="shipping" element={<ShippingComponent />}/>
    </Routes>
    <FooterComponent/>
   </BrowserRouter>
   </MyProvider>
   </>
  );
}

export default App;
