import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCar";
import {addDoc,getFirestore} from 'firebase/firestore';

const Cart =()=> {
    const {cart,totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Pepe',
            email: 'pepe@mail.com',
            phone: "12311231",
            address: 'Evergreen'
        },
        Items: cart.map(product=> ({id:product.id, title: product.title, price: product.price, quantity: product.quantity})) ,
        total:totalPrice ,
    }
    const handleClick = ()=>{
        const db = getFirestore();
        const orderCollection = collection (db,'order');
        addDoc(orderCollection, order)
        .then(({id})=> console.log(id))

    }

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
               total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir compra</button>
        </div>
    );
}

export default Cart;