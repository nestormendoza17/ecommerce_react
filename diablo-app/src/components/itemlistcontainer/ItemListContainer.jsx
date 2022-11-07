import "./itemListContainer.css";
import React, {useState, useEffect} from "react";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
/* import Title from "../title/Title"; */
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "vinos");

    if (category) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", category)
      );
      getDocs(queryFilter).then((res) =>
        setItems(
          res.docs.map((vino) => ({ id: vino.id, ...vino.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setItems(
          res.docs.map((vino) => ({ id: vino.id, ...vino.data() }))
        )
      );
    }
  }, [category]);

  return (
    <div className="container">
      <div className="row">
        <ItemList vinos={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;