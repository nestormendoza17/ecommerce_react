import "./itemListContainer.css";
import React, {useState, useEffect} from "react";
import Title from "../title/Title";
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';

const vinos = [
    {id: 1, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/367/826/products/1391-d7d023796f9eb5ad4c16046855094017-640-0.jpg", title: "Vasija Secreta", category: "suave",},
    {id: 2, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/367/826/products/assoy1-353865a255cc55964716104650980088-640-0.jpg", title: "Así como soy",category: "suave",},
    {id: 3, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/367/826/products/sottano-malbecrose_11-dd64be96dc05aac3b016599925901330-320-0.jpg", title: "Sottano Rose",category: "suave",},
    {id: 4, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/367/826/products/111-9e706d270f647a723216064095001609-320-0.jpg", title: "Tierra Prometida",category: "tinto",},
    {id: 5, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/367/826/products/1281-fc6a1f3a834b9a124e16046839907053-320-0.jpg", title: "Gata Flora Pink",category: "tinto",},
];

export const ItemListContainer = ({texto}) => {
    const [data,setData] =useState([]);
    const {categoriaId} = useParams();

    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout(()=>{
            resolve(vinos);
            }, 1000)
        });
        if (categoriaId) {
            getData.then(res=> setData(res.filter(vino=> vino.category === categoriaId)));
        } else {
        getData.then(res=> setData(res));
    }
    }, [categoriaId])

    

    return (
        <div className="container__">
            <Title />
            <ItemList data={data} />

        </div>
    )
}

export default ItemListContainer;