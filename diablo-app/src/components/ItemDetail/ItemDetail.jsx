import './itemDetail.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';




export const ItemDetail = ({data})=> {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={data.imagen}
            alt={data.titulo}
            className="img-fluid item-detail__img"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-center item-detail__title">{data.titulo}</h2>
          <p className="text-center">${data.price}</p>
          <p className="text-center">{data.descripcion}</p>
          {goToCart ? (
            <div className="row mt-5">
              <div className="col-md-6 text-center">
                <Link to="/cart">
                  <button className="btn btn-success">Ir al carrito</button>
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <Link to="/">
                  <button className="btn btn-warning">Seguir comprando</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="col-md-6 offset-3">
              <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;