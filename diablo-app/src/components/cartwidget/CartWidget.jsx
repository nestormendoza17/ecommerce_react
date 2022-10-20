import React from 'react';
import { useCartContext } from "../Context/CartContext";



export const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <div>
            <i className="bi bi-cart"></i>
        <span>{totalProducts() || ''}</span>
        </div>
        
    );
}

export default CartWidget;

   