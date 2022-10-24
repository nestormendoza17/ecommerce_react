import React from 'react';
import { useCartContext } from "../Context/CartContext";
import { NavLink } from 'react-router-dom';


export const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <NavLink to="/cart">
      <p className="text-center mt-4">
      <i className="bi bi-cart"></i>
        <span className="badge rounded-pill text-bg-success">
          {totalProducts() || ""}
        </span>
      </p>
    </NavLink>
  );
};

export default CartWidget;

   