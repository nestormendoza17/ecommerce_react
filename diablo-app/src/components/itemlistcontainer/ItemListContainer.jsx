import "./itemListContainer.css";
import React, {useState, useEffect} from "react";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import Title from "../title/Title";
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';


export const ItemListContainer = ({texto}) => {
    const [data,setData] =useState([]);
    const {categoriaId} = useParams();

    useEffect(()=> {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        const queryFilter = query(queryCollection, where('category', '==', categoriaId), )
        getDocs(queryFilter)
        .then(res=> setData(res.docs.map(product => ({id:product.id, ...res.data()}))))
    } else {
        getDocs(queryCollection)
        .then(res=> setData(res.docs.map(product=>({id:product.id, ...res.data()}))))
        /* if (categoriaId) {
            getData.then(res=> setData(res.filter(vino=> vino.category === categoriaId)));
        } else {
        getData.then(res=> setData(res));
    } */
    }, [categoriaId])

    

    return (
        <div className="container__">
            <Title />
            <ItemList data={data} />

        </div>
    )
}

export default ItemListContainer;