import React, { createContext, useState } from 'react';

const Mycontext = createContext();

const MyProvider = ({ children }) => {
    const [data, setData] = useState();
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [user, setUser] = useState(null);
    const [viewproduct,setViewproduct] = useState([]);

    return (
        <Mycontext.Provider value={{ data, setData, cart, setCart, wishlist, setWishlist, user, setUser,viewproduct,setViewproduct }}>
            {children}
        </Mycontext.Provider>
    );
}

export { MyProvider, Mycontext };
