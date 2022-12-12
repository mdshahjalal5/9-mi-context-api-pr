import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header'
export const CartContext = createContext([]);
export const ProductsContext = React.createContext([]);
export  const Root = () => {
    const {products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    return(
        <>
            <ProductsContext.Provider value={[products, initialCart]}>
                <CartContext.Provider value={[cart, setCart]}>
                <Header/>
                <Outlet/>
                <Footer/>                
                </CartContext.Provider>
            </ProductsContext.Provider>
                
        </>
    )
}