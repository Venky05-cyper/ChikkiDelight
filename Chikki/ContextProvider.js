import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [usecart, setUsecart] = useState([]);

    return (
        <CartContext.Provider value={{ usecart, setUsecart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
