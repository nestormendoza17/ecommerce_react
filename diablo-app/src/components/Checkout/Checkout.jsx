import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import ItemCart from '../ItemCart/ItemCar';

const Checkout = () => {
    const { cart, totalPrice } = useCartContext();
    const {orderId, setOrderId } = useState ("") ;
    const handleId= (numeroDeOrden) => {
        setOrderId(numeroDeOrden);

    };
    if (cart.length === 0) {
        return (
            <div classsName= "container mt-5">
                <div className="col-md-12">
                    <h1 className="text-center">No agregaste un vinito</h1>
                    <Link to= "/">
                        <button className="btn btn-primary">Ir al home</button>
                    </Link>
                </div>
            </div>
        );
    }
    if (orderId) {
        return (
            <div className="container">
               <div className="row">
                <div className="col-md-12">
                    <h1 classsName="text-center">Gracias por comprar tu vinito.</h1>
                    <h3 className="text-center mt-3">Te dejamos el codigo de seguimiento de tu compra : {orderId}</h3>
                </div>
               </div>
            </div>
        );
    }
    return (
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Form handleId={handleId} />
        </div>
        <div className="col-md-6">
          {cart.map((producto) => (
            <ItemCart key={producto.id} producto={producto} />
          ))}
          <p className="text-center"><b>Total a pagar : ${totalPrice()}</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
  
}

export default Checkout;