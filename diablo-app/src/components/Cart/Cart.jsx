import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCar";

const Cart =()=> {
    const {cart,totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <div>
                <p>No hay vinito en el carrito</p>
                <Link to='/'>Comprar vinito</Link>
            </div>
        );
    }

    return (
        <div>
            {
                cart.map(product=><ItemCart key={product.id} product={product}/>)
            }
            <p>
                
            </p>
        </div>
    );
}

export default Cart;