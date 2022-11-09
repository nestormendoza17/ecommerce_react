import React from "react";
import { useCartContext } from "../Context/CartContext";
import './itemCart.css';

const ItemCart = ({product}) => {
    const {removeProduct}= useCartContext();
 return (
    <div className="itemCart">
        <img src={product.imagen} alt={product.titulo} />
        <div>
            <p>Titulo: {product.titulo}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio por Botella: {product.price}</p>
            <p>Subtotal: {product.quantity * product.price} </p>
            <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
 );
}

export default ItemCart;