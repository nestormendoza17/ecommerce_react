import "./item.css";
import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";

const Item = ({info}) => {
    const nombre = useContext(CartContext);
    console.log('Item: ', nombre);
    return (
        <Link to={`/detalle/${info.id}`} className="vinos">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;