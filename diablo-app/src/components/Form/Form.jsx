import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, {useState,} from 'react';
import { useCartContext } from "../Context/CartContext";
import { getFirestore } from "firebase/firestore";

const Form = ({handleId}) => {
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [direccion, setDireccion] = useState ("");
    const [telefono, setTelefono] = useState ("");

    const {totalPrice, cart} = useCartContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre, telefono, email, direccion},
            cart: cart,
            date: serverTimestamp(),
            total: totalPrice(),
        };
        const db = getFirestore();
        const refOrden = collection (db, "orders");
        addDoc(refOrden, orden).then((res)=> {
            handleId(res.id);
        });
    };
    const handleNombre = (e)=> {
        setNombre(e.target.value);
    };
    const handleTelefono = (e)=> {
        setTelefono(e.target.value);
    };
    const handleDireccion = (e) => {
        setDireccion(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail (e.target.value);
    };

    return (
        <div className="col-md-9">
            <form className="row g-3" onSubmit ={handleSubmit}>
            <div className="col-md-12">
                    <label htmlFor="nombre"> Nombre</label>
                    <input type="text" className="form-control" id="telefono" onChange={handleNombre} value={telefono}/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="telefono"> Telefono</label>
                    <input type="text" className="form-control" id="telefono" onChange={handleTelefono} value={telefono}/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="email"> e-mail</label>
                    <input type="text" className="form-control" id="email" onChange={handleEmail} value={email}/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="direccion">Direccion</label>
                    <input type="text" className="form-control" id="direccion" onChange={handleDireccion} value={direccion}/>
                </div>
                <div className="col-12">
                    <button className="btn btn-success">Generar Orde de compra</button>
                </div>
            </form>
        </div> 
        );

};

export default Form;
