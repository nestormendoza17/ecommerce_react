import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const Cart =()=> {
    const {cart,totalPrice, clearCart} = useCartContext();

        if (cart.length === 0) {
        return (
            <div>
                <p>No hay vinito en el carrito</p>
                <Link to='/'>Comprar vinito</Link>
                
            </div>
        );
    }

    return (
        <div className="container mt-5">
            {cart.map(product=><ItemCart key={product.id} product={product}/>)}
            <div className="row">
            <p>Total: ${totalPrice()}</p>
            </div>
            <div className="col-md-2"><button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button></div>            
           <div className="col-md-2"><Link to="/checkout">
            <button className="btn btn-success">Llevar Vinito</button>
            </Link></div>
        </div>
    );
}

export default Cart;