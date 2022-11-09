import "./item.css";
import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";

const Item = ({info}) => {
    const nombre = useContext(CartContext);
    console.log('Item: ', nombre);
    return (
        <Link to={`/detalle/${info.id}`} className="vinos">
            <p>{info.titulo}</p>
            <img src={info.imagen} alt="" />
            <p>${info.price}</p>
            
        </Link>
    );
}

export default Item;