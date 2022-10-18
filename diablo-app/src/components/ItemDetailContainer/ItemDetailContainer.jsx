import React , {useState,useEffect}from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const vino = {id:1, nombre:"VAS", imagen:"https://d2r9epyceweg5n.cloudfront.net/stores/001/367/826/products/1371-837f727f3a3773ece416046852122455-320-0.jpg", descripcion:"En tu mesa tendras un pedacito de Cafayate.", precio:2500, stock:80, categoria: "dulce",}

const ItemDetailContainer = ()=> {

    const [data,setData] = useState({});

    useEffect(()=> {
        const getData = new Promise (resolve => {
            setTimeout(()=> {
                resolve(vino);
            }, 3000);
        });
        getData.then(res=> setData(res));
    },[])
    return (
        <ItemDetail data={data}/>
        
    );
}

export default ItemDetailContainer;