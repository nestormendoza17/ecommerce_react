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
        const queryCollection = collection(querydb, 'vinos');
        if (categoria) {
            const queryFilter = query(
              queryCollection,
              where("categoria", "==", categoriaId)
            );
            getDocs(queryFilter).then((res) =>
              setItems(
                res.docs.map((product) => ({ id: product.id, ...product.data() }))
              )
            );
          } else {
            getDocs(queryCollection).then((res) =>
              setItems(
                res.docs.map((product) => ({ id: product.id, ...product.data() }))
              )
            );
          }
        }, [categoriaId]);
      
    

    return (
        <div className="container__">
            <Title />
            <ItemList data={data} />

        </div>
    )
}

export default ItemListContainer;