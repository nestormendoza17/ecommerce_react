import './itemDetail.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const ItemDetail = ({data})=> {
    const [goToCart, setGoToCart] = useState(false);
    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} alt="" />
                <div className="content">
                {
                    goToCart
                    ? <Link to='/cart'>Llevarte el vinito</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
                <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;